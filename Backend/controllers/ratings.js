import Rating from '../model/ratings.js';

// Create a new rating
export async function createRating(req, res) {
    try {
        const newRating = await Rating.create(req.body);
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all ratings
export async function getAllRatings(req, res) {
    try {
        const ratings = await Rating.find();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get rating by ID
export async function getRatingById(req, res) {
    try {
        const rating = await Rating.findById(req.params.id);
        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update rating by ID
export async function updateRatingById(req, res) {
    try {
        const updatedRating = await Rating.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete rating by ID
export async function deleteRatingById(req, res) {
    try {
        const deletedRating = await Rating.findByIdAndDelete(req.params.id);
        if (!deletedRating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
