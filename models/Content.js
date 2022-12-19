const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    aboutBanner: {
      type: String,
      required: true,
    },
    sacramentBanner: {
      type: String,
      required: true,
    },
    ministryBanner: {
      type: String,
      required: true,
    },
    sermonBanner: {
      type: String,
      required: true,
    },
    contactBanner: {
      type: String,
      required: true,
    },
    eventBanner: {
      type: String,
      required: true,
    },
    blogBanner: {
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
