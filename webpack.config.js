module.exports = {
  entry: "./src/script/main.js",
  output: {
    filename: "out.js"
  },
  watch: true,
  devtool: "source-map",
  loader: {
    options: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}