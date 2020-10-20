const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './website/index.tsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'website/dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        new CopyWebpackPlugin({
            patterns: [
                { from: './website/build/index.html', flatten: true },
                { from: './website/build/styles.css', flatten: true },
                { from: './website/build/duxpanel.png', flatten: true },
            ],
        }),
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            {
                test: /(\.ts|\.tsx|\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.website.json'),
                    },
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
