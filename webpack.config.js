var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

const DEBUG = true;

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: ["./src/app/main.js"],
  output: {
    filename: "app.js"
  },
  module: {
    
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'] 
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: "./src",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
}