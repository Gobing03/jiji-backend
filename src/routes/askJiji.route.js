const express = require('express');
const router = express.Router();
const { askJiji } = require('../controllers/askJiji.controller');
const auth = require('../middleware/auth.middleware');

router.post('/ask-jiji', auth, askJiji);

module.exports = router;
