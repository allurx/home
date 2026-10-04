# Home 项目约束

## 开发与交付

- 工程只维护 `main`，开发与发布都使用该分支。推送前完成集成验证；向 `main` 推送会触发生产部署，操作授权必须覆盖这一实际副作用。
- 开发入口、验证与内容维护见[开发说明](docs/development.md)，发布准备和执行见[部署说明](docs/deployment.md)。具体命令与 CI 行为分别以 [package.json](package.json) 和 [CI 工作流](.github/workflows/ci.yml) 为准。
- 个人信息、作品能力、联系方式与上线状态必须有用户输入或实际证据，不虚构内容。配置完成、本地预览和构建通过不能表述为生产已上线；发布结论需核对工作流、Cloudflare 部署结果与实际生产访问。
- 新增源码按文件语言使用简短版权头 `Copyright (c) 2026 allurx`，保留已有准确的归属信息。许可证由根目录 [LICENSE.txt](LICENSE.txt) 维护。

## 页面与主题

- 介绍和作品入口以 [index.html](index.html) 为唯一内容来源，主要内容和真实链接直接存在于 HTML 中。脚本采用渐进增强，不能使阅读与导航依赖 JavaScript 执行。
- 页面视觉样式留在 [src/styles.css](src/styles.css)。同一对象的状态、子元素和局部响应式规则使用原生 CSS 浅嵌套，就近组织；跨多个对象的响应式变化放在对应布局规则组，避免为嵌套而增加选择器层级。
- 主题行为同时涉及 [public/theme.js](public/theme.js)、[src/main.ts](src/main.ts) 和样式文件。修改时保留首次绘制前恢复偏好、跟随系统、浅色与深色切换，以及存储不可用时页面内仍可切换的行为。
- 不用 SPA fallback 将未知路径作为首页返回。
