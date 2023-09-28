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