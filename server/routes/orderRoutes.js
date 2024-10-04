const express = require('express');
const createOrder = require('../controllers/orderController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/api/order', verifyToken, createOrder);

module.exports = router;