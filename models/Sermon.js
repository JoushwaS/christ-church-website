const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    sermonName: {
      type: String,
      required: true,
    },
    sermonType: {
      type: String,
      required: true,
      enum: ["video", "audio"],
    },
    videoUrl: {
      type: String,
    },
    audioUrl: {
      type: String,
    },
    description: {
      type: String,

      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Sermon", sermonSchema, "Sermons");
