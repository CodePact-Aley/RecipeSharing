import express from 'express';
import { createTag, getAllTags, getTagById, updateTagById, deleteTagById } from '../controllers/tags.js';

const router = express.Router();

// Create a new tag
router.post('/tags', createTag); 

// Get all tags
router.get('/tags', getAllTags); 

// Get tag by ID
router.get('/tags/:id', getTagById); 

// Update tag by ID
router.put('/tags/:id', updateTagById); 

// Delete tag by ID
router.delete('/tags/:id', deleteTagById); 

// Export the router
export { router };
