import merge from 'webpack-merge';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

import baseConfig from './webpack.config.base.babel';
import { resolve } from './utils';

const developmentConfig = merge(baseConfig, {
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    port: 8080, // Defaults to 8080
    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: false
    },
    // 配合 FriendlyErrorsWebpackPlugin, 只展示 Friendly 处理后的
    quiet: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.pcss$/,
        exclude: resolve('node_modules'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
});

export default developmentConfig;