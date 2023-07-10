const express = require("express");
const router = express.Router();
const resultRoute = require("../controllers/resultCtrl");

router.get("/", resultRoute.resultRoute);

module.exports = router;
