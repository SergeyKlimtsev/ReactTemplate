const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const template = require('html-webpack-template');
const path = require('path');


const styleFileName = 'style.css';
const config = {
    entry: {
        app: './src/App/App.jsx'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: ['babel-loader']},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template,
            appMountId: 'app',
            links: [
                {
                    href: styleFileName,
                    rel: 'stylesheet'
                }
            ]
        }),
        new MiniCssExtractPlugin({filename: styleFileName})
    ],
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        proxy: {
            "/data**": {
                target: "http://localhost:4730",
                secure: false,
                pathRewrite: {
                    '^/data': ''
                }
            }
        }
    }
};


module.exports = config;