## 指南

Yock 是一个跨平台的分布式构建流编排解决方案。它能够作为软件包使用，就像Homebrew, rpm, winget等等。同时它还能充当编程语言的依赖管理的角色（pip，npm，maven等等）。在此基础上，yock还基于grpc和协程实现分布式构建任务（甚至可以为此搭建集群）。你可以将他视作nodejs框架的lua语言版本，不同的是他专注于编排，更加轻量。

## 架构
![arch](https://github.com/Ansurfen/yock/blob/main/docs/static/arch.png?raw=true)

* Yctl: 负责调度yock的命令。
* YockPack: 主要用于对lua文件的预处理，例如模式分解，将一份lua代码根据给定的模式分解成多份lua文件供分布式运行。
* YockScheduler: 调度器负责运行lua代码，以task为单位起协程执行。
* YPM: yock包管理，负责补全和装载依赖。

## 协议

这个软件被构建在MIT协议之下，详情请查看 [LICENSE](https://raw.githubusercontent.com/Ansurfen/yock/main/LICENSE) 。