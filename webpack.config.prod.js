const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: ["./client/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist/bundle/`,
    publicPath: "/static/",
  },
  plugins: [
    new DefinePlugin({
      __DEV__: false,
      __PROD__: true,
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
