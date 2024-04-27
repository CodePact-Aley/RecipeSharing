import mongoose from "mongoose";
import '../config.js';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        // _id: { 
        //     type: Schema.Types.ObjectId // Corrected
        // },
        username: { 
            type: String, // Corrected
            required: true 
        },
        email: { 
            type: String, // Corrected
            match: /^\S+@\S+\.\S+$/, // Changed pattern to match
            required: true 
        },
        password_hash: { 
            type: String, // Corrected
            required: true 
        },
        join_date: { 
            type: Date, 
            default: Date.now,// Corrected
            required: true 
        },
        bio: { 
            type: String // Corrected
        },
        profile_picture_url: { 
            type: String // Corrected
        },
        favorites: [{
            type: [Schema.Types.ObjectId],
            ref: 'Recipe' // Assuming 'Recipe' is the name of the related model
        }]
    }
);

const User = mongoose.model("User", userSchema);

export default User;


