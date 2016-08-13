// var path = require('path');
var webpack = require('webpack');
var path = require('path') ;
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output: {
        path: path.resolve('./dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //   template: 'app/index.tpl.html',
        //   inject: 'body',
        //   filename: 'index.html'
        // }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    eslint: {

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets : ['react','es2015','react-hmre']
                }
            }
        ]
    }
};