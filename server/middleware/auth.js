const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const withAuth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).send("Missing authentication token");
  }
  
  jwt.verify(token, jwtSecret, (err, decoded) => {  
    if (err) {
      return res.status(401).send("Invalid authentication token");
    }
    req.user = decoded; 
  });
};

module.exports = withAuth;

