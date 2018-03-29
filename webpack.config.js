const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
            {test: /\.jsx$/, use: ['babel-loader']}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app'
        })
    ],
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true
        /* headers: {'Access-Control-Allow-Origin': '*'/!*, 'Access-Control-Expose-Headers': 'token'*!/},
         proxy: [{
             context: ['/!**'],
             target: 'http://localhost:8080',
             changeOrigin: true
         }]*/
    }
};


module.exports = config;