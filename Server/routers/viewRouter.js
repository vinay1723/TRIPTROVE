const express = require("express");
const tourControllers = require("../controllers/tourController");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const authController = require("./../controllers/authController");
const bookingController = require("./../controllers/bookingController");

router
  .route("/")
  .get(
    bookingController.createBookingCheckout,
    authController.isLoggedin,
    bookingController.getAllBookings
  );
router.route("/:id").get(bookingController.allBookings);

module.exports = router;
