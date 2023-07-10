const express = require("express");
const router = express.Router();
const homeRoute = require("../controllers/homeCtrl");

router.get("/", homeRoute.homeRoute);

module.exports = router;
