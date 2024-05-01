import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } from '../controllers/recipe.js';

const router = express.Router();

// Route to create a new recipe
router.post('/recipes', createRecipe);

// Route to get all recipes
router.get('/recipes', getAllRecipes);

// Route to get a recipe by ID
router.get('/recipes/:recipeId', getRecipeById);

// Route to update a recipe by ID
router.put('/recipes/:recipeId', updateRecipeById);

// Route to delete a recipe by ID
router.delete('/recipes/:recipeId', deleteRecipeById);

// Export the router
export { router };
