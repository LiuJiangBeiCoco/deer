const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
// 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
// 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
const BASE_URL = process.env.NODE_ENV === 'production' ? '/my-app/' : '/'
module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('assets', resolve('src/assets'))
  },
  // 打包不产生map文件
  productionSourceMap: false,
  // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
  // 你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 
  // devServer.proxy 选项来配置。
  // 例如在本地开一个node服务，默认端口是3000而本地前端端口是8080，那么请求api/user/collectedBook
  // 那么由于端口不同存在跨域，就不允许请求，所以用proxy代理http://localhost:3000,就会把所有请求代理到该服务
  // http://localhost:3000/api/user/collectedBook
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
