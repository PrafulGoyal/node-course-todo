const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
// var id = '5b115b106f837d0e34d9ef6a';
//
// if(!ObjectId.isValid(id)) {
//   console.log('Id is not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.find({
//   _id: id
//   }).then((todo) => {
//   console.log('Todo', todo);
//   });

//   Todo.findById(id).then((todo) => {
//     if(!todo) {
//       return console.log('Id not found');
//     }
//   console.log('TodoById', todo);
// }).catch((e) => {
//   console.log(e);
// });
User.findById('5b116958a4de8909b4b6e2b4').then((user) => {
    if(!user) {
      return console.log('Id not found');
    }
  console.log('UserById', JSON.stringify(user,undefined,2));
}, (e) => {
  console.log(e);
});
