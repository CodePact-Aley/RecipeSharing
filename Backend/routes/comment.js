import express from 'express';
import * as commentController from '../controllers/comment.js';

const router = express.Router();

// Route to create a new comment
router.post('/comments', commentController.createComment);

// Route to get all comments
router.get('/comments', commentController.getAllComments);

// Route to get a comment by ID
router.get('/comments/:id', commentController.getCommentById);

// Route to update a comment by ID
router.put('/comments/:id', commentController.updateCommentById);

// Route to delete a comment by ID
router.delete('/comments/:id', commentController.deleteCommentById);

export default router;
