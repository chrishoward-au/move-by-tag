const path = require('path');

module.exports = {
    entry: './main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '.'),
        libraryTarget: 'commonjs',
    },
    target: 'node',
    externals: {
        'obsidian': 'commonjs2 obsidian'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ],
        alias: {
            'obsidian': path.resolve(__dirname, 'node_modules/obsidian')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'source-map',
};
