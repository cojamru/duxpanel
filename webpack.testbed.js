const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './testbed/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'testbed/build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        inline: true,
        contentBase: './testbed/build',
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /(\.ts|\.tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
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
    plugins: [new CopyWebpackPlugin([{ from: 'src/duxpanel.css', to: 'duxpanel.css', flatten: true }])],
};
