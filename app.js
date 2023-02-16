const http = require('http');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Husain Rampura' ,email: "husain@test.com"}));
    res.end();
}).listen(5000);