const express = require("express");
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , '/public');

//all other page can be accesed by the url loacalhost:5000/about.html
app.use(express.static(publicPath)); // here we load public folder in our server 

app.listen(5000); 