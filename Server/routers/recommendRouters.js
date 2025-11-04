const express = require("express");
const router = express.Router();
const recomendController = require("./../controllers/recommendController");

router.route("/tours").get(recomendController.getRecommendedTours);

module.exports = router;
