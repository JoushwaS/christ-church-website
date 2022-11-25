const express = require("express");
const contactController = require("../controllers/contactController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const {
  createContactRequest,
  deleteContactRequest,
  getAllContactRequests,
  getContactRequest,
} = contactController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-contact-request",

  catchAsync(createContactRequest)
);

// router.put(
//   "/update-contact-us/:contactRequestId",
//   multerDiskUpload.fields([
//     {
//       name: "thumbnail",
//       maxCount: 1,
//     },
//     {
//       name: "audio",
//       maxCount: 1,
//     },
//   ]),

//   catchAsync(updateSermon)
// );

router.get("/get-all-contact-requests", catchAsync(getAllContactRequests));
router.get(
  "/get-contact-request/:contactRequestId",
  catchAsync(getContactRequest)
);
router.delete(
  "/delete-contact-us/:contactRequestId",
  catchAsync(deleteContactRequest)
);

module.exports = router;
