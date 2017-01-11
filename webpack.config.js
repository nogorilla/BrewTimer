
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

const DEBUG = true;

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: ["./src/app/main.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    
    loaders: [
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