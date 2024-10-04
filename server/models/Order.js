const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address: String,
    price: Number,
    orderDate: String,
    user: {
        name: String,
        email: String,
        cpf: String
    },
    items: [{
        name: String,
        quantity: Number
    }]
});

const Order = mongoose.model('Order', orderSchema, 'orders');

module.exports = Order;