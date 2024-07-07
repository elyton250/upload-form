const Post = require('../models/postModel');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, description, picture, eventDate } = req.body;
    console.log('request body that reacehd the body', req.body);
    const newPost = new Post({ title, description, picture, eventDate });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const test = async (req, res) => {
  res.status(200).json({ message: 'Test successful' });
};

// Export the functions to be used in routes
module.exports = { createPost, getPosts, test };
