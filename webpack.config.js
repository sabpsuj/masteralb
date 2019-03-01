const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/script/main.js",
  output: {
    filename: "out.js"
  },
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    url: false
                },
            },
            {
                loader: 'sass-loader'
            }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'main.css'
    }),
],
}