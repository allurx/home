/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

// 在样式绘制前恢复外观；不支持脚本或存储时由 CSS 跟随系统。
try {
    const theme = localStorage.getItem("home-theme");
    if (theme === "light" || theme === "dark") document.documentElement.dataset["theme"] = theme;
} catch {
    // 浏览器可以禁用站点存储，系统主题仍然可用。
}
