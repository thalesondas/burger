const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Cadastro de usuário
const registerUser = async(req, res) => {

    const { username, email, cpf, password } = req.body;

    try{
        // Verificar se e-mail ou CPF já existem
        const [existingEmail, existingCpf] = await Promise.all([
            User.findOne({ email }),
            User.findOne({ cpf })
        ]);

        if(existingEmail){
            return res.status(400).json({ error: "Usuário com este e-mail já existe" })
        } else if(existingCpf){
            return res.status(400).json({ error: "Usuário com este CPF já existe" })
        }

        // Criar o novo usuário
        const newUser = new User({ username, email, cpf, password });
        await newUser.save();

        res.status(201).json({ message: "Usuário cadastrado com sucesso" })
        
    } catch(error){
        console.log("Erro: " + error);
        res.status(500).json({ error: "Erro ao cadastrar usuário" })
    }
}

// Login de usuário
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try{

        const foundUser = await User.findOne({ email: email });

        if(!foundUser){
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        // Comparar as senhas
        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);
        if(!isPasswordCorrect){
            return res.status(401).json({ error: "Senha incorreta" });
        }

        // Gerar o token JWT
        const token = jwt.sign({ username: foundUser.username, email: foundUser.email, cpf: foundUser.cpf }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, username: foundUser.username.split(' ')[0] });

    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro ao fazer login: " + error.message })
    }
}

module.exports = { registerUser, loginUser };