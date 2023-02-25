const express = require('express')

// for grouping of multiple routes to fall under same  middleware 
// we have to add a new function router()
const route = express.Router();
const reqFilter = require('./middleware');


const app = express();
app.use(reqFilter);

app.get('/' , (req ,res) => {
    // here we din't apply middleware
    res.send("These is home page");
});


// instead of using app >>> we use "route" object to grp them together
route.get('/user' , (req, res) =>{
    // grouping route level middle ware to this route
    res.send("These is user page");
});

// instead of using app >>> we use "route" object
route.get('/about' ,(req, res) =>{
    // grouping route level middle ware to this route
    res.send("These is about page");
});

// to group middleware we have to do these compulsory
app.use('/' , route); 

app.listen(5000);