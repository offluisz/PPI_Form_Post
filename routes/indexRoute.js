const express = require('express');
const IndexController = require('../controller/indexController');
const router = express.Router();

const indexController = new IndexController();

router.get('/', indexController.index.bind(indexController));


module.exports = router;