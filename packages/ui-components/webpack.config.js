const path = require('path');

module.exports = {
  entry: './src/components',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/components',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   loader: "ts-loader",
      // },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                [
                  '@babel/preset-react',
                  { flow: false, typescript: true, runtime: 'automatic' },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=5000',
      },
    ],
  },
};
