import mongoose from 'mongoose';
import User from '../model/User.js'; // Import the User model

// Function to create a new user
export const createUser = async () => {
    try {
        const name = process.argv[2]; // First command-line argument as user's name
        const email = process.argv[3]; // Second command-line argument as user's email

        // Check if both name and email are provided
        if (!name || !email) {
            throw new Error('Please provide both name and email as command-line arguments.');
        }

        const newUser = await User.create({ name, email });
        console.log('User created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
};

// Check if command-line arguments are provided
if (process.argv.length < 4) {
    console.error('Please enter your credentials (name and email) in the terminal.');
} else {
    // If credentials are provided, call createUser function
    createUser();
}


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