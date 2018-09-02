const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nib = require('nib');
const rupture = require('rupture');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/app/index.js'],
  mode: 'production',
  output: {
    path: path.join(process.cwd(), './src/server/public'),
    filename: 'main.[hash].js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          }, 'stylus-loader']
        }),
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
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        cache: true,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'vendor.[hash].js',
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
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        stylus: {
          use: [nib(), rupture()],
          import: [
            '~nib/lib/nib/index.styl',
            '~rupture/rupture/index.styl',
          ],
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[hash].css', { allChunks: true }),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      asset: '[path].gz'
    }),
    new ManifestPlugin(),
  ],
}
