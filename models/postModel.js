const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Required field!'],
    minLength: 5,
    unique: true,
  },
  text: {
    type: String,
    required: [true, 'Required field!'],
  },
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
