var webpack = require('webpack');
var path = require('path');

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
        modulesDirectories: ['node_modules', 'bower_components']
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        )
    ]
};

module.exports = webpackConfig;
