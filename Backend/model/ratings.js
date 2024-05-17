    import mongoose from "mongoose";

    const Schema = mongoose.Schema;

    const ratingSchema = new Schema(
        {
            recipe_id: {
                type: Schema.Types.ObjectId,
                ref: "Recipe",
                required: true
            },
            rater_id: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            score: {
                type: Number,
                required: true
            },
            rating_date: {
                type: Date,
                required: true
            }
        }
    );

    const Rating = mongoose.model("Rating", ratingSchema);

    export default Rating;
