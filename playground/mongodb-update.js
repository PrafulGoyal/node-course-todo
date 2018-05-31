// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to a MongoDB server');
   // db.collection('Todos').findOneAndUpdate({
   //   _id: new ObjectId('5b101432ace6219338cb7957')
   // }, {
   //   $set: {
   //     completed: true
   //   }
   // }, {
   //   returnOriginal: false
   // }).then((result) => {
   //   console.log(JSON.stringify(result, undefined, 2));
   // });
   db.collection('Users').findOneAndUpdate({
     _id: new ObjectId('5b0e5fac64ce060a98f9f19e')
   }, {
     $set: {
       name: 'Rahul'
     },
     $inc: {
        age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
     console.log(JSON.stringify(result, undefined, 2));
   });


  // db.close();
});
