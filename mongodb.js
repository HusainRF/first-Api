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

module.exports = dbConnect;
