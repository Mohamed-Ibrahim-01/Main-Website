const express = require('express');
const router = express.Router();
const magazineController = require('../controllers/magazineController.js');

router.get('/',magazineController.getAllMagazines);
router.get('/:id',magazineController.getMagazine);

module.exports = router


