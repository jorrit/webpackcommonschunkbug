var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      deepChildren: true,
      minChunks: (module, count) => {
        return /node_modules/.test(module.resource);
      },
    }),

    new BundleAnalyzerPlugin({
      reportFilename: 'report.html',
      analyzerMode: 'static',
    })
  ]
};
