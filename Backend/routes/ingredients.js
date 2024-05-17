import express from 'express';
import { createIngredient, getAllIngredients, getIngredientById, updateIngredientById, deleteIngredientById } from '../controllers/ingredients.js';

const router = express.Router();

// Routes for ingredients
router.post('/ingredients', createIngredient); // Create a new ingredient
router.get('/ingredients', getAllIngredients); // Get all ingredients
router.get('/ingredients/:id', getIngredientById); // Get ingredient by ID
router.put('/ingredients/:id', updateIngredientById); // Update ingredient by ID
router.delete('/ingredients/:id', deleteIngredientById); // Delete ingredient by ID

// Export the router
export default router;
