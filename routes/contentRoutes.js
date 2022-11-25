const express = require("express");
const contentController = require("../controllers/contentController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const { createContent, updateContent, getContent } = contentController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create",
  multerDiskUpload.single("file"),

  catchAsync(createContent)
);

router.put(
  "/update",
  multerDiskUpload.single("file"),

  catchAsync(updateContent)
);

router.get("/get", catchAsync(getContent));

module.exports = router;
