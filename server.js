const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db.js');
const CardapioItem = require('./src/models/CardapioItem.js');
const Pedido = require('./src/models/Pedido.js');

const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());

app.post('/pedidos', async(req, res) => {
    const { endereco, preco, dataAtual, items } = req.body;

    const novoPedido = new Pedido({
        endereco,
        preco,
        dataAtual,
        items
    })

    try{
        const pedidoSalvo = await novoPedido.save();
        res.status(201).json(pedidoSalvo);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
})

app.get('/cardapio', async(req, res) => {
    try{
        const cardapioItems = await CardapioItem.find();
        res.json(cardapioItems)
    } catch(err){
        res.status(500).json({ error: 'Erro ao buscar o cardápio!' });
    }
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3001');
});