const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const OutputPath = path.resolve(__dirname, 'website/dist');

module.exports = {
    entry: './website/index.tsx',
    mode: 'production',
    output: {
        path: OutputPath,
        filename: '[name].bundle.js',
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
        new RemovePlugin({
            before: {
                include: [OutputPath],
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
        splitChunks: {
            chunks: 'all',
        },
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
