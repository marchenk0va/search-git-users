const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebPackPlugins = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },
    module: {
      rules: [
            {
                test: /\.(ts|js|tsx)$/,
                use: 
                    ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: { loader: "html-loader" }
            },
            {
                test: /\.scss$/,
                use: ["style-loader" , "css-modules-typescript-loader", "css-loader", "sass-loader" ],
            },
            {
                test: /\.(png)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json', '.scss', '.css' ]
    },
    plugins: [htmlWebPackPlugins],
};