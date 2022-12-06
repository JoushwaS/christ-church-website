const express = require("express");
const explorerChurchController = require("../controllers/explorerChurchController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createExploreChurch,
  updateExploreChurch,
  deleteExploreChurch,
  getAllExploreChurchInfo,
  getSExploreChurchInfo,
} = explorerChurchController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create",
  multerDiskUpload.fields([
    {
      name: "imageLogo",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  catchAsync(createExploreChurch)
);

router.put(
  "/update/:exploreChurchId",
  multerDiskUpload.fields([
    {
      name: "imageLogo",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 1,
    },
  ]),

  catchAsync(updateExploreChurch)
);
router.get("/get-all", catchAsync(getAllExploreChurchInfo));
router.get("/get/:exploreChurchId", catchAsync(getSExploreChurchInfo));
router.delete("/delete/:exploreChurchId", catchAsync(deleteExploreChurch));

module.exports = router;
