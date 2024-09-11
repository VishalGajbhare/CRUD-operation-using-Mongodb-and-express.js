const express = require('express');
const app = express();

const userModel= require('./usermodel');

app.get("/",(req,res)=>{
    res.send("hey, your are done man..");
});

app.get("/create",async(req,res)=>{
    let createuser = await userModel.create({
        name:"harsh",
        email:"harsh@gmail.com",
        username:"harsh"
    });
    res.send(createuser);
} );
app.get('/update',async(req,res)=>{
    let updateUser = await userModel.findOneAndUpdate({
        username:"harsh"},{name:"Vishal Gajbhare"},{new:true});
        res.send(updateUser);
    
});
app.get("/read",async(req,res)=>{
    let users = await userModel.find();
    res.send(users);
});
app.get("/delete",async(req,res)=>{
    let users = await userModel.findOneAndDelete({username:"harsh"});
    res.send(users);
});
app.listen(3000);