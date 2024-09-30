const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    endereco: String,
    preco: Number,
    dataAtual: String,
    items: [{
        nome: String,
        qtde: Number
    }]
});

const Pedido = mongoose.model('Pedido', pedidoSchema, 'pedidos');

module.exports = Pedido;