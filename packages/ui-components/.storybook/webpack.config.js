module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['@babel/preset-react', {flow: false, typescript: true, runtime: 'automatic'}], '@babel/preset-typescript'],
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
