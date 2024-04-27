// Import Mongoose
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensures that the name is unique
    },
    description: {
        type: String // Optional: Adding a description field
    },
    taggedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Referencing the User model
    }],
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe' // Referencing the Recipe model
    }]
});

// Create models for Categories and Tags using the defined schemas
const Tag = mongoose.model("Tag", tagSchema);

// Export models to be used in other files
export default Tag;
