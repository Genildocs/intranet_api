const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json({
      status: 'sucess',
      posts,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: 'success',
      post: newPost,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      post,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      post: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
