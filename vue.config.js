const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir:'docs',
    publicPath:'/buchet',
    transpileDependencies: ['vue-meta'],
    lintOnSave:false
})
