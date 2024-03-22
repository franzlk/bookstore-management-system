const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8081', // Change this to your Spring Boot backend URL
      changeOrigin: true,
    })
  );
};
