var webpack = require('webpack');
var path = require('path');

module.exports = {
    watch: true,
    // devtool: 'source-map',
    entry: {
        'isomorphic-cnode': ['babel-polyfill', './src'],
    },
    output: {
        publicPath: '/isomorphic-cnode',
        path: './client',
        filename: './javascript/index.js',
        chunkFilename: './javascript/[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
        postLoaders: [{
            test: /controller\.jsx?$/,
            loader: 'bundle-loader',
            query: {
                lazy: true,
                name: '[folder]',
            },
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // names: ["app", "subPageA"]
            // (choose the chunks, or omit for all chunks)

            children: true,
            // (select all children of chosen chunks)

            // minChunks: 3,
            // (3 children must share the module before it's moved)
        })
    ],
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
        alias: {
            'create-app': path.join(__dirname, '../create-app/src'),
            'react': 'react-lite',
            'react-dom': 'react-lite',
        }
    }
};
