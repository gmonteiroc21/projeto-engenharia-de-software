const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  var bearerToken = ''

  if (token) {
    const tokenParts = token.split(' ');
    bearerToken = tokenParts[1];
  }
  
  if (!bearerToken) return res.status(401).json({ message: 'Token não fornecido' });

  jwt.verify(bearerToken, process.env.SECRET_KEY, (err, user) => {
    console.log(bearerToken);
    console.log(err);
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
}

module.exports = verifyToken;