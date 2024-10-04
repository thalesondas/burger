const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers['authorization'];

    if(!token){
        return res.status(403).json({ error: "Acesso negado" });
    }

    try{
        const tokenSplited = token.split(' ')[1];
        const decoded = jwt.verify(tokenSplited, process.env.JWT_SECRET);
        req.username = decoded;
        next();
    } catch(error){
        return res.status(403).json({ error: "Token inválido" });
    }

}

module.exports = verifyToken;