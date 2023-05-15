const { createProxyMiddleWare } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/hello',
        createProxyMiddleWare({
            target: 'http://localhost:8080', //서버 URL or localhost:설정한_포트번호
            changeOrigin: true,
        })
    );
};