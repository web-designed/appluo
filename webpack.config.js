
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test'){
   console.log(process.env.NODE_ENV)
   require('dotenv').config({ path:'.env.test' })
} else if(process.env.NODE_ENV === 'development'){
   require('dotenv').config({ path:'.env.development' })
}


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
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src')
         }, 
         // {
         //    test:/\.scss$/,
         //    use: CSSExtract.extract({
         //       use: [
         //          {
         //             loader: 'css-loader',
         //             options: {
         //                sourceMap: true
         //             }
         //          },
         //          {
         //             loader: "postcss-loader",
         //             options: {
         //                sourceMap: true
         //             }
         //          },
         //          {
         //             loader:'sass-loader',
         //             options: {
         //                sourceMap: true
         //             }
         //          }
         //       ]
         //    })
         // }, 
         {
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
         }),
         new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
         })
      ],
      devServer: {
         contentBase: path.join(__dirname, 'public'),
         historyApiFallback: true
      },
      devtool: isProduction ? 'source-map' : 'inline-source-map',
   }
}