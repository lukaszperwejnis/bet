const path = require("path");

module.exports = {
  entry: "./src/components",
  target: "web",
  mode: "development",
  // output: {
    // path: path.resolve(__dirname, "dist"),
    // libraryTarget: "commonjs2"

    // filename: "bundle.js",
    // publicPath: "/",
  // },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs'
  },

  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=5000",
      },
    ],
  },
};
