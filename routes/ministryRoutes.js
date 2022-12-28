const express = require("express");
const ministryController = require("../controllers/ministryController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createMinistry,
  getMinistry,
  updateMinistry,
  deleteMinistry,
  getAllMinistries,
} = ministryController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-ministry",
  multerDiskUpload.single("file"),
  catchAsync(createMinistry)
);

router.put(
  "/update-ministry/:ministryId",
  multerDiskUpload.single("file"),
  catchAsync(updateMinistry)
);
router.get("/get-all-ministeries", catchAsync(getAllMinistries));
router.get("/get-ministery/:ministryId", catchAsync(getMinistry));
router.delete("/delete-ministry/:ministryId", catchAsync(deleteMinistry));

module.exports = router;
