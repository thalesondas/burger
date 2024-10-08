const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const rateLimiter = require('./middlewares/limiterMiddleware');

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/menuRoutes'));
app.use('/', require('./routes/orderRoutes'));

connectDB();

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});