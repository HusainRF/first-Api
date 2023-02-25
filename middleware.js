module.exports =  reqFilter = (req, res , next)=> {
    if(!req.query.age){
        res.send('Please Enter you Age');
    }
    else if(req.query.age < 18){
        res.send("you are under age");
    }
    else 
    next();
}