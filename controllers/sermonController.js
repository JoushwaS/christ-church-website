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
      if (req.files["thumbnail"]) {
        const imageUrl = await cloudinaryUpload(
          req.files["thumbnail"][0]?.path
        );

        console.log("imageUrl>>", imageUrl);

        if (imageUrl) {
          newSermon.thumbnail = imageUrl;
        }
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
      let data = { ...req.body };

      console.log("files", req.files);

      // return;
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data semon", data);
      console.log("sermonId", req.params.sermonId);

      if (data.sermonType == "audio") {
        const audioPath = await cloudinaryUpload(req.files["audio"][0]?.path);
        console.log("audioPath", audioPath);
        data.audioUrl = audioPath;
      }
      if (req.files["thumbnail"]) {
        const imageUrl = await cloudinaryUpload(
          req.files["thumbnail"][0]?.path
        );

        console.log("imageUrl>>", imageUrl);

        if (imageUrl) {
          data.thumbnail = imageUrl;
        }
      }

      const sermon = await Sermon.findOneAndUpdate(
        { _id: req.params.sermonId },
        data,
        {
          new: true,
        }
      );
      console.log("update sermon repons", sermon);
      return res.status(200).json({
        status: 1,
        message: "Sermon Updated Successfully",
        data: { sermon },
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
      await Sermon.findOneAndDelete({ _id: req.params.sermonId });

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
  getSermon: async (req, res) => {
    try {
      const sermon = await Sermon.findOne({ _id: req.params.sermonId });
      // console.log(Sermons);
      return res.status(200).json({
        status: 1,
        message: "Sermons Fetched  Successfully",
        data: { sermon },
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
  getSermon: async (req, res) => {
    try {
      const sermon = await Sermon.findOne({ _id: req.params.sermonId });
      // console.log(Sermons);
      return res.status(200).json({
        status: 1,
        message: "Sermons Fetched  Successfully",
        data: { sermon },
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
  getSermonType: async (req, res) => {
    try {
      const { sermonType } = req.body;
      const sermon = await Sermon.find({ sermonType: sermonType });
      // console.log(Sermons);
      return res.status(200).json({
        status: 1,
        message: "Sermons Fetched  Successfully",
        data: { sermon },
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
