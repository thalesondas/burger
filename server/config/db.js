require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(chalk.green("Conectado ao MongoDB com sucesso!"));
    } catch(err) {
        console.log(chalk.red("Erro ao se conectar com o MongoDB" + err));
        process.exit(1);
    }
}

module.exports = connectDB;