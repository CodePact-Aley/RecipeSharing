import React, { useState } from 'react';
import styles from './commentsection.module.css'; // Import CSS styles for the comment section

function CommentSection({ comments, onAddComment }) {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            onAddComment(comments.length + 1, { user: 'User', text: newComment });
            setNewComment('');
        }
    };

    return (
        <div className={styles.commentSection}>
            <h3 className={styles.commentHeading}>Comments</h3>
            <ul className={styles.commentList}>
                {comments.map(comment => (
                    <li key={comment.id} className={styles.commentItem}>
                        <span className={styles.commentUser}>{comment.user}:</span> {comment.text}
                    </li>
                ))}
            </ul>
            <div className={styles.addComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className={styles.commentInput}
                />
                <button onClick={handleAddComment} className={styles.commentButton}>Add</button>
            </div>
        </div>
    );
}

export default CommentSection;
