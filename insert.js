const dbConnect = require('./mongodb');

const insert1 = async ()=> {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name: 'max 2' , brand :'micomax' , price :150 , category:'mobile'},
            {name: 'max 3' , brand :'micomax' , price :200 , category:'mobile'},
            {name: 'max 4' , brand :'micomax' , price :350 , category:'mobile'}
        ]
    );
    if(result.acknowledged){
        console.log('data inserted');
    }
}

insert1();