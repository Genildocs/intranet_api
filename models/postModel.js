const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Campo necessario!"],
    minLength: 5,
    unique: true,
  },
  text: {
    type: String,
    required: [true, "Campo necessario!"],
  },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
