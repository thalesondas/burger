const express = require('express');
const createOrder = require('../controllers/orderController');
const verifyToken = require('../middlewares/authMiddleware');
const limiter = require('../middlewares/limiterMiddleware')

const router = express.Router();

router.post('/api/order', verifyToken, limiter, createOrder);

module.exports = router;