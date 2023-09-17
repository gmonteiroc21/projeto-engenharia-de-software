const jwt = require('jsonwebtoken');
const config = require('../config/config');

class Authentication {

  static getBearer(token) {
    var bearerToken = ''
    if (token) {
      const tokenParts = token.split(' ');
      bearerToken = tokenParts[1];
    }
    return bearerToken;

  }

  static verifyToken(req, res, next) {
    const token = req.header('Authorization');
    const bearerToken = Authentication.getBearer(token);
    
    if (!bearerToken) return res.status(401).json({ message: 'Token não fornecido' });
  
    jwt.verify(bearerToken, config.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: 'Token inválido' });
      req.user = user;
      next();
    });
  }

  static verifyUser(bearerToken) {
    var user = {}
    jwt.verify(bearerToken, config.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token.' });
      }
      user = decoded.user;
    })
    return user;
  }

}

module.exports = Authentication;