// Create a new tag
router.post('/tags', async (req, res) => {
    try {
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Get all tags
  router.get('/tags', async (req, res) => {
    try {
      const tags = await tags.find();
      res.json(tags);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Export the router
  export default router;