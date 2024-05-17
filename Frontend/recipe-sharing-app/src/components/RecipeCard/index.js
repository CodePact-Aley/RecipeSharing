import React, { useState } from 'react';
import styles from './recipecard.module.css'; // Import CSS styles for the recipe card
import CommentSection from '../CommentSection/index.js'; // Import the CommentSection component

function RecipeCard({ recipe, onAddComment, onLikeRecipe }) {
    const { id, title, photo, description, likes, comments } = recipe;

    const [newComment, setNewComment] = useState('');
    const [showComments, setShowComments] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        onLikeRecipe(id);
        setIsLiked(!isLiked);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            onAddComment(id, { id: comments.length + 1, user: 'User', text: newComment });
            setNewComment('');
        }
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className={styles.recipeCard}>
            <img src={photo} alt={title} className={styles.recipeImage} />
            <div className={styles.recipeInfo}>
                <h2 className={styles.recipeTitle}>{title}</h2>
                <p className={styles.recipeDescription}>{description}</p>
                <div className={styles.recipeStats}>
                    <button onClick={handleLike} className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}>
                        <span role="img" aria-label="Like">👍</span> {likes}
                    </button>
                    <button onClick={toggleComments} className={styles.commentButton}>
                        <span role="img" aria-label="Comment">💬</span> Comments
                    </button>
                </div>
                {showComments && <CommentSection comments={comments} onAddComment={handleAddComment} />}
            </div>
        </div>
    );
}

export default RecipeCard;
