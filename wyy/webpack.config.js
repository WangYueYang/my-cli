const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getPath = (url) => path.resolve(__dirname, url)
const DIST_PATH = getPath('dist')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].[hash:5].js',
    path: DIST_PATH,
    publicPath: '/',  //解决静态资源404问题
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 8082,
    historyApiFallback: true, //解决： React-Router 刷新后报错 or Cannot GET /detail
  },
  resolve: {
    alias: {
      components: getPath('src/components/'),
      pages: getPath('src/pages'),
      server: getPath('src/server'),
      assets: getPath('src/assets/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.json'],
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:5].[ext]',
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '[name].[hash:5].[ext]',
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, 
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ts React',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}