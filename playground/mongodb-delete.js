// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to a MongoDB server');
  //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((results) => {
    //   console.log(results);
    // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((results) => {
  //   console.log(results);
  // });
  //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
    });
  // db.close();
});
