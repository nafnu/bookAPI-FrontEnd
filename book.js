//Define the Schema of MongoDB and requesting mongoose
const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    unique: true}
    ,
  author: String,
  ISBN: Number,
  yearPublication: Number,
  publishingHouse: String

})


const Book = mongoose.model('Book', bookSchema);
//const book = new Book({_title:"The Remains of the Day", _author:"Kazuo Ishiguro", _ISBN: 0571153100, _yearPublication: 1989, _publishingHouse:"Faber"})


module.exports = Book


