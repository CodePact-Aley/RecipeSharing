// Import Mongoose
import mongoose, { Schema } from 'mongoose';

// Define schema for Categories collection
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe' // Referencing the Recipe model
    }]
});

const Category = mongoose.model("Category",categorySchema);
export default Category;