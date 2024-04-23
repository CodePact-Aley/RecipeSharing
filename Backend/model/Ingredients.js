import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        nutritional_value: {
            type: Object,
            required: true
        }
    }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
