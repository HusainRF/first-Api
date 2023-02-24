const express = require('express')
const app = express();

// setting the middleware for filtering the request 
// coming from client side

const reqFilter = (req, res, next)=>{
    if(!req.query.age)
    {
        res.send("Please enter the age!!");
    }
    else if(req.query.age < 18){
        // basically check for the age of user must be above 18 for using this side 
        res.send("You cannot access this page...!!");
    }
    else 
        next();
}

app.use(reqFilter);

app.get('/' , (req ,res) => {
    res.send("These is home page");
});

app.get('/user' , (req, res) =>{
    res.send("These is user page");
});

app.listen(5000);