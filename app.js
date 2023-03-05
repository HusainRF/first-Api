const {MongoClient} = require('mongodb');


// remember localhost is an ip address for 127.0.0.1
// so 'localhost' is not working here instead of this we have to write 127.0.0.1
// this is due to updated version of node 
const url = "mongodb://127.0.0.1:27017/";


const database = 'e-comm'
const client = new MongoClient(url);

async function dbConnect(){
    const result = await client.connect();
    const db = result.db(database);
    return db.collection('products');
}

// this is the first method
// dbConnect().then((resp)=>{
//     // console.log(resp.find().toArray()); : this gives ous the promise now lets handle the promise
//     // .then() function is use to handle the promise due to few functions  
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })

// 2nd method
const main = async () =>{
    // async is used when we use await keyword and await is used to handle promises
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
} 

main();

