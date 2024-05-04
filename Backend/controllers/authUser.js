import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';

// Register a new user
export const registerUser = async (req, res) => {
    try {
        // Extract username, email, password, and role from request body
        const { username, email, password_hash, role } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Generate a salt and hash the password
        const hashedPassword = await bcrypt.hash(password_hash, 10); // 10 is the number of salt rounds

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

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
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