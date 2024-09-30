const mongoose = require('mongoose');

const cardapioItemSchema = new mongoose.Schema({
    tipo: String,
    titulo: String,
    descricao: String,
    preco: Number,
    imagemUrl: String
});

const CardapioItem = mongoose.model('CardapioItem', cardapioItemSchema, 'cardapio');

module.exports = CardapioItem;