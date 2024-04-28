import Recipe from '../model/recipe.js';

// Create a new recipe
export async function createRecipe(req, res) {
    try {
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
