const mongoose = require("mongoose");

const ministrySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    ministryName: {
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
module.exports = mongoose.model("Ministry", ministrySchema, "Ministeries");
