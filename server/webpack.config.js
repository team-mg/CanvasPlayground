const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './app/app.ts'),
    target: 'node',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
        }]
    },
    // devtool: 'source-map',
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js'
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'www/**/*'),
            to: path.resolve(__dirname, 'dist')
        }])
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    }
};