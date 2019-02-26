const webpack = require('webpack');

const path = require('path');
const glob = require('glob');

const files = glob.sync('**/*.jsx').map(function (filename) { return path.normalize(filename) });

const entries = {};
for(let filename of files) {
    entries[filename.replace('.jsx', '')] = path.join(__dirname, filename);
}


module.exports = {
    mode: 'production',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".mjs", ".js", ".jsx", ".json"]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin()
    ],
};