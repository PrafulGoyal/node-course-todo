// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to a MongoDB server');

  db.collection('Todos').find({
    _id: new ObjectId('5b0d921eecf76b19f8c0c08c')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
