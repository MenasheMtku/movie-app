const express = require("express");
const router = express.Router();
const movieRoute = require("../controllers/movieCtrl");

router.get("/", movieRoute.movieRoute);

module.exports = router;
