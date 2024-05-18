// Recipes.js
import React, { useState, useEffect } from 'react';
import RecipeDetailCard from '../../components/RecipeCard';
import styles from './recipes.module.css';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
        title: '',
        photo: '',
        description: '',
        ingredients: '',
        steps: ''
    });

    useEffect(() => {
        fetch('/api/recipes') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    const handleAddComment = (recipeId, comment) => {
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === recipeId) {
                return {
                    ...recipe,
                    comments: [...recipe.comments, comment]
                };
            }
            return recipe;
        });
        setRecipes(updatedRecipes);
    };

    const handleLikeRecipe = (recipeId) => {
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === recipeId) {
                return {
                    ...recipe,
                    likes: recipe.likes + 1
                };
            }
            return recipe;
        });
        setRecipes(updatedRecipes);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({
            ...newRecipe,
            [name]: value
        });
    };

    const handleAddRecipe = (e) => {
        e.preventDefault();
        const newRecipeWithId = {
            ...newRecipe,
            id: recipes.length + 1,
            likes: 0,
            comments: [],
            ingredients: newRecipe.ingredients.split(','),
            steps: newRecipe.steps.split(',')
        };
        setRecipes([...recipes, newRecipeWithId]);
        setNewRecipe({
            title: '',
            photo: '',
            description: '',
            ingredients: '',
            steps: ''
        });
    };

    return (
        <div className={styles.recipesPage}>
            <h1 className={styles.recipesTitle}>All Recipes</h1>
            <form className={styles.addRecipeForm} onSubmit={handleAddRecipe}>
                <h2>Add a New Recipe</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newRecipe.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    value={newRecipe.photo}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newRecipe.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients (comma separated)"
                    value={newRecipe.ingredients}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="steps"
                    placeholder="Steps (comma separated)"
                    value={newRecipe.steps}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>
            <div className={styles.recipeGrid}>
                {recipes.map(recipe => (
                    <RecipeDetailCard
                        key={recipe.id}
                        recipe={recipe}
                        onAddComment={handleAddComment}
                        onLikeRecipe={handleLikeRecipe}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recipes;
