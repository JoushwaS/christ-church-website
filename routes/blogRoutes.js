const express = require("express");
const blogController = require("../controllers/blogController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createBlog,
  testingUpload,
  updateBlog,
  deleteBlog,
  getBlog,
  getAllBlog,
} = blogController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create",
  multerDiskUpload.single("file"),

  catchAsync(createBlog)
);
router.post(
  "/upload",
  multerDiskUpload.single("file"),

  catchAsync(testingUpload)
);

router.put(
  "/update/:blogId",
  multerDiskUpload.single("file"),

  catchAsync(updateBlog)
);
router.delete(
  "/delete/:blogId",

  catchAsync(deleteBlog)
);
router.get(
  "/get/:blogId",

  catchAsync(getBlog)
);

router.get("/get-all", catchAsync(getAllBlog));

module.exports = router;
