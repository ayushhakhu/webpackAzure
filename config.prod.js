const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  //module
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};
