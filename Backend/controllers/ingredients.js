import Ingredient from '../model/Ingredients.js';

// Create a new ingredient
export async function createIngredient(req, res) {
    try {
        const newIngredient = await Ingredient.create(req.body);
        res.status(201).json(newIngredient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all ingredients
export async function getAllIngredients(req, res) {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get ingredient by ID
export async function getIngredientById(req, res) {
    try {
        const ingredient = await Ingredient.findById(req.params.id);
        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update ingredient by ID
export async function updateIngredientById(req, res) {
    try {
        const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(200).json(updatedIngredient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete ingredient by ID
export async function deleteIngredientById(req, res) {
    try {
        const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);
        if (!deletedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
