import mongoose from "mongoose";
import Category from '../model/catigoriescollection.js';

// Create a new Category
export async function createCategory(req, res) {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all Categories
export async function getAllCategories(req, res) {
    try {
        const Categories = await Category.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get Category by ID
export async function getCategoryById(req, res) {
    try {
        const Category = await findById(req.params.id);
        if (!Category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(Category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update Category by ID
export async function updateCategoryById(req, res) {
    try {
        const updatedCategory= await findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete CategoryCategory by ID
export async function deleteCategoryById(req, res) {
    try {
        const deletedCategory= await findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
