import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import logger from './logger.js';
import responseTime from 'response-time';
import { connectdb } from './config.js';// Import dbConnect function
import dotenv from 'dotenv'; // Import dotenv
import bodyParser from 'body-parser';
// Load environment variables from .env file

dotenv.config();

console.log("DB_URI from environment variables:", process.env.DB_URI);
connectdb();
const app = express();
// Call dbConnect function to connect to the database
connectdb();





// Middleware
app.use(helmet()); // Enhance security with HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(compression()); // Compress HTTP responses
app.use(morgan('dev')); // Log HTTP requests
app.use(logger); // Add your custom logger middleware
app.use(responseTime());

app.use((err,req,res,next)=>{
console.error(err.stack);
res.status(500).json({error:"Something went wrong!"})
});

// Define route for the root endpoint
app.get('/', (req, res) => {
    //logger.info("Request to the root endpoint");
    const startTime = Date.now();
    res.send('Welcome to the Recipe Website!');
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    //logger.info(`Response time for /: ${responseTime}ms`);
});

//var bodyParser = require('body-parser');



// Mount recipe routes
import { router as recipeRoutes } from "./routes/recipe.js"; 
//app.use(express.json());
app.use(bodyParser.json());
app.use("/api", recipeRoutes);

import { router as userRoutes } from './routes/userRoutes.js';
app.use("/api", userRoutes);

import { router as authRoutes } from './routes/authRoutes.js';
app.use("/api", authRoutes);

// Mount ratings routes
import { router as ratingsRoutes } from './routes/rating.js';
app.use("/api", ratingsRoutes);

// Mount categories routes
import { router as categoriesRoutes } from './routes/categories.js';
app.use("/api", categoriesRoutes);

// Mount tags routes
import { router as tagsRoutes } from './routes/tags.js';
app.use("/api", tagsRoutes);

// Mount the ingredient routes 
import ingredientRoutes from './routes/ingredients.js';
app.use("/api", ingredientRoutes);

// Mount the comment routes
import commentRoutes from './routes/comment.js';
app.use("/api", commentRoutes);


// Start the server
app.listen(port, () => {
    console.log(`App is listening at port ${port}`); // Corrected string interpolation
});