const { User } = require('../models');

const userData = [
  {
    username: 'guyone',
    email: 'guyone@example.com',
    password: 'password1234',
  },
  {
    username: 'girlone',
    email: 'girlone@example.com',
    password: 'password1234',
  },

];

module.exports = async function seedUsers() {
  try {
    await User.deleteMany({});
    await User.create(userData);
    console.log('User seed successful!');
  } catch (err) {
    console.error(err);
  }
};

