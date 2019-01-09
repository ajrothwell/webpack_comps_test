const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    app: ['./public/index.html', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
      // cacheGroups: {
      //   vendor: {
      //     test: /node_modules/,
      //     chunks: 'initial',
      //     name: 'vendor',
      //     enforce: true,
      //     priority: 5,
      //   },
      //   rollup_vue: {
      //     test: /rollup_vue/,
      //     chunks: 'initial',
      //     name: 'rollup_vue',
      //     priority: 10,
      //   },
      // }
    }
  }
};
