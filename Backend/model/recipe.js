import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId // Corrected
  },
  author_id: {
    type: Schema.Types.ObjectId, // Corrected
    required: true
  },
  title: {
    type: String, // Corrected
    required: true
  },
  description: {
    type: String, // Corrected
    required: true
  },
  ingredients: {
    type: [Schema.Types.ObjectId] // Corrected
  },
  categories: {
    type: [Schema.Types.ObjectId] // Corrected
  },
  tags: {
    type: [Schema.Types.ObjectId] // Corrected
  },
  steps: {
    type: [
      {
        step_number: {
          type: Number, // Corrected
          required: true
        },
        instruction: {
          type: String, // Corrected
          required: true
        },
        photo_url: {
          type: String // Corrected
        }
      }
    ]
  },
  prep_time: {
    type: String // Corrected
  },
  cook_time: {
    type: String // Corrected
  },
  total_time: {
    type: String // Corrected
  },
  servings: {
    type: Number // Corrected
  },
  publish_date: {
    type: Date // Corrected
  },
  photo_url: {
    type: [String, null] // Corrected
  },
  nutrition: {
    type: {
      calories: Number,
      protein: Number,
      carbs: Number,
      fat: Number,
      fiber: Number,
      sugar: Number
    }
  }
}); 

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;