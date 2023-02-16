const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir:'docs',
  publicPath:'/buchet_vue',
  transpileDependencies: true,
  lintOnSave:false
})
