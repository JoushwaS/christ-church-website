const debug = require("debug");
const OverSeaPartner = require("../models/OverSeaPartner");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createOverSeaPartner: async (req, res) => {
    try {
      const { name, description, country, profession } = req.body;

      const imageUrl = await cloudinaryUpload(req.file.path);

      const newoverseapartner = new OverSeaPartner();
      if (imageUrl) {
        newoverseapartner.image = imageUrl;
      }

      // return;
      newoverseapartner.name = name;
      newoverseapartner.country = country;
      newoverseapartner.profession = profession;
      newoverseapartner.description = description;

      await newoverseapartner.save().then((response) => {
        return res.status(200).json({
          status: 1,
          message: "Over Sea Partner Created Successfully",
          data: { response },
        });
      });

      // return;
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "OverSeaPartner Creation Failed!",
        error: { error },
      });
    }
  },
  updateOverSeaPartner: async (req, res) => {
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
      console.log("updated data OverSeaPartner", data);
      // return;
      const overseapartner = await OverSeaPartner.findOneAndUpdate(
        { _id: req.params.overseapartnerId },
        data,
        {
          new: true,
        }
      );

      return res.status(200).json({
        status: 1,
        message: "Over Sea Partner Updated Successfully",
        data: { overseapartner },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Over Sea Partner Updated Failed!",
        error: { error },
      });
    }
  },
  deleteOverSeaPartner: async (req, res) => {
    try {
      await OverSeaPartner.findOneAndDelete({
        _id: req.params.overseapartnerId,
      });

      // return;
      res.status(200).json({
        status: 1,
        message: "Over Sea Partner Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Over Sea Partner Deleted Failed!",
        error: { error },
      });
    }
  },

  getAllOverSeaPartners: async (req, res) => {
    try {
      const overseapartners = await OverSeaPartner.find();
      // console.log(OverSeaPartners);
      res.status(200).json({
        status: 1,
        message: "Over Sea Partner Fetched  Successfully",
        data: { overseapartners },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Over Sea Partner  Failed!",
        error: { error },
      });
    }
  },
};
