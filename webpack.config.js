const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const sourceDir = './src/'

module.exports = {
  entry: `${sourceDir}index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'reveal.js',
  },
  resolve: {
    alias: {
      "../../lib/font": path.resolve(__dirname, 'lib/font'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${sourceDir}index.ejs`,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: `${sourceDir}demo.ejs`,
      minify: true,
      filename: 'demo.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s?)[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    progress: true,
  },
};
