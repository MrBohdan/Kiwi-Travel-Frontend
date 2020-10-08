const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'main/index': './src/index.js',
        'admin/adminPage': './src/AdminPage.js',
        'login/login': './src/login.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../src/main/resources/static/built/'),
        chunkFilename: 'chunks/[name].[chunkhash].chunk.js',
        publicPath: "/built/"
    },
    cache: true,
    mode: 'development',
    devtool: 'sourcemaps',
    module: {
        rules: [
            {
                test: /\.(mjs|js|jsx|scss|ico)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'postcss-loader', // Run post css actions
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ['@babel/plugin-proposal-class-properties'],
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' }, // inject CSS to page
                    { loader: 'css-loader' }, // translates CSS into CommonJS modules
                    { loader: 'sass-loader' }, // compiles Sass to CSS
                ],
            },
            {
                test: /\.(mov|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[sha512:hash:base64:10].video.[ext]',
                            outputPath: 'assets/',
                            publicPath: 'built/assets/',
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[sha512:hash:base64:10].[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: 'built/assets/',
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new WebpackAssetsManifest({
            // Options go here
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/favicon.ico', to: 'public' },
                { from: 'public/logo2.png', to: 'public' },
                { from: 'public/manifest.json', to: 'public' },
            ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
