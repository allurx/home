/*
 * Copyright 2026 allurx
 * SPDX-License-Identifier: Apache-2.0
 */

export {};

type Theme = "system" | "light" | "dark";

const labels: Record<Theme, string> = {
    system: "跟随系统",
    light: "浅色",
    dark: "深色",
};
const switcher = document.querySelector<HTMLFieldSetElement>(".theme-switcher");
const options = document.querySelectorAll<HTMLInputElement>('input[name="theme"]');
const status = document.querySelector<HTMLElement>("#theme-status");

if (switcher) {
    // 首次绘制由 theme.js 恢复；原生单选状态明确表达用户选择的偏好。
    const restored = document.documentElement.dataset["theme"];
    const theme = restored === "light" || restored === "dark" ? restored : "system";
    for (const option of options) option.checked = option.value === theme;
    switcher.hidden = false;

    switcher.addEventListener("change", (event) => {
        if (!(event.target instanceof HTMLInputElement)) return;
        const theme = event.target.value;
        if (theme !== "system" && theme !== "light" && theme !== "dark") return;

        if (theme === "system") delete document.documentElement.dataset["theme"];
        else document.documentElement.dataset["theme"] = theme;

        // 浏览器禁止站点存储时，本次页面内的主题切换仍然可用。
        try {
            if (theme === "system") localStorage.removeItem("home-theme");
            else localStorage.setItem("home-theme", theme);
        } catch {
            // 外观偏好是可选持久化，不影响内容和导航。
        }
        if (status) status.textContent = `外观已切换为${labels[theme]}`;
    });
}
