const jwt = require('jsonwebtoken');
const secret = 'your-secret-key'; 
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

const signToken = (user) => {
  return jwt.sign({ id: user._id }, secret, {
    expiresIn: '24h'
  });
};

module.exports = { withAuth, signToken };