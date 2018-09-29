var express = require('express');

var controller = require('../controllers/transfer.controller');

var router = express.Router();

router.get('/create', controller.create);
router.post('/create', controller.postCreate);

module.exports = router;
