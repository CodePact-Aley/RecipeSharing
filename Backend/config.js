const url = "mongodb+srv://rahafao:Pi38t8-%23-k6%2A%21GH@recipesharing.qtxatk9.mongodb.net/"

import express from "express";

import { connect } from "mongoose";
const app = express();

export const connectdb = async(dbURL) => {
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


