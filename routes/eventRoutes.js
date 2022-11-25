const express = require("express");
const postController = require("../controllers/eventController");

const catchAsync = require("../middlewares/catchAsync.middleware");

const { createEvent, getEvent, getAllEvents, updateEvent, deleteEvent } =
  postController;
const { multerDiskUpload } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post(
  "/create-event",
  multerDiskUpload.single("file"),
  catchAsync(createEvent)
);

router.put(
  "/update-event/:eventId",
  multerDiskUpload.single("file"),
  catchAsync(updateEvent)
);
router.get("/get-all-events", catchAsync(getAllEvents));
router.get("/get-event/:eventId", catchAsync(getEvent));
router.delete("/delete-event/:eventId", catchAsync(deleteEvent));

module.exports = router;
