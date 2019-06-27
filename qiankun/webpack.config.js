const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const url = 'http://192.168.8.92:8081';

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        // library: 'qiankun',
        // libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        //无法响应的路由都会重定向到首页
        historyApiFallback: true,
        port: 7098,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            "api": {
                target: 'http://localhost:3000'
            },
            '/ares': {
                target: url,
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 512
            //         }
            //     }],
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}