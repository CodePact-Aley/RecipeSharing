
const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe' // Referencing the Recipe model
    }]
});

// Create models for Categories and Tags using the defined schemas
const Category = mongoose.model('Category', categorySchema);
const Tag = mongoose.model('Tag', tagSchema);

// Export models to be used in other files
module.exports = { Category, Tag };