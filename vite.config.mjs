/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
    appType: "mpa",
    build: {
        // 页面只有一个交互入口，无需为预加载安装额外的浏览器观察器。
        modulePreload: { polyfill: false },
    },
    plugins: [
        {
            name: "home:license",
            /**
             * 根目录是许可证的唯一维护源，构建时随静态文件交付。
             */
            generateBundle() {
                this.emitFile({
                    type: "asset",
                    fileName: "LICENSE.txt",
                    source: readFileSync(new URL("./LICENSE.txt", import.meta.url), "utf8"),
                });
            },
        },
    ],
});
