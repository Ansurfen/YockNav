import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "快速上手",
      icon: "book",
      prefix: "guide/",
      children: [
        "install_usage/",
        "gnu",
        "concurrency/",
        "pipeline/",
        "sdk"
      ],
    },
    {
      text: "YPM",
      icon: "book",
      prefix: "ypm/",
      children: "structure",
    },
    {
      text: "配置",
      icon: "gears",
      prefix: "config/",
      children: "structure"
    },
    // "slides",
  ],
  "/zh/api/": [
    "",
    "env",
    "ffi",
    "yock",
    {
      text: "GNU",
      icon: "book",
      prefix: "gnu/",
      link: "gnu/",
      children: "structure"
    },
    {
      text: "Sync",
      icon: "book",
      prefix: "sync/",
      link: "sync/",
      children: "structure"
    },
    {
      text: "Conf",
      icon: "book",
      prefix: "conf/",
      link: "conf/",
      children: "structure"
    },
    {
      text: "HTTP",
      icon: "book",
      prefix: "http/",
      link: "http/",
      children: "structure"
    }
  ],
  "/zh/module/": [
    "",
    {
      text: "OpenCmd",
      icon: "lightbulb",
      prefix: "opencmd/",
      link: "opencmd/",
      children: "structure"
    },
    {
      text: "Yock Faker",
      icon: "lightbulb",
      prefix: "yock-faker/",
      link: "yock-faker/",
      children: "structure"
    },
    {
      text: "ark",
      icon: "lightbulb",
      prefix: "ark/",
      link: "ark/",
      children: "structure"
    },
    {
      text: "yorm",
      icon: "lightbulb",
      prefix: "yorm/",
      link: "yorm/",
      children: "structure"
    },
    {
      text: "Python eval",
      icon: "lightbulb",
      prefix: "python-eval/",
      link: "python-eval/",
      children: "structure"
    }
  ]
});
