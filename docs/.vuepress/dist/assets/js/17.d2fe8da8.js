(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(t,a,r){"use strict";r.r(a);var e=r(14),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指南"}},[t._v("#")]),t._v(" 指南")]),t._v(" "),a("p",[t._v("Yock 是一个跨平台的分布式构建流编排解决方案。它能够作为软件包使用，就像Homebrew, rpm, winget等等。同时它还能充当编程语言的依赖管理的角色（pip，npm，maven等等）。在此基础上，yock还基于grpc和协程实现分布式构建任务（甚至可以为此搭建集群）。你可以将他视作nodejs框架的lua语言版本，不同的是他专注于编排，更加轻量。")]),t._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/Ansurfen/yock/blob/main/docs/static/arch.png?raw=true",alt:"arch"}})]),t._v(" "),a("ul",[a("li",[t._v("Yctl: 负责调度yock的命令。")]),t._v(" "),a("li",[t._v("YockPack: 主要用于对lua文件的预处理，例如模式分解，将一份lua代码根据给定的模式分解成多份lua文件供分布式运行。")]),t._v(" "),a("li",[t._v("YockScheduler: 调度器负责运行lua代码，以task为单位起协程执行。")]),t._v(" "),a("li",[t._v("YPM: yock包管理，负责补全和装载依赖。")])]),t._v(" "),a("h2",{attrs:{id:"协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),a("p",[t._v("这个软件被构建在MIT协议之下，详情请查看 "),a("a",{attrs:{href:"https://raw.githubusercontent.com/Ansurfen/yock/main/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("LICENSE"),a("OutboundLink")],1),t._v(" 。")])])}),[],!1,null,null,null);a.default=s.exports}}]);