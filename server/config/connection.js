const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/timecapsuleDB'
);
module.exports = mongoose.connection;

// webpack.config.js
module.exports = {
  // Other webpack config settings...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};