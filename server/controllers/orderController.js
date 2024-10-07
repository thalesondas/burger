const Pedido = require('../models/Order');

const createOrder = async(req, res) => {
    try{
        const { address, price, orderDate, items } = req.body;
        const { username, email, cpf } = req.user;
        
        const newOrder = new Pedido({
            address,
            price,
            orderDate,
            user:{
                username: username,
                email: email,
                cpf: cpf
            },
            items
        })

        await newOrder.save();
        res.status(201).json({ message: "Pedido realizado com sucesso" });
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro ao realizar o pedido" });
    }
}

module.exports = createOrder;