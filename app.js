const express = require("express");
const app = express();

app.get("/" , (req ,res)=> { 
    res.send("this is home page");
});

app.get("/about" , (req,res)=>{
    // this is array or list of all parameters
    console.log(req.query);

    // this specifically 
    console.log(req.query.name);
    
});

app.listen(5000);