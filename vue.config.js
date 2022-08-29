const {defineConfig} = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')
process.env.VUE_APP_UPDATE_TIME = time

module.exports = defineConfig({
    lintOnSave: false,

  devServer: {
    port: process.env.VUE_APP_PORT || 7090,
/*    proxy: {
      "/api":{
        target:"http://localhost:8088/",
        changeOrigin:true,
        pathRewrite:{
          "^/api" : "/api"
        }
      }
    },*/

    },
    configureWebpack: {

        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {loader: 'html-loader'},
                        {loader: 'markdown-loader', options: {}}
                    ]
                }
            ]
        }

    },
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    }
})


