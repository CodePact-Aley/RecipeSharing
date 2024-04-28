import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import logger from './logger.js';
import responseTime from 'response-time';
import { connectdb } from './config.js';// Import dbConnect function
import dotenv from 'dotenv'; // Import dotenv

const app = express();
// Call dbConnect function to connect to the database
connectdb();

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 5001; // Change the default port to 5001 or any other available port


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
    logger.info("Request to the root endpoint");
    const startTime = Date.now();
    res.send('Welcome to the Recipe Website!');
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    logger.info(`Response time for /: ${responseTime}ms`);
});

// Mount recipe routes
import { router as recipeRoutes } from "./routes/recipe.js"; 
app.use("/api", recipeRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App is listening at port ${port}`); // Corrected string interpolation
});