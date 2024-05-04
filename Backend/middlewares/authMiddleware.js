export const checkChefRole = (req, res, next) => {
    if (req.userData.role === 'chef') {
        next(); // Proceed if the user is a chef
    } else {
        res.status(403).json({ message: 'Access denied. You are not authorized to perform this action.' });
    }
};