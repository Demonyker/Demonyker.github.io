let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
let conf = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"  
                ]
            },
            {
                test: /\.(jpe?g|gif|jpg|png|svg|woff|ttf|wav|mp3)$/, 
                loader: "file-loader?name=[path][name].[ext]",    
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
};

module.exports = (env, options) => {
    return conf;
}