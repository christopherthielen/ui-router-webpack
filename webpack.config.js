var webpack = require('webpack');

var webpackConfig = {
    entry: { "app": "./index", },

    output: {
        filename: "[name].min.js",
        libraryTarget: "umd",
        library: "app",
    },

//    module: {
//        rules: [
//            {test: /\.js$/, loader: "babel-loader",  exclude: /\/(node_modules|vendors)/, query: { presets: ['es2015']} },
//        ]
//    },


    resolve: {
        modules: [
            'node_modules'
        ],
    }
};

module.exports = webpackConfig;
