const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    price: Number,
    imageUrl: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema, 'menu');

module.exports = MenuItem;