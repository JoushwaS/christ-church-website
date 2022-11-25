const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    missionStatement: {
      type: String,
    },
    aboutUs: {
      type: String,
    },
    youtubeLink: {
      type: String,
    },
    twitterLink: {
      type: String,
    },
    facebookLink: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Content", contentSchema, "Contents");
