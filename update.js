const dbConnect = require('./mongodb');

const updateData = async ()=> {
    const data = await dbConnect();
    const result = await data.updateMany(
        {brand: 'micomax'},
        {$set:{ brand : 'micromax'}}
    );
    console.log(result);
}

updateData();
