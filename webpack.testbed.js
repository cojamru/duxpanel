const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './testbed/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
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
