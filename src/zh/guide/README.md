---
title: 指南
icon: lightbulb
---

[Yock](https://github.com/Ansurfen/yock)是一个为构建而生的框架，他有点类似于nodejs和bazel，底层基于一个解释器封装了一些功能。正如nodejs那样，yock也基于封装过的lua实现了自己的包管理工具——ypm，这意味着引入第三方库成为可能。

[![Go Report Card](https://goreportcard.com/badge/github.com/ansurfen/cushion)](https://goreportcard.com/report/github.com/ansurfen/yock) ![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square) [![GoDoc](https://godoc.org/github.com/ansurfen/yock?status.svg)](https://pkg.go.dev/github.com/ansurfen/yock) [![codecov](https://codecov.io/gh/Ansurfen/yock/branch/main/graph/badge.svg?token=UHYKJTT80P)](https://codecov.io/gh/Ansurfen/yock) [![Discord](https://img.shields.io/badge/chat-on_discord-7289da)](https://discord.gg/vdybzz8RJn)

## Architecture
![arch](https://github.com/Ansurfen/yock/blob/main/docs/static/arch.png?raw=true)

* Yctl: 负责调度yock的命令。
* Yockp: 主要用于对lua文件的预处理，例如模式分解，将一份lua代码根据给定的模式分解成多份lua文件供分布式运行。
* Yocks: 调度器负责运行lua代码，以task为单位起协程执行。
* YPM: yock包管理，负责补全和装载依赖。
* Yockd: yock的守护进程，负责跨进程和跨端通信，构建P2P或中心化集群。
* Yockr: yock的运行时。
* Yockw: yock的监控，用于日志查询、指标监控。
* Ycho: yock的日志模块，用于呈现运行时信息。

## 协议

这个软件被构建在MIT协议之下，详情请查看 [LICENSE](../../LICENSE) 。