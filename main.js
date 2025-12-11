//1
const { error } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/user", (req,res)=>{
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).json({error: "Name amd email are required"});
    }

    let users = [];
    try {
        const data = fs.readFileSync("users.json", "utf-8" );
        users = JSON.parse(data);
    } catch (err) {
        users = [];
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
        return res.status(400).json({error: "email already exist"});
    }

    const newUser = {id : Date.now(), name, email};
    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users,null,2));

    return res.status(201).json({
        message: "user added",
        user: newUser
    });
});

app.listen(3000, ()=>{
    console.log("server running in port 3000");
    
});
//----------------------------------------------------------
//2
app.use(express.json());
app.patch("/user/:id", (req,res)=>{
    const userId = req.params.id;
    const {name, email, age} = req.body;

    let users = [];
    try {
        const data = fs.readFileSync("users.json", "utf-8");
        users = JSON.parse(data);
    } catch (err) {
        return res.status(500).json({error: "error reaading users file"});
    }

    const userIndex = users.findIndex(u => u.id == userId);

    if (userIndex === -1){
        return res.status(404).json({error: "user not found"});
    }
    const user = users[userIndex];

    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;
    if (age) users[userIndex].age = age;

    users[userIndex] = user;
    fs.writeFileSync("users.json", JSON.stringify(users, null,2));
    return res.json({
        message: "user updated",
        user: users[userIndex]
    });
});
//--------------------------------------------------------------------------
//3

app.use(express.json());

app.delete("/user/:id", (req, res) => {
    const paramId = req.params.id;
    const bodyId = req.body.id;

    const userId = paramId || bodyId;

    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

     fs.readFile("users.json", "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to read file" });

        let users = JSON.parse(data);

        const newUsers = users.filter(u => u.id != userId);

        if (newUsers.length === users.length) {
            return res.status(404).json({ error: "User not found" });
        }

        fs.writeFile("users.json", JSON.stringify(newUsers, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Failed to write file" });

            return res.json({
                message: "User deleted successfully",
                deletedId: userId
            });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});
//--------------------------------------------------------
//4
app.get("/user/getByName", (req,res)=>{
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({error: "Name is required"});
    }
    fs.readFile("users.json", "utf-8", (err, data)=>{
        if (err) return res.status(500).json({error:"failed to read file"});
        const users = JSON.parse(data);
        const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

        if(!user) {
            return res.status(404).json({error:"user not found"})
        }
        return res.json(user);
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000")
});
//-------------------------------------------------
//5
app.get('/user', (req,res)=>{
    const data = fs.readFileSync('./users.json', "utf-8");
    const users = JSON.parse(data);
    res.json(users);
})
app.listen(3000, () =>{
    console.log('server is running on port 3000');
    
});
//-----------------------------------------------------
//6
app.get('/user/filter', (req, res) => {
    const { minAge } = req.query;
    const data = fs.readFileSync('./users.json', 'utf8');
    const users = JSON.parse(data);

    if (!minAge) {
        return res.status(400).json({ error: "minAge is required" });
    }

    const filtered = users.filter(u => u.age >= Number(minAge));
    res.json(filtered);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//--------------------------------------------------
//7
app.get('/user/:id', (req,res)=>{
    const userId = Number(req.params.id);
    const data = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(data);
    const user = users.find(u => u.id === userId);
    
    if(!user) {
        return res.status(404).json({error:"user not found"});
    }
    res.json(user);
})