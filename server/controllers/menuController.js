const MenuItem = require('../models/MenuItem');

const getMenuItems = async(req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o cardápio' });
    }
};

module.exports = getMenuItems;
