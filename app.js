//connectivity was done is different file
const dbConnect = require('./mongodb')

// opration performed in different file

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

