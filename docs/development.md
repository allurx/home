# 开发与内容维护

本地环境和启动步骤见 [README 的本地预览](../README.md#本地预览)。工程只维护 `main` 分支，开发与发布都使用该分支。

工具版本及 ESLint、Prettier、TypeScript、Vite 通用配置由 [Web Foundation](https://github.com/allurx/web-foundation) 统一维护。工程保留自己的源码范围、许可证构建插件和部署目标；工具升级通过更新基础包及锁文件完成，参见[依赖与更新](https://github.com/allurx/web-foundation/blob/main/docs/dependencies.md)。

## 检查与构建产物预览

完成修改后，运行完整检查和构建，再通过 Wrangler 预览构建产物：

```sh
npm run verify
npm run preview
```

`verify` 执行 `build`，其中包含格式、ESLint、TypeScript 检查和 Vite 生产构建。`preview` 读取 `dist/`，用于检查 Cloudflare 静态资源；修改源码后需要重新构建。其他命令见 [package.json](../package.json)。

本地开发和预览不需要生产凭据。向 `main` 推送会触发生产部署，推送前应完成验证并核对[部署准备](deployment.md#首次发布准备)。

## 内容与资源位置

| 文件或目录                                        | 用途                                 |
| ------------------------------------------------- | ------------------------------------ |
| [index.html](../index.html)                       | 个人介绍、作品入口和搜索及分享元信息 |
| [src/styles.css](../src/styles.css)               | 页面布局、视觉样式与主题适配         |
| [src/main.ts](../src/main.ts)                     | 页面交互与主题切换                   |
| [public/theme.js](../public/theme.js)             | 首次绘制前恢复已保存的主题偏好       |
| [public/icons/](../public/icons/)                 | 界面 SVG 图标集合与 favicon          |
| [public/illustrations/](../public/illustrations/) | 首屏轨道与作品插画                   |
| [public/](../public/)                             | 分享图片、搜索引擎文件和响应头配置   |
| [vite.config.ts](../vite.config.ts)               | Vite 构建配置                        |
| [wrangler.jsonc](../wrangler.jsonc)               | Worker、静态资源和生产域名配置       |

新增作品时，在 `index.html` 中维护名称、说明和真实链接。主要内容直接存在于 HTML 中，关闭 JavaScript 后仍可阅读并访问作品；脚本只增强交互。
