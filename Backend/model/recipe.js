import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
//   author_id: {
//     type: Schema.Types.ObjectId,
//     required: true
// },
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
  ingredients: {
    type: [Schema.Types.ObjectId]
  },
  categories: {
    type: [Schema.Types.ObjectId]
  },
  tags: {
    type: [Schema.Types.ObjectId]
  },
  steps: {
    type: [
      {
        step_number: {
          type: Number,
          required: true
        },
        instruction: {
          type: String,
          required: true
        },
        photo_url: {
          type: String
        }
      }
    ]
  },
  prep_time: {
    type: String
  },
  cook_time: {
    type: String
  },
  total_time: {
    type: String
  },
  servings: {
    type: Number
  },
  publish_date: {
    type: Date
  },
  photo_url: {
    type: [String, null]
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
