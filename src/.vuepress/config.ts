import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/YockNav/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Yock",
      description: "Yock official docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Yock",
      description: "Yock 官方文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
