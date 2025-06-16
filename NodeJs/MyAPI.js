const express = require('express')
const fs = require('fs')
const users = require('./USER_DATA.json');
const cors=require("cors");
const app = express();
app.use(cors());
const PORT = 8000;

app.use(express.urlencoded({extended: false})) //middleware or plugin
app.use(express.json());

// //HTML print of users
// app.get('/users', (req, res) => {
//     const html = `
//     <ul>
//        ${users.map((user) => `<li>${user.first_name}`).join("")} 
//     </ul>`

//     res.send(html)
// })

//API Routes
//GET REQUEST
app.get('/api/users', (req, res) => {
    return res.status(202).json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    if (!user)return res.status(404).send("Id doesn't exist"); 
    return res.status(202).json(user)
})


// // app.get('/api/users/:id', (req, res) => {
// //     console.log('req.params', req.params.id);
    
// //     // const id = Number(req.params.id)
// //     // console.log("id: " + id)
// //     // const user = users.find(user => user.id === id)
// //     const userByName = users.find(user => (user.first_name?.toLowerCase() ==req.params.id?.toLowerCase()|| user.last_name?.toLowerCase() ==req.params.id?.toLowerCase()))
// //     console.log("userByName",userByName);
    
// //     return res.send(userByName)
// // })


// //POST REQUEST
app.post('/api/users', (req, res) => {
    //TODO - Create new user
    const body = req.body
    users.push({id: users.length+1, ...body})
    fs.writeFile('USER_DATA.json', JSON.stringify(users), (err, data) =>{
         return res.status(202).json({status : 'success', id: users.length})
    })
   
})


// //DELETE REQUEST
app.delete('/api/users/:id', (req, res) => {
    //TODO - Delete user with is
    const id = Number(req.params.id);
    const userIdx = users.findIndex((user)=> user.id === id);
    if(userIdx==-1)return res.status(404).send("Id doesn't exist");
    const delUser = users.splice(userIdx, 1)[0];

    fs.writeFile("./USER_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(202).json({ status: "success", delUser });
    });
})


// //PATCH REQUEST
app.patch('/api/users/:id', (req, res) => {
    //TODO - Edit user with is
    const id = Number (req.params.id)
    let user = users.find (user => user.id === id)
    if(!user) return res.status(404).send("Id doesn't exist");
    const idx = users.indexOf (user);

    const newObj = Object.assign (user , req.body)
    users[idx] = newObj;

    fs.writeFile ('./USER_DATA.json',JSON.stringify(users) , (err,data) => {
        return res.status(202).json ({status: "success", users: user })
    })
})


//POST WITH PATCH
// app.post('/api/users/:id', (req, res) => {
//     //TODO - Create new user
//     const id = Number (req.params.id)
//     const user = users.find(user => user.id === id)

//     if (user)
//     {
//     const idx = users.indexOf (user);

//     const newObj = Object.assign (user , req.body)
//     users[idx] = newObj;

//     fs.writeFile ('./MOCK_DATA.json',JSON.stringify(users) , (err,data) => {
//         return res.json ({status: "success", users: user })
//     })
//     }
//     else{
//     const body = req.body
//     users.push({id: users.length+1, ...body})
//     fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
//          return res.json({status : 'success', id: users.length})
//     })
// }
// })


app.listen(PORT, () => console.log("Server started"))