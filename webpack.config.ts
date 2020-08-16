const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "public/index.html"),
    filename: "./index.html"
});

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        // What directories should be searched when resolving modules
        modules: [
            'node_modules',
            './src',
        ],
        // Automatically resolve certain extensions (Ex. import 'folder/name(.ext)')
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.css',
            '.scss',
        ],
        alias: {
            "@Root": path.resolve(__dirname, "src"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
               test: /\.s?css$/,
               use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
                use: [
                  { loader: 'url-loader', options: { limit: 10000, name: '[name].[ext]' } },
                  { loader: 'image-webpack-loader', options: { disable: devMode, esModule: false } },
                ],
            },
            // Use url-loader to load font related files
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                { loader: 'url-loader', options: { limit: 10000, name: '[name].[ext]' } },
                ],
            },
            // Use url-loader to load audio related files
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                { loader: 'url-loader', options: { limit: 10000, name: '[name].[ext]' } },
                ],
            },
        ]
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            // https: true
        }
    }
}
