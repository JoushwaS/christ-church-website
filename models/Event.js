const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,

      required: true,
    },
    eventVenue: {
      type: String,

      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", eventSchema, "Events");
