const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3004,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productFilter',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductFilter': './src/ProductFilter.jsx'
      },
      shared: { react: { singleton: true, eager: true }, 'react-dom': { singleton: true, eager: true } }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};
