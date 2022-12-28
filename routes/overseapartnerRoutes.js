const express = require("express");
const overSeaPartnerController = require("../controllers/overSeaPartnerController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createOverSeaPartner,
  updateOverSeaPartner,
  deleteOverSeaPartner,
  getAllOverSeaPartners,
  getOverSeaPartner,
} = overSeaPartnerController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-partner",
  multerDiskUpload.single("file"),
  catchAsync(createOverSeaPartner)
);

router.put(
  "/update-partner/:overseapartnerId",
  multerDiskUpload.single("file"),
  catchAsync(updateOverSeaPartner)
);
router.get("/get-all-partners", catchAsync(getAllOverSeaPartners));
router.get("/get-partner/:overseapartnerId", catchAsync(getOverSeaPartner));
router.delete(
  "/delete-partner/:overseapartnerId",
  catchAsync(deleteOverSeaPartner)
);

module.exports = router;
