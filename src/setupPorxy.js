const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/buyinhotel', {
            target: 'https://www.buyinhotel.co.kr/',
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/buyinhotel:5000', {
            target: 'https://www.buyinhotel.co.kr/',
            changeOrigin: true
        })
    );
}
