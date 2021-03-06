const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './website/index.jsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './website/dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'duxpanel.css',
        }),
        new OptimizeCSSAssetsPlugin({}),
        new CopyWebpackPlugin({
            patterns: [
                { from: './website/build/index.html', flatten: true },
                { from: './website/build/styles.css', flatten: true },
                { from: './website/build/duxpanel.png', flatten: true },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                test: /(\.html|\.txt)$/,
                loader: 'raw-loader',
                exclude: /(mindex.html)/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
        ],
    },
};
