const express = require('express');
const { getCardapioItems } = require('../controllers/menuController'); // Importa o controlador

const router = express.Router();

// Rota para obter itens do cardápio
router.get('/', getCardapioItems);

module.exports = router;