const Blog = require("../models/Blog");
const { cloudinaryUpload } = require("../middlewares/cloudinaryUpload.js");
const { isEmailValid } = require("../utils/emailRegex");

module.exports = {
  /**
   * create service
   * @param req
   * @param res
   * @param next
   */
  createBlog: async (req, res) => {
    try {
      const { blogName, subHeading, description } = req.body;

      let newBlog = new Blog();
      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        if (imageUrl) {
          newBlog.image = imageUrl;
        }
      }

      newBlog.blogName = blogName;

      newBlog.subHeading = subHeading;
      newBlog.description = description;

      Object.keys(newBlog).forEach(
        (k) => newBlog[k] == null || (newBlog[k] == "" && delete newBlog[k])
      );

      await newBlog.save().then(() => {
        return res.status(200).json({
          status: 1,
          message: "Blog Created Successfully",
          data: { newBlog },
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Blog Creation Failed!",
        error: { error },
      });
    }
  },
  testingUpload: async (req, res) => {
    try {
      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        return res.status(200).json({
          status: 1,
          message: "Upload Successfully",
          data: { imageUrl },
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Upload n Failed!",
        error: { error },
      });
    }
  },

  updateBlog: async (req, res) => {
    try {
      let data = { ...req.body };
      Object.keys(data).forEach(
        (k) => data[k] == null || (data[k] == "" && delete data[k])
      );
      console.log("updated data semon", data);

      if (req.file) {
        const imageUrl = await cloudinaryUpload(req.file.path);

        if (imageUrl) {
          data.image = imageUrl;
        }
      }

      const blog = await Blog.findOneAndUpdate(
        { _id: req.params.blogId },
        data,
        {
          new: true,
        }
      );

      return res.status(200).json({
        status: 1,
        message: "Blog Updated Successfully",
        data: { blog },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Blog Updated Failed!",
        error: { error },
      });
    }
  },
  deleteBlog: async (req, res) => {
    try {
      await Blog.findOneAndDelete({ _id: req.params.blogId });

      res.status(200).json({
        status: 1,
        message: "Blog Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Blog Deleted Failed!",
        error: { error },
      });
    }
  },

  getBlog: async (req, res) => {
    try {
      const blog = await Blog.findOne({ _id: req.params.blogId });

      return res.status(200).json({
        status: 1,
        message: "Blog Fetched  Successfully",
        data: { blog },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Blog  Failed!",
        error: { error },
      });
    }
  },
  getAllBlog: async (req, res) => {
    try {
      const blogs = await Blog.find();

      return res.status(200).json({
        status: 1,
        message: "Blogs Fetched  Successfully",
        data: { blogs },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 0,
        message: "Fetch Blogs  Failed!",
        error: { error },
      });
    }
  },
};
