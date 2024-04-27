import mongoose from 'mongoose';
import Recipe from '../models/Recipe.js';

// Create a new recipe
const createRecipe = async (recipeData) => {
    try {
        const recipe = new Recipe(recipeData);
        const savedRecipe = await recipe.save();
        console.log('Recipe created:', savedRecipe);
        return savedRecipe;
    } catch (error) {
        console.error('Error creating recipe:', error.message);
        throw error;
    }
};

// // Get all recipes
// const getAllRecipes = async () => {
//     try {
//         const recipes = await Recipe.find();
//         console.log('All recipes:', recipes);
//         return recipes;
//     } catch (error) {
//         console.error('Error fetching recipes:', error.message);
//         throw error;
//     }
// };

// // Get recipe by ID
// const getRecipeById = async (recipeId) => {
//     try {
//         const recipe = await Recipe.findById(recipeId);
//         console.log('Recipe:', recipe);
//         return recipe;
//     } catch (error) {
//         console.error('Error fetching recipe by ID:', error.message);
//         throw error;
//     }
// };

// // Update recipe by ID
// const updateRecipeById = async (recipeId, updateData) => {
//     try {
//         const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updateData, { new: true });
//         console.log('Updated recipe:', updatedRecipe);
//         return updatedRecipe;
//     } catch (error) {
//         console.error('Error updating recipe by ID:', error.message);
//         throw error;
//     }
// };

// // Delete recipe by ID
// const deleteRecipeById = async (recipeId) => {
//     try {
//         const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
//         console.log('Deleted recipe:', deletedRecipe);
//         return deletedRecipe;
//     } catch (error) {
//         console.error('Error deleting recipe by ID:', error.message);
//         throw error;
//     }
// };