const express = require("express");
const path = require('path');

const app = express();

// set the view engine or template engine
app.set("view engine" ,"ejs");

const publicPath = path.join(__dirname , '/public');
app.get('' , (_, res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about' , (_,res) =>{
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/ejs' , (_,res)=>{
    res.render("WhatIsEjs");
});

app.get("/profile" , (_, res)=>{
    const user = {
        name : "Husain Rampurawala",
        email : "husain@gmail.com",
        age : "22"
    }
    res.render("profile" , {user});
});


app.get('*' , (_ , res) => {
    res.sendFile(`${publicPath}/404page.html`);
});


app.listen(5000); 