const express = require("express");
const sacramentController = require("../controllers/sacramentController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const { createSacrament, getAllSacraments, updateSacrament, deleteSacrament } =
  sacramentController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-sacrament",
  multerDiskUpload.single("file"),
  catchAsync(createSacrament)
);

router.put(
  "/update-sacrament/:sacramentId",
  multerDiskUpload.single("file"),
  catchAsync(updateSacrament)
);
router.get("/get-all-sacraments", catchAsync(getAllSacraments));
router.delete("/delete-sacrament/:sacramentId", catchAsync(deleteSacrament));

module.exports = router;
