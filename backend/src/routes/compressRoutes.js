const express = require('express');
const router = express.Router();
const compressController = require('../controllers/compressController');

router.post('/compress', compressController.compressPDF);

module.exports = router;