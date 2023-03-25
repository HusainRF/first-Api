const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const ProductSchema =  new mongoose.Schema({
    name : String,
    price : Number,
    brand: String,
    category: String
});

const saveInDB = async ()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let data =  new ProductModel({
        name : "samsung s22",
        price : 1000
    });
    let result = await data.save();
    console.log(result);
}
// saveInDB();

const updateInDB = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data =await ProductModel.updateOne(
        {name:"max 3"},
        { $set:{name:"max 4" , price: 500} }
    )
    console.log(data);
}
// updateInDB();

const deleteInDB = async ()=>{
    const ProductModel = mongoose.model('products' , ProductSchema);
    let data = await ProductModel.deleteOne({name: 'max 4'});
    console.log(data);
}
// deleteInDB();

const findInDB = async ()=>{
    const ProductModel = mongoose.model('products' , ProductSchema);
    let data = await ProductModel.find({name :'max 4'});
    console.log(data);
}

findInDB();
