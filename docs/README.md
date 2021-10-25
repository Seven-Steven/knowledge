## 简介
[**VuePress**](https://vuepress.vuejs.org/zh/) 是一款由 Vue 驱动的静态网站生成器。

本项目 [vuepress-template](https://github.com/Seven-Steven/vuepress-template) 对 VuePress 的诸多插件进行了集成与配置，方便大家更好更快地创建好一个 VuePress 站点。

## 插件
本项目集成了一些 VuePress 常用插件：
- [@vuepress/plugin-active-header-links](https://vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html)
页面滚动时自动激活侧边栏链接的插件。

- [@vuepress/plugin-back-to-top](https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html)
back-to-top。

- [@vuepress/plugin-google-analytics](https://vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html)
Google analytics 插件。

- [@vuepress/plugin-last-updated](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html)
last-update 插件，可以显示文章的上次更新时间。

- [@vuepress/nprogress](https://vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html)
一个基于 nprogress 的进度条插件。

- [@vuepress/plugin-search](https://vuepress.vuejs.org/zh/plugin/official/plugin-search.html)_
基于 [Headers](https://vuepress.vuejs.org/zh/miscellaneous/glossary.html#headers) 的搜索插件。

- [@vuepress/plugin-pwa](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)
PWA 插件。
相关资源：
  - [manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
  - [调试](https://cloud.tencent.com/developer/article/1407619)

- [vuepress-plugin-seo](https://github.com/lorisleiva/vuepress-plugin-seo)
给每一个页面添加 SEO 友好的 header 信息。

- [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)
vuepress sitemap 生成器。
此插件需要在 `package.json` 文件中配置 script 脚本，详情请参考官方文档。

- [vuepress-plugin-zooming](https://vuepress-community.netlify.app/zh/plugins/zooming/)
让你的图片支持点击缩放。

- [markdown-it-plantuml](https://github.com/gmunguia/markdown-it-plantuml)
支持 plantuml。参考: [Vuepress 增加 PlantUML 支持](https://www.wkii.net/Tech/vuepress-add-plantUML-plugin.html)
eg: 
  @startuml
  Bob -> Alice : hello
  @enduml

- [vuepress-plugin-md-enhance](https://www.npmjs.com/package/vuepress-plugin-md-enhance) | [文档](https://vuepress-theme-hope.github.io/md-enhance/zh/)
Markdown 增强插件。支持幻灯片、流程图、任务列表、Tex 语法、上下脚标、Mermaid、自定义对齐等，非常强大。

- [vuepress-plugin-pangu](https://github.com/Shigma/vuepress-plugin-spacing)
自动在中英文内容之间添加空格。

- [vuepress-plugin-img-lazy](https://github.com/tolking/vuepress-plugin-img-lazy)
支持图片懒加载。

---

还有一些看起来还不错但是本项目并未集成的插件：
- [vuepress-plugin-meting](https://github.com/moefyit/vuepress-plugin-meting)
音乐播放列表。

- [vuepress-plugin-ribbon](https://github.com/moefyit/vuepress-plugin-ribbon)
彩带效果(默认主题下兼容性有问题，网页主体会遮挡彩带)。

- [vuepress-plugin-cursor-effects](https://github.com/moefyit/vuepress-plugin-cursor-effects)
鼠标点击效果(默认主题下兼容性有问题，加载此插件会报错)。

- [vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart)
vuepress 流程图插件。[相关语法](https://github.com/adrai/flowchart.js)

- [vuepress-plugin-fulltext-search](https://github.com/leo-buneev/vuepress-plugin-fulltext-search)
vuepress 全文搜索。

- [@mr-hope/vuepress-plugin-comment2](https://www.npmjs.com/package/vuepress-plugin-comment2)
评论插件。

## 相关资料
- [VuePress 官网](https://vuepress.vuejs.org/zh/) 
  VuePress 官方网站，文档全面且详细。如果你想对 VuePress 进行更高级的使用，请阅读官方文档。

- [Awesome VuePress](https://github.com/vuepress/awesome-vuepress)
VuePress 官方收集的精选插件和主题列表。

- [VuePress 社区](https://vuepress-community.netlify.app/zh/)
社区维护的 VuePress 生态系统。