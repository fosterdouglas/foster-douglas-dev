const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
