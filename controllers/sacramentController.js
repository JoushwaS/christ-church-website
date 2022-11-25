const debug = require("debug");
const Sacrament = require("../models/Sacrament");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createSacrament: async (req, res) => {
    try {
      const { sacramentName, description, sacramentDate, sacramentVenue } =
        req.body;
      const newSacrament = new Sacrament();
      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);
        if (imageUrl) {
          newSacrament.image = imageUrl;
        }
      }

      // return;
      newSacrament.sacramentName = sacramentName;
      newSacrament.description = description;
      newSacrament.sacramentVenue = sacramentVenue;
      newSacrament.sacramentDate = sacramentDate;

      await newSacrament.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Sacrament Created Successfully",
          data: { newSacrament },
        });
      });

      // return;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sacrament Creation Failed!",
        error: { error },
      });
    }
  },
  updateSacrament: async (req, res) => {
    try {
      //   const { sacramentName, description, sacramentDate, sacramentVenue } =
      //     req.body;
      // const file = await req.file;

      let data = { ...req.body };

      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        if (imageUrl) {
          data.image = imageUrl;
        }
      }

      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data Sacrament", data);
      // return;
      const sacrament = await Sacrament.findOneAndUpdate(
        { _id: req.params.sacramentId },
        data,
        {
          new: true,
        }
      );

      // return;
      res.status(200).json({
        status: 1,
        message: "Sacrament Updated Successfully",
        data: { sacrament },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sacrament Updated Failed!",
        error: { error },
      });
    }
  },
  deleteSacrament: async (req, res) => {
    try {
      await Sacrament.findOneAndDelete({ _id: req.params.SacramentId });

      // return;
      res.status(200).json({
        status: 1,
        message: "Sacrament Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Sacrament Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllSacraments: async (req, res) => {
    try {
      const sacraments = await Sacrament.find();
      // console.log(Sacraments);
      res.status(200).json({
        status: 1,
        message: "Sacraments Fetched  Successfully",
        data: { sacraments },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Sacraments  Failed!",
        error: { error },
      });
    }
  },
};
