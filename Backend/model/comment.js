import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId // Corrected
  },
  recipe_id: {
    type: Schema.Types.ObjectId // Corrected
  },
  commenter_id: {
    type: Schema.Types.ObjectId // Corrected
  },
  commenter_photo: {
    type: String // Assuming photo URL is stored as a string
  },
  comment_text: {
    type: String // Corrected
  },
  comment_date: {
    type: Date // Corrected
  }
});

const Comment = mongoose.model("Comment", ratingSchema);

export default Comment;