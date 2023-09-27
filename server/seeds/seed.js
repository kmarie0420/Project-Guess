const mongoose = require('mongoose');
const db = require('../config/connection');

const userSeeds = require('./userSeeds');
//const capsuleSeeds = require('./capsuleSeeds');

db.once('open', async () => {
  try {
    await mongoose.connection.db.dropDatabase();

    await userSeeds();
    await capsuleSeeds();

    console.log('All seeds successful!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});