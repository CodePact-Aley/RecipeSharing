import express from "express";
import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

export const connectdb = async () => {
  try {
    await connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Call connectdb function after loading environment variables
connectdb();
// Make sure this line is called after dotenv.config()

//const port = process.env.PORT || 5001;

//app.listen(port, () => console.log(Server is running on port ${port}));