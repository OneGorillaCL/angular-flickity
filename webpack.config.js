var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var path = require('path');

var libraryName = 'angular-flickity';

var config = {
    entry: {
        'angular-flickity': __dirname + '/src/index.js',
        'angular-flickity.min': __dirname + '/src/index.js',
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loaders: [
                    'ng-annotate',
                    'babel?presets[]=es2015'
                ],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};

module.exports = config;

