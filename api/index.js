// module.exports = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   };
// import _ from 'lodash';
import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
  
const app = express();

// 一行搞定所有 CORS 和 OPTIONS 预检
app.use(cors());

app.use('/', createProxyMiddleware({//https://raw.gitmirror/hello-world-1989/cn-news/main/end-gfw-together
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
// Vercel 用 export default，本地用 app.listen
export default app;
// app.listen(3000, () => console.log('http://localhost:3000'));
// export default function handler(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write("aaaaaaaaaaaaaaaa\n");
//     res.write("7");
//     // res.end("wwwwwwwwwwwwwwwwwwwwww");
//     res.end(String(_.add(1, 2)));
//   }