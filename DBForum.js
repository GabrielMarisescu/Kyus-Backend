const mongoose = require( 'mongoose')
const { Schema } = mongoose;

const ForumSchema= new Schema({
  question:  String, 
  author: String,
});


module.exports = mongoose.model("Forum", ForumSchema)