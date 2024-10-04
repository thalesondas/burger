const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    cpf: { type: String, unique: true  },
    password: String
});

// Fazer hash na senha antes de salvar
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    };
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;