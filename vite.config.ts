/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "node:fs";
import { defineConfig, mergeConfig } from "vite";
import base from "@allurx/web-foundation/vite";

export default mergeConfig(
    base,
    defineConfig({
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
    })
);
