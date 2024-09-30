const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});