import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
        role: {
            type: String,
            enum: ['browser', 'chef'], // Define roles as 'browser' or 'chef'
            default: 'browser' // Default role is 'browser'
        },
        favorites: [{
            type: [Schema.Types.ObjectId],
            ref: 'Recipe' // Assuming 'Recipe' is the name of the related model
        }]
    }
);

// Pre-save hook to hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password_hash = await bcrypt.hash(this.password, salt); // Corrected
        next();
    } catch (error) {
        return next(error);
    }
});


const User = mongoose.model("User", userSchema);

export default User;