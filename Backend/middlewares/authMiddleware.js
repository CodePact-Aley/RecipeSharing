export const checkChefRole = (req, res, next) => {
    console.log('User Data:', req.userData);
    console.log('User Role:', req.userData.role);
    try {
        // Assuming the user role is stored in req.userData.role after authentication
        const userRole = req.userData.role;

        // Check if the user has the role of a chef
        if (userRole === 'chef') {
            next(); // Proceed if the user is a chef
        } else {
            res.status(403).json({ message: 'Access denied. You are not authorized to perform this action.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
