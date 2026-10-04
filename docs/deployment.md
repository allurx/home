# 部署

本项目通过 GitHub Actions 将构建产物发布到 Cloudflare Workers Static Assets。本地开发与验证见[开发与内容维护](development.md)。

## 首次发布准备

在 GitHub 仓库中创建 `production` Environment，并配置以下字段：

| 类型                 | 名称                    | 内容                                             |
| -------------------- | ----------------------- | ------------------------------------------------ |
| Environment secret   | `CLOUDFLARE_API_TOKEN`  | 可部署目标 Worker 并管理对应域名绑定的 API token |
| Environment variable | `CLOUDFLARE_ACCOUNT_ID` | 目标 Cloudflare 账户 ID                          |

令牌创建及账户 ID 获取方式见 [Cloudflare GitHub Actions 部署指南](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)。将令牌权限限定在需要的账户和域名范围内，不将令牌值写入仓库。

核对账户 ID 以及 [wrangler.jsonc](../wrangler.jsonc) 中的 Worker 和域名配置，并确认 Cloudflare 中的 DNS、[Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) 和重定向规则不会将主域名导向其他站点。

## GitHub Actions 自动部署

[CI 工作流](../.github/workflows/ci.yml) 在 `main` 的推送及以 `main` 为目标的 Pull Request 中运行检查，包括 `verify` 和 Wrangler dry-run。

**向 `main` 推送会触发生产部署。** 部署使用同次检查上传的构建产物；Pull Request 只运行检查。

执行结果可在 GitHub Actions 的 `CI` 工作流和 Cloudflare 控制台中查看；发布后还需访问生产域名，核对主页与作品链接。

## 本地手动部署

先完成[本地环境准备](../README.md#本地预览)和 [Wrangler 身份认证](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/#1-authentication)，再执行：

```sh
npm run verify
npm run deploy
```

`deploy` 会发布当前 `dist/`，不会自动重新构建。
