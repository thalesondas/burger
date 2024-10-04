const express = require('express');
const { criarPedido } = require('../controllers/orderController');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, criarPedido);

module.exports = router;