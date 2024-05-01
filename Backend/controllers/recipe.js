import Recipe from '../model/recipe.js';
import Ingredient from '../model/Ingredients.js';
import mongoose from 'mongoose';


//Create a new recipe
export async function createRecipe(req, res) {
    try {
        // Extract ingredients from the request body
        const ingredientIds = req.body.ingredients;

        // Check if ingredientIds are provided
        if (!ingredientIds || !Array.isArray(ingredientIds)) {
            return res.status(400).json({ error: 'Ingredients are required and must be an array' });
        }

        // Validate each ingredientId
        for (const ingredientId of ingredientIds) {
            // Check if ingredientId is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(ingredientId)) {
                return res.status(400).json({ error: 'Invalid ingredientId format' });
            }
            // Check if the ingredient exists
            const ingredient = await Ingredient.findById(ingredientId);
            if (!ingredient) {
                return res.status(404).json({ error: `Ingredient with ID ${ingredientId} not found` });
            }
        }

        // Create the recipe with the provided ingredients
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all recipes
export async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get recipe by ID
export async function getRecipeById(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update recipe by ID
export async function updateRecipeById(req, res) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete recipe by ID
export async function deleteRecipeById(req, res) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
