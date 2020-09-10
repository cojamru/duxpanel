const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const SrcPath = path.resolve(__dirname, './src/');
const Files = [];

fs.readdirSync(SrcPath).forEach(fileName => {
    if (fileName.endsWith('.jsx') || fileName.endsWith('.js')) {
        Files.push(path.join(SrcPath, fileName));
    }
});

module.exports = {
    entry: Files,
    mode: 'development',
    devtool: 'hidden-source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'duxpanel.css',
        }),
        new OptimizeCSSAssetsPlugin({}),
        new CopyWebpackPlugin({ patterns: [{ from: 'src/duxpanel.css', to: 'duxpanel.css', flatten: true }] }),
    ],
    optimization: {
        usedExports: true,
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
