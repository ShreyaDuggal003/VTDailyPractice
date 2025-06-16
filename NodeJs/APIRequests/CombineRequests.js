const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: false})) //middleware or plugin
app.use(express.json());

app.get('/api/users', (req, res) => {
    return res.json(users)
})

//CAN COMBINE THE REQUESTS ALSO WITH SAME CODE
app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})
.patch((req, res) => {
    //TODO - Create new user
    const id = Number (req.params.id)
    let user = users.find (user => user.id === id)
    const idx = users.indexOf (user);
    
    const newObj = Object.assign (user , req.body)
    users[idx] = newObj;

    fs.writeFile ('./MOCK_DATA.json',JSON.stringify(users) , (err,data) => {
        return res.json ({status: "success", users: user })
    })
})
.delete((req, res) => {
    //TODO - Delete user with is
    const id = Number(req.params.id);
    const userIdx = users.findIndex((user)=> user.id === id);

    const delUser = users.splice(userIdx, 1)[0];

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", delUser });
    });
})


app.listen(PORT, () => console.log("Server started at port", PORT))