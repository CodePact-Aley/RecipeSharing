// HomePage.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/RecipeCard/index.js';
import styles from './home.module.css'; // Import CSS styles for the homepage

function Home() {
    // Sample recipe data (replace with actual API or database call)
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: 'Spaghetti Carbonara',
            photo: './spaghetti-carbonara.jpg',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
            likes: 15,
            comments: [
                { id: 1, user: 'Alice', text: 'Delicious recipe!' },
                { id: 2, user: 'Bob', text: 'I love carbonara!' }
            ]
        },
        // Add more sample recipes as needed
    ]);

    // Fetch recipes data from an API or database
    useEffect(() => {
        // Sample API call
        // fetch('api/recipes')
        //     .then(response => response.json())
        //     .then(data => setRecipes(data));
    }, []);

    // Handle adding a new comment to a recipe
    const handleAddComment = (recipeId, comment) => {
        // Find the recipe by ID
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

    // Handle liking a recipe
    const handleLikeRecipe = (recipeId) => {
        // Find the recipe by ID
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

    return (
        <div className={styles.homepage}>
            <h1 className={styles.homepageTitle}>Featured Recipes</h1>
            <div className={styles.recipeGrid}>
                {recipes.map(recipe => (
                    <div key={recipe.id} className={styles.recipeCard}>
                        <RecipeCard
                            recipe={recipe}
                            onAddComment={handleAddComment}
                            onLikeRecipe={handleLikeRecipe}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
