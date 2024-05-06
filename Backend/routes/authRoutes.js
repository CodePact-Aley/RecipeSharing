import express from 'express';
import { registerUser, loginUser,updateUserPassword, authenticateUser } from '../controllers/authUser.js';
import { checkChefRole } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Register a new user
router.post('/auth/register', registerUser);

// Login user
router.post('/auth/login', loginUser);

// Update user password (requires authentication)
router.put('/auth/update-password',authenticateUser,  updateUserPassword);


// Example of a protected route that requires authentication
router.get('/auth/chef-profile', authenticateUser, checkChefRole, (req, res) => {
    // If the request reaches this point, it means the user is authenticated and is a chef
    res.json({ message: 'Authenticated chef profile' });
});

export  {router};
  
