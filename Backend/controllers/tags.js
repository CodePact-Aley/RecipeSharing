import Tag from '../model/tagscollection.js';

// Create a new tag
export async function createTag(req, res) {
    try {
        const newTag = await Tag.create(req.body);
        res.status(201).json(newTag);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all tags
export async function getAllTags(req, res) {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get tag by ID
export async function getTagById(req, res) {
    try {
        const tag = await Tag.findById(req.params.id);
        if (!tag) {
            return res.status(404).json({ message: 'Tag not found' });
        }
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update tag by ID
export async function updateTagById(req, res) {
    try {
        const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTag) {
            return res.status(404).json({ message: 'Tag not found' });
        }
        res.status(200).json(updatedTag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete tag by ID
export async function deleteTagById(req, res) {
    try {
        const deletedTag = await Tag.findByIdAndDelete(req.params.id);
        if (!deletedTag) {
            return res.status(404).json({ message: 'Tag not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
