'use strict'
module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://localhost:8084',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false,
}

