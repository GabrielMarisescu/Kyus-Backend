const mongoose = require( 'mongoose')
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question:  String, 
  author: String,
  likes: Number,
  date: String,
  yes: Number,
  no: Number,
});


module.exports = mongoose.model("Question",QuestionSchema)