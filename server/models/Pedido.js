const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    endereco: String,
    preco: Number,
    dataAtual: String,
    usuario: {
        nome: String,
        email: String,
        cpf: String
    },
    items: [{
        nome: String,
        qtde: Number
    }]
});

const Pedido = mongoose.model('Pedido', pedidoSchema, 'pedidos');

module.exports = Pedido;