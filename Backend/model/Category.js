// Import Mongoose
const mongoose = require('mongoose');

// Define schema for Categories collection
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe' // Referencing the Recipe model
    }]
});

const Category = mongoose.model("Category", ratingSchema);

export default Categoty;