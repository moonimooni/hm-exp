const config = require('./config');

process.env.VUE_APP_CONFIG = JSON.stringify({
  baseUrl: config.web.baseUrl,
  apiUrl: config.api.baseUrl + '/api',
});

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Vue.js + Express',
      favicon: `public/favicon.ico`,
    },
  },
  chainWebpack: (webpackConfig) => {
    webpackConfig.output
      .filename(`js/[name].[hash:8].js`)
      .chunkFilename(`js/[name].[hash:8].js`);
    webpackConfig
      .plugin('stylelint-webpack-plugin')
      .use('stylelint-webpack-plugin')
      .tap((options) => {
        options[0] = {
          fix: true,
          files: '**/*.(s(c|a)ss|css|vue)',
        };
        return options;
      });
  },
  devServer: {
    publicPath: '/',
    progress: false,
    disableHostCheck: true,
    port: config.web.port,
    proxy: {
      '/api': {
        target: config.api.baseUrl,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
