const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});


app.post('/' , async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body); 
    res.send(result);  
});

// req.body is storing the json data that was send by the website/postman
// in the end we are returning the acknowledgement to the sender  

app.listen(5000);
