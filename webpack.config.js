var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// detect build mode from environment
var buildMode = process.env.BUILD_MODE;

if (['jit', 'aot'].indexOf(buildMode) < 0) {
  buildMode = 'jit';
}

var mainPath = buildMode === 'jit'
  ? './src/main.browser.ts'
  : './src/main.browser.aot.ts';

// Webpack Config
var webpackConfig = {
  entry: {
    'main': mainPath,
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, './src'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};

if (buildMode === 'aot') {
  // Minimize scripts
  var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    // to debug production build, uncomment lines in [debug] section and comment lines in [prod] section

    // Settings for production build
    beautify: false,
    // To disable mangling for any reason, replace with:
    // mangle: false,
    mangle: {
      screw_ie8 : true,
      keep_fnames: true,
    },
    comments: false,
    compress: {
      warnings: false,
      screw_ie8: true,
      drop_debugger: true,
      drop_console: false,
      dead_code: true,
    },
  });

  webpackConfig.plugins.push(uglifyPlugin);

  // Until loaders are updated, use the LoaderOptionsPlugin to pass custom properties to third-party loaders
  var optionsPlugin = new webpack.LoaderOptionsPlugin({
    // (For UglifyJsPlugin) Put loaders into minimize mode
    minimize: true,
    debug: false,
  });

  webpackConfig.plugins.push(optionsPlugin);
}


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    stats: { chunks: false },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};


module.exports = webpackMerge(defaultConfig, webpackConfig);
