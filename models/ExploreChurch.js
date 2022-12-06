const mongoose = require("mongoose");

const explorerChurchSchema = new mongoose.Schema(
  {
    imageLogo: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,

      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "ExplorerChurch",
  explorerChurchSchema,
  "ExplorerChurch"
);
