const express = require('express');
const router = express.Router();

router.use(express.json());

router.use('/' , require('./product_routes'));

module.exports = router;
