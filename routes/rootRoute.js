const express = require('express'),
router = express.Router(),
rootRoute  = require('../controllers/rootCtrl');

router.get('/', rootRoute.rootRoute);

module.exports = router;