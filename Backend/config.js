const url = "mongodb+srv://sarjounsd:1910Sarjoun@recipesharing.qtxatk9.mongodb.net/"

import express from "express";

import { connect } from "mongoose";
const app = express();

const connectdb = async(dbURL) => {
  try{
    await connect(dbURL)
    .then(() => console.log('Connected to MongoDB'),
    (error) => console.error('MongoDB connection error:', error)
    );

  } catch(error){
    console.log(error)
  }
};

connectdb(url);

app.listen(3000, () => console.log("Server is running"));