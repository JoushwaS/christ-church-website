const Content = require("../models/Content");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
const { isEmailValid } = require("../utils/emailRegex");

module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createContent: async (req, res) => {
    try {
      const {
        location,
        email,
        missionStatement,
        facebookLink,
        twitterLink,
        aboutUs,
        youtubeLink,
      } = req.body;

      let newContent = new Content();
      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        if (imageUrl) {
          newContent.logo = imageUrl;
        }
      }

      newContent.location = location;

      if (isEmailValid(email)) {
        newContent.email = email;
      } else {
        return res.status(403).json({
          status: 0,
          message: "Add Content  Failed! Please Enter a Valid Email",
        });
      }

      newContent.missionStatement = missionStatement;
      newContent.facebookLink = facebookLink;
      newContent.twitterLink = twitterLink;
      newContent.youtubeLink = youtubeLink;
      newContent.aboutUs = aboutUs;

      Object.keys(newContent).forEach(
        (k) =>
          newContent[k] == null || (newContent[k] == "" && delete newContent[k])
      );

      await newContent.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Content Created Successfully",
          data: { newContent },
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Content Creation Failed!",
        error: { error },
      });
    }
  },
  updateContent: async (req, res) => {
    try {
      let data = { ...req.body };
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data semon", data);

      if (req.file) {
        // const audioPath = await cloudinaryUpload(req.file?.path);
        const imageUrl = await cloudinaryUpload(
          req.files["thumbnail"][0]?.path
        );

        data.logo = imageUrl;
      }
      if (isEmailValid(data.email)) {
        data.email = email;
      } else {
        return res.status(403).json({
          status: 0,
          message: "Update Content  Failed! Please Enter a Valid Email",
        });
      }
      const content = await Content.findOneAndUpdate({}, data, {
        new: true,
      });

      return res.status(200).json({
        status: 1,
        message: "Content Updated Successfully",
        data: { content },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Content Updated Failed!",
        error: { error },
      });
    }
  },
  // deleteSermon: async (req, res) => {
  //   try {
  //     await Content.findOneAndDelete({ _id: req.params.sermonId });

  //     res.status(200).json({
  //       status: 1,
  //       message: "Content Deleted Successfully",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).json({
  //       status: 0,
  //       message: "Content Deleted Failed!",
  //       error: { error },
  //     });
  //   }
  // },

  getContent: async (req, res) => {
    try {
      const content = await Content.findOne();

      return res.status(200).json({
        status: 1,
        message: "Content Fetched  Successfully",
        data: { content },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Content  Failed!",
        error: { error },
      });
    }
  },
};
