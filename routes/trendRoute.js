const express = require("express");
const router = express.Router();
const trendRoute = require("../controllers/trendCtrl");

router.get("/", trendRoute.trendRoute);

module.exports = router;
