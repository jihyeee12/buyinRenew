const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
        
        createProxyMiddleware('/test', {
            target: 'https://www.buyinhotel.co.kr/',
            changeOrigin: true
        })
    );
}
