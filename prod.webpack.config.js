const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./src/app/index.js'],
  mode: 'production',
  output: {
    path: path.join(process.cwd(), './src/server/public'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            compact: false
          }
        }
      },
      {
        test: /\.css|.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [require('nib')(), require('rupture')()],
              import: ['~nib/lib/nib/index.styl', '~rupture/rupture/index.styl']
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'styl'],
    modules: ['node_modules'],
    alias: { styles: path.resolve(__dirname, 'src/client/stylus/') },
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(chunk => {
              return chunk.name === 'main' && /[\\/]node_modules[\\/]/.test(name);
            });
          },
        },
      },
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new TransferWebpackPlugin([
      { from: 'client' },
    ], path.resolve(__dirname, 'src')),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      asset: '[path].gz'
    })
  ],
}
