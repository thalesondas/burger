const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 12 * 60 * 1000,
    max: 8,
    handler: (req, res) => {
        res.status(429).json({ error: "Muitas requisições partir deste IP, por favor, tente novamente mais tarde." });
    }
});

module.exports = limiter;