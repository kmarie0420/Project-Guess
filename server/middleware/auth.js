const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const withAuth = (req, res, next) => {
  console.log("[MIDDLEWARE]: withAuth triggered");

  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    console.warn("[MIDDLEWARE]: Missing authentication token");
    return res.status(401).send("Missing authentication token");
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {  
    if (err) {
      console.error("[MIDDLEWARE]: Invalid authentication token. Error:", err.message);
      return res.status(401).send("Invalid authentication token");
    }
    req.user = decoded;
    console.log("[MIDDLEWARE]: Token decoded successfully:", decoded);
    next(); 
  });
};

module.exports = withAuth;
