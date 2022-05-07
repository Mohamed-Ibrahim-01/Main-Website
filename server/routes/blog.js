const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController.js');

router.get('/',blogController.getArticles);

module.exports = router
