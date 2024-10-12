const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
//* const redisClient = require('./config/redis');

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/menuRoutes'));
app.use('/', require('./routes/orderRoutes'));

connectDB();

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

/*
* const startup = async() => {
*     try {
*         await redisClient.connect();
*         console.log("Redis conectado");
* 
*         app.listen(3001, () => {
*             console.log('Servidor rodando na porta 3001');
*         });
*     } catch (error) {
*         console.error("Erro ao conectar ao Redis:", error);
*     }
* }
*
* startup();
*/