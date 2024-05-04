import express from 'express';
import {
    createUser,
    getAllUsers,
    getUserById,
    getUsersByName,
    updateUser,
    deleteUser
} from '../controllers/user.js';

const router = express.Router();

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getAllUsers);

// Get user by ID
router.get('/users/:id', getUserById);

router.get('/users', getUsersByName);

// Update user by ID
router.put('/users/:id', updateUser);

// Delete user by ID
router.delete('/users/:id', deleteUser);

export { router };



