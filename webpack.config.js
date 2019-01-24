const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/chess.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Components: path.resolve(__dirname, 'src/components'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Actions: path.resolve(__dirname, 'src/actions'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Public: path.resolve(__dirname, 'public'),
      Img: path.resolve(__dirname, 'public/img'),
    }
  }
};
