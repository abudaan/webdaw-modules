/* eslint @typescript-eslint/no-var-requires: 0 */

const path = require("path");
const webpack = require("webpack");
// const { browser } = require("process");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    // "basic/index": "./basic/index.ts",
    // "basic2/index": "./basic2/index.ts",
    // "musicxml/index": "./musicxml/index.ts",
    // "scoreviewer/index": "./scoreviewer/index.ts",
    // "scoreviewer2/index": "./scoreviewer2/index.ts",
    "scoreviewer3/index": "./scoreviewer3/index.ts",
  },
  devtool: "inline-source-map",
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // modules: ["node_modules", path.resolve(__dirname, "src")],
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "stylus-loader" }, // compiles Styl to CSS
        ],
      },
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
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
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
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
    }),
  ],
  output: {
    filename: "[name].js",
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
