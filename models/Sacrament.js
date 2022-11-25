const mongoose = require("mongoose");

const sacramentSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    sacramentName: {
      type: String,
      required: true,
    },
    description: {
      type: String,

      required: true,
    },
    sacramentVenue: {
      type: String,

      required: true,
    },
    sacramentDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Sacrament", sacramentSchema, "Sacraments");
