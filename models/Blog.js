const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    blogName: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      //   required: true,
      default: "Introduction:",
    },
    description: {
      type: String,

      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Blog", blogSchema, "Blogs");
