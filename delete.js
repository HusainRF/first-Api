const dbConnect = require('./mongodb');

//1. deleteOne({obj-for-searching}) - only deletes 1 document
//2. deleteMany({obj-for-searching}) deletes all matching document
const deleteData = async ()=>{
    let data =  await dbConnect();
    let result = await data.deleteMany({
        price :100
    });
    console.warn(result);
}
deleteData();