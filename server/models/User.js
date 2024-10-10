const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    cpf: { type: String, unique: true  },
    password: String
});

// Fazer hash na senha antes de salvar
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(2);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;