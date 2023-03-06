const dbConnect = require('./mongodb');

const insert1 = async ()=> {
    const db = await dbConnect();
    const result = await db.insertOne(
        {name: 'max1' , brand :'micomax' , price :100 , category:'mobile'}
    );
    if(result.acknowledged){
        console.log('data inserted');
    }
}

insert1();