const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/buyinhotel', {
            target: 'https://www.buyinhotel.co.kr',
            changeOrigin: true,
            onProxyReq(proxyReq, req, res) {
                proxyReq.setHeader('Origin','http://localhost:3000')
            },
        
        })
    );
}
