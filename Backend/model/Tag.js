import mongoose from "mongoose";
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


const Tag = mongoose.model("Tag", tagSchema);

export default Tag;