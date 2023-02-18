// const http = require('http');
// const data = require('./data.js');

// http.createServer(function (req,res){
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);

// part-1
// console.log("1st to execute");

// setTimeout(()=>{
//     console.log("2nd to execute "); // it execute 3rd due to delay
// },2000);

// console.log("3rd to execute"); // but it execute 2nd


// drawback of Asynchronous lang
var a = 10 ;
var b = 0 ;

setTimeout(()=>{
    b=20;
});

console.log(a + b); // it prints 10 because, before executing b=20 it execute console
 