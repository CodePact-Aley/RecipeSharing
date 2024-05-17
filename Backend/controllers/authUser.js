import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';
import nodemailer from "nodemailer";
import dotenv from 'dotenv'; // Import dote

dotenv.config();

// Register a new user
export const registerUser = async (req, res) => {
    try {
        // Extract username, email, password, and role from request body
        const { username, email, password, role } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Generate a salt and hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

        // Create a new user with the specified role
        const newUser = new User({ username, email, password_hash: hashedPassword, role });
        await newUser.save();

        

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// $2b$10$abcdefgijklmnopqrstuvyHvzy0RNKwOe6MHwCDLXSmFJ/cKk2oC

// Login user
export const loginUser = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password_hash); // Compare with original password
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        // Return user ID and token in the response
        res.status(200).json({ userId: user._id, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Function to update user password
export const updateUserPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.userData.userId; // Extract user ID from authenticated user data

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('No user found with the specified ID.');
        }

        // Check if the current password provided matches the user's current password
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password_hash);
        if (!isPasswordValid) {
            throw new Error('Current password is incorrect.');
        }

        // Generate a new salt and hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password_hash = hashedNewPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to reset user password
export const resetUserPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found with the specified email.');
        }

        // Generate a new salt and hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password_hash = hashedNewPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Logout user (optional)

// Authenticate user
export const authenticateUser = (req, res, next) => {
    try {
        // Extract token from request headers
        const token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decodedToken = jwt.verify(token, 'your-secret-key');
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};


// // Function to generate a random password
// export function generateRandomPassword(length = 10) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters to include in the password
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }
//     return password;
// }

// async function sendPasswordResetEmail(email, newPassword) {
//     try {
//         // Create a transporter object using SMTP transport
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com", // Your SMTP host
//             port: 465, // Your SMTP port
//             secure: true, // Set to true if your SMTP server requires SSL/TLS
//             auth: {
//                 user: process.env.SMTP_USERNAME, // Your SMTP username from environment variable
//                 pass: process.env.SMTP_PASSWORD // Your SMTP password from environment variable
//             },
//             debug: true // Enable debug output
//         });

//         // Define email options
//         const mailOptions = {
//             from: process.env.EMAIL_FROM, // Sender email address from environment variable
//             to: email, // Recipient email address
//             subject: "Password Reset", // Email subject
//             text: `Your new password is: ${newPassword}` // Email body
//         };

//         // Send email
//         await transporter.sendMail(mailOptions);
//         console.log("Password reset email sent successfully.");
//     } catch (error) {
//         console.error("Error sending password reset email:", error);
//     }
// }


// // Function to reset user password
// export const resetPassword = async (req, res) => {
//     try {
//         // Extract email from request body
//         const { email } = req.body;

//         // Generate a new random password
//         const newPassword = generateRandomPassword();

//         // Update user's password in the database
//         const user = await User.findOneAndUpdate({ email }, { password_hash: newPassword });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Send password reset email
//         await sendPasswordResetEmail(email, newPassword);

//         res.status(200).json({ message: 'Password reset email sent successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };