import express from 'express';
import { createRating, getAllRatings, getRatingById, updateRatingById, deleteRatingById } from '../controllers/ratings.js';

const router = express.Router();

// Create a new rating
router.post('/ratings', createRating);

// Get all ratings
router.get('/ratings', getAllRatings); 

// Get rating by ID
router.get('/ratings/:id', getRatingById); 

// Update rating by ID
router.put('/ratings/:id', updateRatingById); 

// Delete rating by ID
router.delete('/ratings/:id', deleteRatingById); 

// Export the router
export default router;