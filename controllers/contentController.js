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
      const tempData = {
        logo: "",
        location:
          "Drigh Road Faisal Cantonment, Karachi, Karachi City, Sindh, Pakistan",
        email: "christChurch1@gmail.com",
        missionStatement:
          "As people called by God,We gather to praise God, listen to him, and respond.We nurture each other in faith and obedience to Christ.We love and care for one another as God's people.We commit ourselves to serving and tell others about Jesus.We pursue God's justice and peace in every area of life.",
        facebookLink: "https://facebook.com",
        twitterLink: "https://twitter.com",
        youtubeLink: "https://youtube.com/CHRIST-CHURCH",
        aboutUs:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la",
      };
      let newContent = new Content();

      console.log(req.files);
      // return;
      if (req.files) {
        if (req.files["logo"]) {
          const logoUrl = await cloudinaryUpload(
            req.files["logo"][0]?.path
          ).then((res) => {
            console.log("logo", res);
            newContent.logo = res;
          });

          // return;
        }
        if (req.files["aboutBanner"]) {
          const aboutBannerUrl = await cloudinaryUpload(
            req.files["aboutBanner"][0]?.path
          ).then((res) => {
            newContent.aboutBanner = res;
          });
        }
        if (req.files["sacramentBanner"]) {
          const sacramentBannerUrl = await cloudinaryUpload(
            req.files["sacramentBanner"][0]?.path
          ).then((res) => {
            newContent.sacramentBanner = res;
          });
        }
        if (req.files["contactBanner"]) {
          const sacramentBannerUrl = await cloudinaryUpload(
            req.files["contactBanner"][0]?.path
          ).then((res) => {
            newContent.contactBanner = res;
          });
        }
        if (req.files["ministryBanner"]) {
          const ministryBannerUrl = await cloudinaryUpload(
            req.files["ministryBanner"][0]?.path
          ).then((res) => {
            newContent.ministryBanner = res;
          });
          // if (ministryBannerUrl) {
          //   newContent.ministryBanner = ministryBannerUrl;
          // }
        }
        if (req.files["sermonBanner"]) {
          const sermonBannerUrl = await cloudinaryUpload(
            req.files["sermonBanner"][0]?.path
          ).then((res) => {
            newContent.sermonBanner = res;
          });

          // if (sermonBannerUrl) {
          //   newContent.sermonBanner = sermonBannerUrl;
          // }
        }
        if (req.files["eventBanner"]) {
          const eventBannerUrl = await cloudinaryUpload(
            req.files["eventBanner"][0]?.path
          ).then((res) => {
            newContent.eventBanner = res;
          });

          // console.log(eventBannerUrl);
        }
        if (req.files["blogBanner"]) {
          const blogBannerUrl = await cloudinaryUpload(
            req.files["blogBanner"][0]?.path
          ).then((res) => {
            newContent.blogBanner = res;
          });

          // if (blogBannerUrl) {
          //   newContent.blogBanner = blogBannerUrl;
          // }
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

      console.log(req.files);
      // return;
      if (req.files) {
        if (req.files["logo"]) {
          const logoUrl = await cloudinaryUpload(
            req.files["logo"][0]?.path
          ).then((res) => {
            console.log("logo", res);
            data.logo = res;
          });

          // return;
        }
        if (req.files["aboutBanner"]) {
          const aboutBannerUrl = await cloudinaryUpload(
            req.files["aboutBanner"][0]?.path
          ).then((res) => {
            data.aboutBanner = res;
          });
        }
        if (req.files["sacramentBanner"]) {
          const sacramentBannerUrl = await cloudinaryUpload(
            req.files["sacramentBanner"][0]?.path
          ).then((res) => {
            data.sacramentBanner = res;
          });

          // if (sacramentBannerUrl) {
          //   newContent.sacramentBanner = sacramentBannerUrl;
          // }
        }
        if (req.files["ministryBanner"]) {
          const ministryBannerUrl = await cloudinaryUpload(
            req.files["ministryBanner"][0]?.path
          ).then((res) => {
            data.ministryBanner = res;
          });
          // if (ministryBannerUrl) {
          //   newContent.ministryBanner = ministryBannerUrl;
          // }
        }
        if (req.files["sermonBanner"]) {
          const sermonBannerUrl = await cloudinaryUpload(
            req.files["sermonBanner"][0]?.path
          ).then((res) => {
            data.sermonBanner = res;
          });

          // if (sermonBannerUrl) {
          //   newContent.sermonBanner = sermonBannerUrl;
          // }
        }
        if (req.files["eventBanner"]) {
          const eventBannerUrl = await cloudinaryUpload(
            req.files["eventBanner"][0]?.path
          ).then((res) => {
            data.eventBanner = res;
          });

          // console.log(eventBannerUrl);
        }
        if (req.files["blogBanner"]) {
          const blogBannerUrl = await cloudinaryUpload(
            req.files["blogBanner"][0]?.path
          ).then((res) => {
            data.blogBanner = res;
          });

          // if (blogBannerUrl) {
          //   newContent.blogBanner = blogBannerUrl;
          // }
        }
      }
      if (data.email) {
        if (isEmailValid(data.email)) {
          data.email = email;
        } else {
          return res.status(403).json({
            status: 0,
            message: "Update Content  Failed! Please Enter a Valid Email",
          });
        }
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
