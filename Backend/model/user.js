import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        _id: { 
            type: Schema.Types.ObjectId // Corrected
        },
        username: { 
            type: String, // Corrected
            required: true 
        },
        email: { 
            type: String, // Corrected
            match: /^\\S+@\\S+\\.\\S+$/, // Changed pattern to match
            required: true 
        },
        password_hash: { 
            type: String, // Corrected
            required: true 
        },
        join_date: { 
            type: Date, // Corrected
            required: true 
        },
        bio: { 
            type: String // Corrected
        },
        profile_picture_url: { 
            type: String // Corrected
        },
        favorites: {
            type: [Schema.Types.ObjectId] // Corrected
        }
    }
);

const User = mongoose.model("User", userSchema);

export default User;


