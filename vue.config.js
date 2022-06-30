const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    proxyTable: {
        '/': {
            target: 'http://127.0.0.1:8000/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
})