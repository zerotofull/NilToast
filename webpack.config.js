const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  plugins: [
    //...
    new MiniCssExtractPlugin({ 
      filename: 'toast.min.css',
    }),
  ],
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'toast.min.js',
    library: 'NilToast',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.scss$/, //test: /\.(sa|sc|c)ss$/,
        //include: [path.resolve(__dirname, 'src')],   // 限制打包范围，提高打包速度
        //exclude: /node_modules/,                     // 排除node_modules文件夹
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../', //img图片路径
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // devtool: "inline-source-map"
}

module.exports = [config]
