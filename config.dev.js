const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  //module
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    compress: true,
    port: 3500,
  },
};
