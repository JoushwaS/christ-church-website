const debug = require("debug");
const Event = require("../models/Event");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createEvent: async (req, res) => {
    try {
      const { eventName, description, eventDate, eventVenue } = req.body;

      const imageUrl = await cloudinaryUpload(req.file.path);

      const newEvent = new Event();
      if (imageUrl) {
        newEvent.image = imageUrl;
      }

      // return;
      newEvent.eventName = eventName;
      newEvent.description = description;
      newEvent.eventVenue = eventVenue;
      newEvent.eventDate = eventDate;

      await newEvent.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Event Created Successfully",
          data: { newEvent },
        });
      });

      // return;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Event Creation Failed!",
        error: { error },
      });
    }
  },
  updateEvent: async (req, res) => {
    try {
      const { eventName, description, eventDate, eventVenue } = req.body;
      // const file = await req.file;

      let data = { ...req.body };
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data event", data);
      // return;
      const event = await Event.findOneAndUpdate(
        { _id: req.params.eventId },
        data,
        {
          new: true,
        }
      );

      // return;
      res.status(200).json({
        status: 1,
        message: "Event Updated Successfully",
        data: { event },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Event Updated Failed!",
        error: { error },
      });
    }
  },
  deleteEvent: async (req, res) => {
    try {
      await Event.findOneAndDelete({ _id: req.params.eventId });

      // return;
      res.status(200).json({
        status: 1,
        message: "Event Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Event Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllEvents: async (req, res) => {
    try {
      const Events = await Event.find();
      // console.log(Events);
      res.status(200).json({
        status: 1,
        message: "Events Fetched  Successfully",
        data: { Events },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Events  Failed!",
        error: { error },
      });
    }
  },
};
