const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "main.js"),
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    ],
  },
};
