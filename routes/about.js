var express = require('express');
var router = express.Router();

const {about} = require('../controllers/mainController.js');

router.get('/', about);

module.exports = router;
