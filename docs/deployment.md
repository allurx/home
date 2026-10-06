# 部署

本项目使用 [Web Foundation 的共享工作流](https://github.com/allurx/web-foundation/blob/main/docs/deployment.md)，通过 GitHub Actions 将构建产物发布到 Cloudflare Workers Static Assets。本地开发与验证见[开发与内容维护](development.md)。

## 首次发布准备

按[共享部署说明](https://github.com/allurx/web-foundation/blob/main/docs/deployment.md#保存部署凭据)配置 `production` Environment 中的 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID`，仅允许 `main` 使用该环境。

核对账户 ID 以及 [wrangler.jsonc](../wrangler.jsonc) 中的 Worker 和域名配置，并确认 Cloudflare 中的 DNS、[Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) 和重定向规则不会将主域名导向其他站点。

## GitHub Actions 自动部署

[CI 工作流](../.github/workflows/ci.yml) 在 `main` 的推送及以 `main` 为目标的 Pull Request 中运行检查，包括 `verify` 和 Wrangler dry-run。

**向 `main` 推送会触发生产部署。** 部署使用同次检查上传的 `dist/` 构建产物；Pull Request 只运行检查。执行结果可在 GitHub Actions 的 `site / verify`、`site / deploy` 和 Cloudflare 控制台中查看，结果核对步骤见[共享部署说明](https://github.com/allurx/web-foundation/blob/main/docs/deployment.md#确认部署结果)。发布后访问 `https://allurx.io`，核对主页与作品链接。

包的版本标签与共享工作流 SHA 须对应同次发布；更新方法见 [Web Foundation 的依赖说明](https://github.com/allurx/web-foundation/blob/main/docs/dependencies.md#基础包和工作流怎样升级)。

## 本地手动部署

先完成[本地环境准备](../README.md#本地预览)和 [Wrangler 身份认证](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/#1-authentication)，再执行：

```sh
npm run verify
npm run deploy
```

`deploy` 会发布当前 `dist/`，不会自动重新构建。
