const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
