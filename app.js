const express = require('express')
const reqFilter = require('./middleware');
// taking middle ware from different file

const app = express();

app.get('/' , (req ,res) => {
    res.send("These is home page");
});

app.get('/user' , (req, res) =>{
    res.send("These is user page");
});

app.get('/about' ,reqFilter ,(req, res) =>{
    // adding route level middle ware only to these route
    res.send("These is about page");
});

app.listen(5000);