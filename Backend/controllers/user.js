import mongoose from 'mongoose';
import User from '../model/User.js'; // Import the User model
import { connectdb } from '../config.js';

// Function to create a new user
// export const createUser = async () => {
//     try {
//         const [username, email, password,bio] = process.argv.slice(2);

//         // Check if both username and email are provided
//         if (!username || !email || !password) {
//             throw new Error('Please provide both username, email, and password as command-line arguments.');
//         }

//         // Create a new User instance
//         const newUser = new User({
//             _id: new mongoose.Types.ObjectId(),
//             username,
//             email,
//             password_hash: password, // Assuming the password is already hashed
//             join_date: new Date(), // Set join_date to current date and time
//             bio, // Empty string for bio
//             // profile_picture_url: null, // Null for profile_picture_url
//             // favorites,
//         });

//         // Save the user to the database
//         const savedUser = await newUser.save();

//         // Log the saved user data
//         console.log('User created:', savedUser);
//     } catch (error) {
//         // Handle errors
//         console.error('Error creating user:', error.message);
//     }
// };

// // Check if command-line arguments are provided
// if (process.argv.length < 5) { // Check for username, email, and password
//     console.error('Please enter your credentials (username, email, and password) in the terminal.');
// } else {
//     // If credentials are provided, call createUser function
//     createUser();
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all users
// export const getAllUsers = async () => {
//     try {
//         // Find all users
//         const users = await User.find();
        
//         // Log the retrieved users
//         console.log('All users:', users);

//         // Alternatively, you can return the users
//         return users;
//     } catch (error) {
//         // Handle errors
//         console.error('Error fetching users:', error.message);
//         throw error; // Optionally, rethrow the error
//     }
// };
// // Call the getAllUsers function
// getAllUsers();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get user by ID
// export const getUserById = async (userId) => {
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new Error('User not found');
//         }
//         console.log('User:', user); // Log the user details
//         return user;
//     } catch (error) {
//         console.error('Error fetching user by ID:', error.message); // Log any errors
//         throw error; // Optionally, rethrow the error
//     }
// };

// // Get user by ID if the user ID is provided as a command-line argument
// if (process.argv.length !== 3) {
//     console.error('Please provide the user ID as a command-line argument.');
// } else {
//     const userId = process.argv[2];
//     getUserById(userId);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Update user by ID
// Update user by ID
// const updateUserById = async (userId, updateData) => {
//     try {
//         // Use findByIdAndUpdate to find and update the user document
//         const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
//         if (!updatedUser) {
//             throw new Error('User not found');
//         }
//         console.log('Updated user:', updatedUser);
//         return updatedUser;
//     } catch (error) {
//         console.error('Error updating user by ID:', error.message);
//         throw error;
//     }
// };

// // Check if command-line arguments are provided
// if (process.argv.length !== 4) {
//     console.error('Please provide the user ID and update data as command-line arguments.');
//     process.exit(1);
// }

// // Parse command-line arguments
// const userId = process.argv[2];
// const updateData = JSON.parse(process.argv[3]); // Assuming update data is provided as a JSON string

// // Call updateUserById function with provided data
// updateUserById(userId, updateData)
//     .then(updatedUser => console.log('Updated user:', updatedUser))
//     .catch(error => console.error('Error updating user:', error));




// Delete user by ID
export const deleteUserById = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        console.log('User deleted:', deletedUser);
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error.message);
        throw error;
    }
};

// Check if command-line arguments are provided
if (process.argv.length !== 3) {
    console.error('Please provide the user ID as a command-line argument.');
    process.exit(1);
}

// Parse command-line argument for user ID
const userId = process.argv[2];

// Call deleteUserById function with provided user ID
deleteUserById(userId)
    .then(deletedUser => console.log('User deleted:', deletedUser))
    .catch(error => console.error('Error deleting user:', error));