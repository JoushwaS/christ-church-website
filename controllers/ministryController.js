const debug = require("debug");
const Ministry = require("../models/Ministry");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createMinistry: async (req, res) => {
    try {
      const { ministryName, description } = req.body;

      const imageUrl = await cloudinaryUpload(req.file.path);

      const newMinistry = new Ministry();
      if (imageUrl) {
        newMinistry.image = imageUrl;
      }

      // return;
      newMinistry.ministryName = ministryName;
      newMinistry.description = description;

      await newMinistry.save().then((response) => {
        return res.status(200).json({
          status: 1,
          message: "Ministry Created Successfully",
          data: { response },
        });
      });

      // return;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Ministry Creation Failed!",
        error: { error },
      });
    }
  },
  updateMinistry: async (req, res) => {
    try {
      let data = { ...req.body };
      console.log(req.body);
      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        if (imageUrl) {
          data.image = imageUrl;
        }
      }
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data Ministry", data);
      // return;
      const ministry = await Ministry.findOneAndUpdate(
        { _id: req.params.ministryId },
        data,
        {
          new: true,
        }
      );

      // return;
      res.status(200).json({
        status: 1,
        message: "Ministry Updated Successfully",
        data: { ministry },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Ministry Updated Failed!",
        error: { error },
      });
    }
  },
  deleteMinistry: async (req, res) => {
    try {
      await Ministry.findOneAndDelete({ _id: req.params.ministryId });

      // return;
      res.status(200).json({
        status: 1,
        message: "Ministry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Ministry Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllMinistries: async (req, res) => {
    try {
      const ministries = await Ministry.find();
      // console.log(Ministrys);
      res.status(200).json({
        status: 1,
        message: "Ministries Fetched  Successfully",
        data: { ministries },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Ministries  Failed!",
        error: { error },
      });
    }
  },
};
