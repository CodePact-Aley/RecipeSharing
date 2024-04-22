import mongoose from 'mongoose';
import Blog from './model/Blog.js';
import './config.js';

//mongoose.connect("mongodb+srv://sarjounsd:1910Sarjoun@recipesharing.qtxatk9.mongodb.net/")

// Create a new blog post object
const article = new Blog({
  title: 'Awesome Post!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});

// Insert the article in our MongoDB database
await article.save();