const IndexController = require('../controller/indexController');
const express = require('express');
const router = express.Router();

let controller = new IndexController();

router.get('/', controller.index);

module.exports = router;