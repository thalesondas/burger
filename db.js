require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado ao MongoDB com sucesso!");
    } catch(err) {
        console.log("Erro ao se conectar com o MongoDB" + err);
        process.exit(1);
    }
}

module.exports = connectDB;