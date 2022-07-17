const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:21404';

// 差し替えURLの接頭辞
const apiContext = [
    "/api/",
];

// 差し替えURLの接頭辞
const webSocketContext = [
    "/api/ws/",
];

module.exports = function (app) {

    app.use(createProxyMiddleware(
        webSocketContext,
        {
            target: target,
            secure: false,
            changeOrigin: true,
            ws: true,
        }
    ));

    app.use(createProxyMiddleware(
        apiContext,
        {
            target: target,
            secure: false,
            headers: {
                Connection: 'Keep-Alive'
            }
        }
    ));
};
