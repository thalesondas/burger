const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 70,
    message: 'Você excedeu o limite de requisições. Tente novamente mais tarde.',
    headers: true
});

module.exports = limiter;