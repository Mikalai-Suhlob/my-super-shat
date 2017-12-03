const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const sass = new ExtractTextPlugin('app.css', {
    allChunks: true
});

webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './src/app.tsx'
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react', 'stage-0', 'stage-1']
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: sass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        sass
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
module.exports = webpackConfig;