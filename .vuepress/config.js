const { description } = require("../package");
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Learn Topics",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://tuhin47.github.io/Portfolio/",
    docsDir: "/",
    lastUpdated: true,
    // displayAllHeaders: true,
    // activeHeaderLinks: false, // Default: true
    nav: [
      {
        text: "Portfoilo",
        link: "https://tuhin47.github.io/Portfolio/",
      },
    ],
    sidebar: [
      {
        title: "Java Design Patterns", // required
        path: "/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2, // optional, defaults to 1
        children: [
          {
            title:"Introduction",
            path: "/",
          },
          {
            title: "Creational Design", // required
            path: "/#a-creational-design-pattern",
            children: [
              "docs/pattern/Singleton-Design-Pattern.md",
              "docs/pattern/Factory-Design-Pattern.md",
              "docs/pattern/Builder-Design-Pattern.md",
              "docs/pattern/Prototype-Design-Pattern.md",
            ],
          },
          {
            title: "Structual Design", // required
            path: "#b-structural-design-patterns",
            children: [
              "docs/pattern/Adapter-Design-Pattern.md",
              "docs/pattern/Composite-Design-Pattern.md",
            ],
          },
        ],
      },
      {
        title:'System Design',
        path:"/docs/system-design/sytem-design",
        children: [
          "/docs/system-design/horizontal-vs-vertical-scaling",
          "/docs/system-design/nosql_database",
        ]
      },
      ["/docs/more/more-topic", "More Topics Java"],
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
