import express from "express";
import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

export const connectdb = async (dbURL) => {
  try {
    await connect(dbURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectdb(process.env.DB_URI); // Make sure this line is called after dotenv.config()

//const port = process.env.PORT || 5001;

//app.listen(port, () => console.log(`Server is running on port ${port}`));
