const {defineConfig} = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

//实现element-plus的自动按需引入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')
process.env.VUE_APP_UPDATE_TIME = time

module.exports = defineConfig({
    lintOnSave: false,
    devServer: {
        port: process.env.VUE_APP_PORT || 7090,
        proxy: process.env.VUE_APP_PROXY === 'false' ? null : {
            "/proxy": {
                // 目标代理服务器地址
                target: "http://localhost:8088/",
                //是否允许跨域
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    "^/proxy": "/"
                }
            }
        },

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
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            })
        ],
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


