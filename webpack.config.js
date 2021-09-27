const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "main.js")
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          }
        ]
      }
    ]
  }
}
