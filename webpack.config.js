// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const EXAMPLE_PATH = path.resolve(__dirname, 'example');

module.exports = {
    // Source Maps("source-map|cheap-module-source-map|eval-source-map|cheap-module-eval-source-map")
    devtool: 'source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'ErrorHandler.js')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    SRC_PATH
                ],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
            },
            beautify: true,
            comments: true,
            mangle: false
        }),
        new webpack.BannerPlugin('Copyright © 2017 by Chyrain. All rights reserved.')
    ]
}