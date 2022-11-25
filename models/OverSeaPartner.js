const mongoose = require("mongoose");

const overSeaPartnerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    profession: {
      type: String,
      //   required: true,
      default: "none",
    },
    country: {
      type: String,
      //   required: true,
      default: "none",
    },
    description: {
      type: String,

      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "OverSeaPartner",
  overSeaPartnerSchema,
  "OverSeaPartners"
);
