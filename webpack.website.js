const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './website/index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'website/build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        inline: true,
        contentBase: './website/build',
        port: 3000,
        historyApiFallback: true,
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
                loader: 'style-loader!css-loader',
            },
            {
                test: /(\.html|\.txt)$/,
                loader: 'raw-loader',
            },
        ],
    },
    plugins: [new CopyWebpackPlugin({ patterns: [{ from: 'src/duxpanel.css', to: 'duxpanel.css', flatten: true }] })],
};
