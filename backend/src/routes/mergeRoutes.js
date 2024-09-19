const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const mergeController = require('../controllers/mergeController');

router.post('/', upload.array('pdfs', 10), mergeController.mergePDFs);

module.exports = router;