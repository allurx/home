/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
    globalIgnores(["dist/", "node_modules/", ".wrangler/", ".vite/", "work/"]),
    eslint.configs.recommended,
    {
        files: ["**/*.ts", "*.mjs", "public/**/*.js"],
        extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // TypeScript 同时检查 TS 与 JS，并按各自配置识别运行环境的全局名称。
            "no-undef": "off",
            // 数值可直接用于界面文案和尺寸插值。
            "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
            // DOM 查询允许调用方指定元素类型。
            "@typescript-eslint/no-unnecessary-type-parameters": "off",
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],
            "@typescript-eslint/no-import-type-side-effects": "error",
        },
    },
    {
        files: ["*.mjs"],
        rules: {
            // 第三方类型可能包含 DOM 声明，构建配置仍只能使用 Node.js API。
            "no-restricted-globals": [
                "error",
                {
                    globals: [
                        "window",
                        "document",
                        "HTMLElement",
                        "Element",
                        "customElements",
                        "location",
                        "history",
                        "localStorage",
                        "sessionStorage",
                        "matchMedia",
                        "getComputedStyle",
                        "requestAnimationFrame",
                        "cancelAnimationFrame",
                    ],
                    checkGlobalObject: true,
                },
            ],
        },
    }
);
