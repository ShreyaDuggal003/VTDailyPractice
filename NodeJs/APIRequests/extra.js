const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: false})) //middleware or plugin
app.use(express.json());

//HTML print of users
app.get('/users', (req, res) => {
    const html = `
    <ul>
       ${users.map((user) => `<li>${user.first_name}`).join("")} 
    </ul>`

    res.send(html)
})

//API Routes

//GET REQUEST
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})



//POST REQUEST
app.post('/api/users/:id', (req, res) => {
    //TODO - Create new user
    const id = Number (req.params.id)
    const user = users.find(user => user.id === id)

    if (user)
    {
    const idx = users.indexOf (user);

    const newObj = Object.assign (user , req.body)
    users[idx] = newObj;

    fs.writeFile ('./MOCK_DATA.json',JSON.stringify(users) , (err,data) => {
        return res.json ({status: "success", users: user })
    })
    }
    else{
    const body = req.body
    users.push({id: users.length+1, ...body})
    fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
         return res.json({status : 'success', id: users.length})
    })
}
})



app.listen(PORT, () => console.log("Server started"))