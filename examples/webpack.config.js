/* eslint @typescript-eslint/no-var-requires: 0 */

const path = require("path");

module.exports = {
  entry: {
    "basic/index": "./basic/index.ts",
    "musicxml/index": "./musicxml/index.ts",
  },
  devtool: "inline-source-map",
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // "css-modules-typescript-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //   },
          // },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            onlyCompileBundledFiles: true,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|eot|woff|woff2|ttf|svg|ico)$/,
        loader: "file-loader?name=[name].[ext]",
      },

      // {
      //   test: /\.svg$/,
      //   use: {
      //     loader: "svg-inline-loader",
      //     options: {
      //       publicPath: "/",
      //     },
      //   },
      // },
    ],
  },
  output: {
    // filename: "[name].js",
    path: path.resolve(__dirname),
  },
  devServer: {
    // contentBase: path.join(__dirname, "../", "../", "assets"),
    publicPath: path.join(__dirname),
    compress: false,
    port: 9000,
    hot: true,
    inline: true,
    liveReload: true,
  },
};
