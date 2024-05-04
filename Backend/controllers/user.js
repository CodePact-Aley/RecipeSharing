import express from 'express';
import mongoose from 'mongoose';
import '../config.js';
import User from '../model/user.js'; // Import the User model

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Function to create a new user
export const createUser = async (req, res) => {
    try {
        const { username, password_hash, name, email } = req.body;

        // Create the new user
        const newUser = await User.create({ username, password_hash, name, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to update a user
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateFields = req.body;

        // Update the user using findByIdAndUpdate
        const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Delete the user using findByIdAndDelete
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found.');
        }
        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('No user found with the specified ID.');
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUsersByName = async (req, res) => {
    try {
        const username = req.params.username;

        // Find all users with the specified username
        const users = await User.find({ username });
        if (users.length === 0) {
            throw new Error('No users found with the specified username.');
        }

        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//////////////////////////
// Get all users
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get user by ID
// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Update user by ID
// export const updateUserById = async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete user by ID
// export const deleteUserById = async (req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id);
//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
