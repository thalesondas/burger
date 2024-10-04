const CardapioItem = require('../models/CardapioItem');

const getCardapioItems = async(req, res) => {
    try {
        const cardapioItems = await CardapioItem.find();
        res.json(cardapioItems);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o cardápio' });
    }
};

module.exports = { getCardapioItems };
