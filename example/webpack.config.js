// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    // Source Maps("source-map|cheap-module-source-map|eval-source-map|cheap-module-eval-source-map")
    devtool: 'cheap-module-source-map',
    entry: {
        webpack: ['webpack-dev-server/client?http://0.0.0.0:8080',
				  'webpack/hot/only-dev-server'],
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    SRC_PATH
                ],
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
        }),
        new OpenBrowserPlugin({url: ('http://localhost:8080')}),
        new webpack.BannerPlugin('Copyright © 2017 by Chyrain. All rights reserved.'),
        new HtmlwebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
			filename: 'index.html',
			inject: 'body'
		})
    ]
}