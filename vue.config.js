const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir:'docs',
    publicPath:'/buchet_blog',
    transpileDependencies: ['vue-meta'],
    lintOnSave:false
})
