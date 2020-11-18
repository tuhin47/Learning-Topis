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
    repo: "https://github.com/tuhin47/Learning-Topis",
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
            path: "/",
            children: [
              "docs/pattern/singleton-design-pattern.md",
              "docs/pattern/factory-design-pattern.md",
              "docs/pattern/builder-design-pattern.md",
              "docs/pattern/prototype-design-pattern.md",
            ],
          },
          {
            title: "Structural Design", // required
            path: "/",
            children: [
              "docs/pattern/adapter-design-pattern.md",
              "docs/pattern/composite-design-pattern.md",
            ],
          },
        ],
      },
      {
        title:'System Design',
        path:"/docs/system-design/system-design",
        children: [
          "docs/system-design/load_balancing",
          "docs/system-design/sharding",
          "docs/system-design/acid_vs_base",
          "docs/system-design/hashing",
          "docs/system-design/nosql_database",
          "docs/system-design/mvc_design_pattern"
        ]
      },
      ["/docs/more/more-topic", "More Topics Java"],
      ["/docs/sql-learning/sql-learning-links","Sql Learning Links"]
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
