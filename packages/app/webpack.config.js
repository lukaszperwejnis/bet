const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const inAnalyze = process.env.ANALYZE === 'true';
const getPath = (file) => path.resolve(__dirname, file);

module.exports = (env, args) => {
  const isProduction = args.mode === 'production';

  const config = {
    entry: {
      app: './src/index.tsx',
    },
    output: {
      filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: 'ts-loader',
          include: [getPath('./src')],
          exclude: [getPath('node_modules'), getPath('**/*spec.ts')],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    bail: isProduction,
    optimization: isProduction
      ? {
          runtimeChunk: 'single',
          splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
        }
      : {},
    devtool: !isProduction ? 'source-map' : 'none',
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: true,
        chunksSortMode: 'manual',
        chunks: ['runtime', 'vendors', 'app'],
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : undefined,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].css',
      }),
      new CopyWebpackPlugin([
        {
          from: 'public',
          ignore: ['index.html'],
        },
      ]),
    ]
      .concat(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()])
      .concat(inAnalyze ? [new BundleAnalyzerPlugin()] : []),
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 4200,
      hot: true,
      inline: true,
      writeToDisk: true,
      historyApiFallback: true,
    },
  };

  return config;
};
