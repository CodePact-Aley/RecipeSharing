import express from 'express';
import { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById } from '../controllers/categories.js';

const router = express.Router();

// Create a new category
router.post('/categories', createCategory); 

// Get all categories
router.get('/categories', getAllCategories);

// Get category by ID
router.get('/categories/:id', getCategoryById); 

// Update category by ID
router.put('/categories/:id', updateCategoryById); 

// Delete category by ID
router.delete('/categories/:id', deleteCategoryById); 

// Export the router
export default router;
