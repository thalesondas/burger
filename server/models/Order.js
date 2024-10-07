const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address: {
        street: String,
        number: Number,
        neighborhood: String,
        city: String,
        complement: String
    },
    price: Number,
    orderDate: String,
    user: {
        username: String,
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