import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } from '../controllers/recipe.js';

const router = express.Router();

// Route to create a new recipe
router.post('/recipes', createRecipe);

// Route to get all recipes
router.get('/recipes', getAllRecipes);

// Route to get a recipe by ID
router.get('/recipes/:id', getRecipeById);

// Route to update a recipe by ID
router.put('/recipes/:id', updateRecipeById);

// Route to delete a recipe by ID
router.delete('/recipes/:id', deleteRecipeById);

// Export the router
export { router };
