const express = require('express');
const router = express.Router();
const splitController = require('../controllers/splitController');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, upload.array('pdfs', 10), mergeController.mergePDFs);

router.post('/split', splitController.splitPDF);

module.exports = router;