import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  recipe_id: {
    type: Schema.Types.ObjectId
  },
  commenter_id: {
    type: Schema.Types.ObjectId
  },
  commenter_photo: {
    type: String
  },
  comment_text: {
    type: String
  },
  comment_date: {
    type: Date
  }
});

const Comment = mongoose.model("Comment", ratingSchema);

export default Comment;