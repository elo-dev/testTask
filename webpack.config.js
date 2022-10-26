const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

let mode = 'development'

const plugins = [
  new MiniCssExtractPlugin(),
  new HTMLWebpackPlugin({
    title: 'Webpack HTML',
    filename: 'index.html',
    template: path.resolve(__dirname, 'public/index.html'),
  }),
]

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshPlugin())
}

module.exports = {
  entry: './src/index.tsx',
  mode: mode,

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name][contentHash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_[local]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts|x$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins,

  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
}
