import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "dist",
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小柒的个人知识库",
      description: "小柒的个人知识库",
      head: [
        ['link', { rel: 'icon', href: '/assets/logo.png' }],
        ['link', { rel: 'manifest', href: '/assets/pwa/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/logo.png', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
      ],
    },
  },
  // 是否在开发服务器启动后打开浏览器。
  open: false,
  // 主题配置
  theme,
  shouldPrefetch: false,
});
