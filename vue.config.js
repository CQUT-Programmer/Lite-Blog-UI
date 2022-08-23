const { defineConfig } = require('@vue/cli-service')
const path  = require('path')

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

  },
  configureWebpack() {
    return {
    }
  }
})


