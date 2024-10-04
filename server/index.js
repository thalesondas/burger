const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db.js');

connectDB();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});