const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db.js');
const CardapioItem = require('./src/models/CardapioItem.js');

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.get('/api/cardapio', async (req, res) => {
    try{
        const cardapioItems = await CardapioItem.find();
        res.json(cardapioItems)
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar o cardápio!' });
    }
})

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});