import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://knowledge.diqigan.cn",
  // 作者信息
  author: {
    name: "小柒",
    url: "https://blog.diqigan.cn",
  },
  // 图标来源
  iconAssets: "iconfont",
  logo: "/assets/logo.png",
  // 黑暗模式下的 LOGO
  logoDark: "/assets/logo.png",
  // Github repo
  repo: "Seven-Steven/knowledge",
  // TODO
  // docsDir: "demo/theme-docs/src",
  // 文章详情页面标题下方的信息
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
  // 自动隐藏侧边栏
  navbarAutoHide: "mobile",
  // 侧边栏是否显示图标
  sidebarIcon: false,
  // 侧边栏嵌套的标题深度
  headerDepth: 3,

  copyright: "Copyright © 2021-present <a href='https://blog.diqigan.cn' target='_blank'>Seven-Steven</a>",
  // 多语言配置
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,

      footer: "我们终将成为自己",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
      // "/zh/demo/encrypt.html": ["1234"],
    },
  },

  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   // provider: "Giscus",
    //   // repo: "vuepress-theme-hope/giscus-discussions",
    //   // repoId: "R_kgDOG_Pt2A",
    //   // category: "Announcements",
    //   // categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   provider: "Waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/assets/logo.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/logo.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/logo.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/logo.png",
            sizes: "300x300",
            purpose: "maskable",
            type: "image/png",
          }
        ],
        shortcuts: [
          {
            name: "Seven's Knowledge",
            short_name: "Knowledge",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    // feed 插件配置
    feed: {
      // 是否启用 rss 格式输出
      rss: true,
      // 是否启用 json 格式输出
      json: false,
      // 是否启用 atom 格式输出
      atom: false,
      // 设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。
      count: 100,
    },

    copyright: {
      hostname: "https://knowledge.diqigan.cn",
      author: "小柒",
      license: "MIT",
      global: true,
    }
  },
});
