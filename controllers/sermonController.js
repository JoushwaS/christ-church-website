const debug = require("debug");
const Sermon = require("../models/Sermon");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createSermon: async (req, res) => {
    try {
      const {
        sermonName,
        description,
        sermonType,

        videoUrl,
      } = req.body;

      let newSermon = new Sermon();

      if (sermonType == "video") {
        newSermon.videoUrl = videoUrl;
      } else if (sermonType == "audio") {
        const audioPath = await cloudinaryUpload(req.files["audio"][0]?.path);
        console.log("audioPath", audioPath);
        newSermon.audioUrl = audioPath;
      }

      const imageUrl = await cloudinaryUpload(req.files["thumbnail"][0]?.path);

      console.log("imageUrl>>", imageUrl);

      if (imageUrl) {
        newSermon.thumbnail = imageUrl;
      }

      newSermon.sermonName = sermonName;
      newSermon.description = description;
      newSermon.sermonType = sermonType;

      Object.keys(newSermon).forEach(
        (k) =>
          newSermon[k] == null || (newSermon[k] == "" && delete newSermon[k])
      );

      await newSermon.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Sermon Created Successfully",
          data: { newSermon },
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sermon Creation Failed!",
        error: { error },
      });
    }
  },
  updateSermon: async (req, res) => {
    try {
      const { eventName, description, eventDate, eventVenue } = req.body;
      // const file = await req.file;

      let data = { ...req.body };
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data event", data);

      const event = await Event.findOneAndUpdate(
        { _id: req.params.eventId },
        data,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: 1,
        message: "Sermon Updated Successfully",
        data: { event },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sermon Updated Failed!",
        error: { error },
      });
    }
  },
  deleteSermon: async (req, res) => {
    try {
      await Event.findOneAndDelete({ _id: req.params.eventId });

      res.status(200).json({
        status: 1,
        message: "Sermon Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sermon Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllSermons: async (req, res) => {
    try {
      const Sermons = await Sermon.find();
      // console.log(Sermons);
      res.status(200).json({
        status: 1,
        message: "Sermons Fetched  Successfully",
        data: { Sermons },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Sermons  Failed!",
        error: { error },
      });
    }
  },
};
