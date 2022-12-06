const debug = require("debug");
const ExploreChurch = require("../models/ExploreChurch");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createExploreChurch: async (req, res) => {
    try {
      const { title, description } = req.body;

      let newExploreChurch = new ExploreChurch();

      //   console.log("imageUrl>>", imageUrl);

      if (req.files["imageLogo"]) {
        const imageLogoUrl = await cloudinaryUpload(
          req.files["imageLogo"][0]?.path
        );
        newExploreChurch.imageLogo = imageLogoUrl;
      } else {
        return res.status(400).json({
          status: 0,
          message: "Explorer Church Creation Failed! Please Upload Logo!",
          //    error: { error },
        });
      }
      if (req.files["image"]) {
        const imageUrl = await cloudinaryUpload(req.files["image"][0]?.path);
        newExploreChurch.image = imageUrl;
      }
      // else {
      //   return res.status(400).json({
      //     status: 0,
      //     message: "Explorer Church Creation Failed! Please Upload Image!",
      //     //    error: { error },
      //   });
      // }

      newExploreChurch.title = title;
      newExploreChurch.description = description;

      Object.keys(newExploreChurch).forEach(
        (k) =>
          newExploreChurch[k] == null ||
          (newExploreChurch[k] == "" && delete newExploreChurch[k])
      );

      await newExploreChurch.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Explore Church Info Section Created Successfully",
          data: { newExploreChurch },
        });
      });
    } catch (error) {
      return res.status(400).json({
        status: 0,
        message: "Explorer Church Info Section Creation Failed!",
        error: { error },
      });
    }
  },
  updateExploreChurch: async (req, res) => {
    try {
      let data = { ...req.body };
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data semon", data);
      if (req.files["imageLogo"]) {
        const imageLogoUrl = await cloudinaryUpload(
          req.files["imageLogo"][0]?.path
        );

        if (imageLogoUrl) {
          data.imageLogo = imageLogoUrl;
        }
      }
      if (req.files["image"]) {
        const imageUrl = await cloudinaryUpload(req.files["image"][0]?.path);

        if (imageUrl) {
          data.image = imageUrl;
        }
      } else if (req.files["image"]) {
        const imageUrl = await cloudinaryUpload(req.files["image"][0]?.path);

        if (imageUrl) {
          data.image = imageUrl;
        }
      }

      const exploreChurch = await ExploreChurch.findOneAndUpdate(
        { _id: req.params.exploreChurchId },
        data,
        {
          new: true,
        }
      );

      return res.status(200).json({
        status: 1,
        message: "Explore Church  Info Updated Successfully",
        data: { exploreChurch },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Explore Church Info  Updated Failed!",
        error: { error },
      });
    }
  },
  deleteExploreChurch: async (req, res) => {
    try {
      await ExploreChurch.findOneAndDelete({ _id: req.params.exploreChurchId });

      res.status(200).json({
        status: 1,
        message: "Explore Church Info Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Explore Church Info Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllExploreChurchInfo: async (req, res) => {
    try {
      const exploreChurchInfoList = await ExploreChurch.find();
      // console.log(Sermons);
      res.status(200).json({
        status: 1,
        message: "Explore Church Info List Fetched  Successfully",
        data: { exploreChurchInfoList },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Explore Church Info List  Failed!",
        error: { error },
      });
    }
  },
  getSExploreChurchInfo: async (req, res) => {
    try {
      const exploreChurchInfo = await ExploreChurch.findOne({
        _id: req.params.exploreChurchId,
      });
      // console.log(Sermons);
      return res.status(200).json({
        status: 1,
        message: "Explore Church Info  Fetched  Successfully",
        data: { exploreChurchInfo },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Explore Church Info   Failed!",
        error: { error },
      });
    }
  },
};
