const express = require("express");
const { multerDiskUpload } = require("../middlewares/upload.middleware");
const verifyRights = require("../middlewares/verifyRights.middleware");
const authentication = require("../middlewares/authenticate.middleware");

const catchAsync = require("../middlewares/catchAsync.middleware");
const adminController = require("../controllers/adminController");
const { createUser, adminLogin } = adminController;
const router = express.Router();
const { authenticate } = authentication;

router.post(
  "/admin-login",

  catchAsync(adminLogin)
);
// router.post("/login", catchAsync(login));
router.post(
  "/create",
  multerDiskUpload.single("file"),
  authenticate,
  verifyRights("createUser"),
  catchAsync(createUser)
);
module.exports = router;
