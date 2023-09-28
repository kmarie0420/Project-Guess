const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/timecapsuleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected!');
});
module.exports = db;

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
module.exports = { typeDefs, resolvers };









