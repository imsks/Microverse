const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  // ... rest of config
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new webpack.container.ModuleFederationPlugin({
      name: 'host',
      remotes: {},
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ]
};