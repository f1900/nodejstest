// server.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://raw.githubusercontent.com/hello-world-1989/cn-news/main/end-gfw-together', // 目标地址
  changeOrigin: true,                // 修改请求头中的 host cl为目标 host
  // pathRewrite: {
  //   '^/api': '',                     // 去掉 /api 前缀
  // },
  onProxyRes: (proxyRes, req, res) => {
    // 可以在这里修改响应头，比如解决跨域
    proxyRes.headers['access-control-allow-origin'] = '*';
  },
}));

app.listen(3000, () => {
  console.log('代理服务器运行在 http://localhost:3000');
});