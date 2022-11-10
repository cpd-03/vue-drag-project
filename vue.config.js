const path = require('path')
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署生产环境和开发环境下的URL：可对当前环境进行区分
  outputDir: 'dist', // 输出文件目录：在npm run build时，生成文件的目录名称
  assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/global.less')]
    }
  },
  // 避免Eslint报错
  // lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    port: 9999,
    proxy: {
      '/lbw': {
        // target: 'https://rsapi.libawall.com',
        target: 'https://testapi.libawall.com', // 后台接口名
        // target: 'http://192.168.1.199',
        // target: 'http://192.168.1.52',
        // target: 'http://192.168.1.61', // 本地联调
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/lbw': ''
        }
      }
    },
    disableHostCheck: true
  }
}
