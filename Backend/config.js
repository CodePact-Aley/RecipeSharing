url = "mongodb+srv://sarjounsd:1910Sarjoun@recipesharing.qtxatk9.mongodb.net/"

const express = require("express");

const mongoose = require("mongoose");
const app = express();

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
app.listen(3000, () => console.log("Server is running"));