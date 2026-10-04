# Home

Allurx 的个人主页与作品入口。目标域名为 `allurx.io`。

页面使用 HTML、CSS 和 TypeScript，由 [Vite](https://vite.dev/guide/) 构建为静态文件，通过 [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) 托管。

## 本地预览

使用 [.node-version](.node-version) 指定的 Node.js 版本及其自带的 npm：

```sh
npm ci
npm run dev
```

打开终端输出的本地地址。修改页面内容和样式后，开发服务器会更新预览。

## 文档

- [开发与内容维护](docs/development.md)：检查、构建产物预览、页面内容和资源位置。
- [部署](docs/deployment.md)：首次发布准备、GitHub Actions 自动部署和本地手动部署。

## 许可证

本项目采用 [Apache License 2.0](LICENSE.txt)。
