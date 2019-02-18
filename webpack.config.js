
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

   const isProduction = env === 'production' ? true : false

   const CSSExtract = new ExtractTextPlugin({
      filename: '[name].css'
   });
   
   return {
      entry: './src/app.js',
      output: {
         path: path.join(__dirname, 'public'),
         filename: 'bundle.js'
      },
      module: {
         rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         }, {
            test:/\.scss$/,
            use: CSSExtract.extract({
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        sourceMap: true
                     }
                  },
                  {
                     loader: "postcss-loader",
                     options: {
                        sourceMap: true
                     }
                  },
                  {
                     loader:'sass-loader',
                     options: {
                        sourceMap: true
                     }
                  }
               ]
            })
         }, {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
               },
               "css-loader"
            ]
          }]
      },
      plugins: [
         new MiniCssExtractPlugin({
           // Options similar to the same options in webpackOptions.output
           // both options are optional
           filename: "[name].css",
           chunkFilename: "[id].css"
         })
      ],
      devServer: {
         contentBase: path.join(__dirname, 'public'),
         historyApiFallback: true
      },
      devtool: 'cheap-module-eval-source-map'
   }
}