const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src/'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './src/'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
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
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /(\.ts|\.tsx|\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                },
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
