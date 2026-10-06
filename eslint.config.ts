/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, globalIgnores } from "eslint/config";
import base, { browser, node, typeChecked } from "@allurx/web-foundation/eslint";

export default defineConfig(
    globalIgnores(["dist/", ".wrangler/", ".vite/", "work/"]),
    base,
    {
        files: ["src/**/*.ts", "public/**/*.js", "*.ts"],
        extends: [typeChecked],
        languageOptions: {
            parserOptions: { tsconfigRootDir: import.meta.dirname },
        },
    },
    { files: ["src/**/*.ts", "public/**/*.js"], extends: [browser] },
    { files: ["*.ts"], extends: [node] }
);
