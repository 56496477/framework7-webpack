var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var __f7Path = __dirname + '/node_modules/framework7/dist';
var ROOT_PATH = path.resolve(__dirname);
var TEM_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {

  entry: {
      app: ['./src/app/index.js']
  },

  output: {
    path: __dirname + '/dist/',
    filename: 'app.js'
  },

  // f7 alias
  resolve: {
    alias: {
        'framework7': __f7Path + '/js/framework7.min.js',
        'framework7.ios.css': __f7Path + '/css/framework7.ios.min.css',
        'framework7.ios.color.css': __f7Path + '/css/framework7.ios.colors.min.css'
    }
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },

  module: {
    loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
        {test: /\.scss$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!sass-loader!autoprefixer-loader')},
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        {test: /\.html$/, loader: 'html'},
        {test: /\.png$/, loaders: ['file-loader?name=img/[name].[ext]','url?limit=8192&mimetype=image/png']},
        {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
        {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true
      }),
       new HtmlwebpackPlugin({
        template: path.resolve(TEM_PATH, 'index.html'),
        filename: 'index.html',
      })
  ]
}
