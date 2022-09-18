const express = require('express'),
router = express.Router(),
resultRoute  = require('../controllers/resultCtrl');


router.get('/', resultRoute.resultRoute);

module.exports = router;