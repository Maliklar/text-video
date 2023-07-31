const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/scripts/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",

  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      hot: true,
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    host: "localhost",
    hot: true,
    open: true,
  },
};
