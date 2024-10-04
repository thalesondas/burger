const Pedido = require('../models/Pedido');

const criarPedido = async(req, res) => {
    try{
        
        const { endereco, preco, dataAtual, items } = req.body;
        const { username, email, cpf } = req.user;

        const novoPedido = new Pedido({
            endereco,
            preco,
            dataAtual,
            usuario:{
                username,
                email,
                cpf
            },
            items
        })

        await novoPedido.save();
        res.status(201).json({ message: "Pedido realizado com sucesso" });
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro ao realizar o pedido" });
    }
}

module.exports = { criarPedido };