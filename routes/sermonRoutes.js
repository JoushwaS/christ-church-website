const express = require("express");
const sermonController = require("../controllers/sermonController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createSermon,
  getSermonType,
  getSermon,
  updateSermon,
  deleteSermon,
  getAllSermons,
} = sermonController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-sermon",
  multerDiskUpload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "audio",
      maxCount: 1,
    },
  ]),
  catchAsync(createSermon)
);

router.put(
  "/update-sermon/:sermonId",
  multerDiskUpload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "audio",
      maxCount: 1,
    },
  ]),

  catchAsync(updateSermon)
);
router.get("/get-all-sermons", catchAsync(getAllSermons));
router.get("/get-sermon/:sermonId", catchAsync(getSermon));
router.post("/get-sermons-type", catchAsync(getSermonType));
router.delete("/delete-sermon/:sermonId", catchAsync(deleteSermon));

module.exports = router;
