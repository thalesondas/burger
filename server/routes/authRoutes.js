const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const limiter = require('../middlewares/limiterMiddleware')

const router = express.Router();

router.post('/api/register', limiter, registerUser);
router.post('/api/login', limiter, loginUser);

module.exports = router;