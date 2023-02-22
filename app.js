const express = require("express");
const app = express();

app.get("/" , (req ,res)=> { 
    res.send("this is home page");
});

app.get("/about" , (req,res)=>{
    res.send(`
        <h1>this is about page</h1>
        <a href="/">go to home</a>
    `);
});

app.listen(5000);