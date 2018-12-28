const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const files = glob.sync('**/*.jsx').map(function (filename) { return path.normalize(filename)});

const entries = {};
for(let filename of files) {
    entries[filename.replace('.jsx', '')] = path.join(__dirname, filename);
}
console.log(entries);


module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    devtool: 'eval-source-map',
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
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin()
    ],
    devServer: {
        contentBase: __dirname,
        host: 'localhost',
        port: 8000,
        historyApiFallback: true,
    }
};