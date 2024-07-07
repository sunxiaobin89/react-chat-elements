const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// require("tailwindcss")
const path = require("path");

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    main: path.resolve(__dirname, './example/index.tsx'),
  },
  devServer: {
    hot: true,
    port: 8090,
    headers: { "Access-Control-Allow-Origin": "*" },
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10,  // 1024b * n = ? kb 限制内转base64
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[fullhash].css",
      chunkFilename: "chunks/[id].chunk.[fullhash].css"
    })
  ],
  stats: {
    children: true,
    errorDetails: true
  },
};
