import mongoose from 'mongoose';
import '../config.js';
import User from '../model/user.js'; // Import the User model
import '../config.js';
import User from '../model/user.js'; // Import the User model

// Function to create a new user
export const createUser = async () => {
    try {
        const username = process.argv[3]; // First command-line argument as username
        const email = process.argv[4]; // Fourth command-line argument as email
        const password_hash = process.argv[5]; // Second command-line argument as password hash
        const bio = process.argv[6]; // Third command-line argument as bio

        // Check if all required fields are provided
        if (!username || !email || !password_hash || !bio) {
            throw new Error('Please provide username, email, password hash, and bio as command-line arguments.');
        }

        // Create the new user
        const newUser = await User.create({  _id: new mongoose.Types.ObjectId(),username, email, password_hash, bio });
        console.log('User created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after creating the user
    }
};

// Function to update a user
export const updateUser = async () => {
    try {
        const userId = process.argv[3]; // First command-line argument as user ID
        const updateFields = {}; // Object to store fields to update

        // Loop through command-line arguments starting from index 3
        for (let i = 4; i < process.argv.length; i += 2) {
            const field = process.argv[i]; // Field name
            const value = process.argv[i + 1]; // Field value
            updateFields[field] = value; // Add field and value to updateFields object
        }

        // Check if user ID and update fields are provided
        if (!userId || Object.keys(updateFields).length === 0) {
            throw new Error('Please provide user ID and fields to update as command-line arguments.');
        }

        // Update the user using findByIdAndUpdate
        const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
        console.log('User updated:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after updating the user
    }
};

export const deleteUser = async () => {
    try {
        const userId = process.argv[3]; // First command-line argument as user ID

        // Check if user ID is provided
        if (!userId) {
            throw new Error('Please provide user ID as a command-line argument.');
        }

        // Delete the user using findByIdAndDelete
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found.');
        }
        console.log('User deleted successfully:', deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after deleting the user
    }
};

export const getAllUsers = async () => {
    try {
        const users = await User.find();
        console.log('All users:', users);
    } catch (error) {
        console.error('Error getting all users:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after getting all users
    }
};

export const getUserById = async () => {
    try {
        const userId = process.argv[3]; // Command-line argument as user ID

        // Check if the user ID is provided
        if (!userId) {
            throw new Error('Please provide the user ID as a command-line argument.');
        }

        // Find the user by ID
        const user = await User.findById(userId);

        // Check if the user with the specified ID exists
        if (!user) {
            throw new Error('No user found with the specified ID.');
        }

        console.log('User found:', user);
    } catch (error) {
        console.error('Error getting user by ID:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after getting the user
    }
};


export const getUsersByName = async () => {
    try {
        const username = process.argv[3]; // Command-line argument as username

        // Check if the username is provided
        if (!username) {
            throw new Error('Please provide the username to search for as a command-line argument.');
        }

        // Find all users with the specified username
        const users = await User.find({ username });

        // Check if users with the specified username exist
        if (users.length === 0) {
            throw new Error('No users found with the specified username.');
        }

        console.log('Users found:', users);
    } catch (error) {
        console.error('Error getting users by username:', error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after getting the users
    }
};

// Check if command-line arguments are provided and call the appropriate function
if (process.argv.length < 3) {
    console.error('Please provide the required command-line arguments.');
} else {
    const command = process.argv[2];
    if (command === 'create') {
        createUser();
    } else if (command === 'update') {
        updateUser();
    } else if (command === 'delete') {
        deleteUser();
    } else if (command === 'getAll') {
        getAllUsers();
    } else if (command === 'getUserById') {
        getUserById();
    } else if (command === 'getUsersByName') { // Add this line for the new function
        getUsersByName();
    } else {
        console.error('Invalid command. Please use "create", "update", "delete", "getAll", "getUserById", or "getUsersByName".');
    }
}

//////////////////////////
//////////////////////////
// Get all users
// export const getAllUsers = async (req, res) => {
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get user by ID
// export const getUserById = async (req, res) => {

// // Get user by ID
// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(user);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//         res.status(500).json({ error: error.message });
//     }
// };

// // Update user by ID
// export const updateUserById = async (req, res) => {
// export const updateUserById = async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ message: 'User not found' });
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(updatedUser);
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
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