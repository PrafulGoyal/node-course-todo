const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b16435c1c10fabc4331dcf5'}).then((doc) => {
  console.log(doc);
});

Todo.findByIdAndRemove('5b16435c1c10fabc4331dcf5').then((doc) => {
  console.log(doc);
});
