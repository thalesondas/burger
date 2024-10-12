const MenuItem = require('../models/MenuItem');
//* const redisClient = require('./config/redis');


const getMenuItems = async(req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o cardápio' });
    }
};

/*
* const getMenuItems = async(req, res) => {
*     try {
*         const cachedMenu = await redisClient.get('menu');
*         if(cachedMenu){
*             return res.json(JSON.parse(cachedMenu));
*         }
*         const menuItems = await MenuItem.find();
*         await redisClient.set('menu', JSON.stringify(menuItems), { EX: 3600 });
*         return res.json(menuItems);
*     } catch (err) {
*         res.status(500).json({ error: 'Erro ao buscar o cardápio' });
*    }
* };
*/

module.exports = getMenuItems;
