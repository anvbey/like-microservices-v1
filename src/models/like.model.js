import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  content_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Like = mongoose.model("like", likeSchema);

export default Like;
