---
title: Guide
icon: lightbulb
---

[Yock](https://github.com/Ansurfen/yock)is a framework built for building, somewhat similar to nodejs and bazel, with some functionality encapsulated under the basement based on an interpreter. Just like NodeJS, Yock has implemented its own package management tool, YPM, based on wrapped Lua, which means that it is possible to introduce third-party libraries.

[![Go Report Card](https://goreportcard.com/badge/github.com/ansurfen/cushion)](https://goreportcard.com/report/github.com/ansurfen/yock) ![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square) [![GoDoc](https://godoc.org/github.com/ansurfen/yock?status.svg)](https://pkg.go.dev/github.com/ansurfen/yock) [![codecov](https://codecov.io/gh/Ansurfen/yock/branch/main/graph/badge.svg?token=UHYKJTT80P)](https://codecov.io/gh/Ansurfen/yock) [![Discord](https://img.shields.io/badge/chat-on_discord-7289da)](https://discord.gg/vdybzz8RJn)

## Architecture
![arch](https://github.com/Ansurfen/yock/blob/main/docs/static/arch.png?raw=true)

* Yctl: it's used for scheduling yock's commands.
* Yockp: it's mainly used for preprocessing lua file, such as schema decomposition, decomposing a lua source file into multiple lua files according to a given modes for distributed system.
* Yocks: the scheduler is responsible for running the lua code, and launchs goroutines to execute in tasks.
* YPM: yock package manager, used for completion and loading dependencies.
* Yockd: yock's daemon responsible for cross-process and cross-end communication, building P2P or centralized cluster.
* Yockr: yock's runtime.
* Yockw: yock's monitoring, used for log search and metric monitoring.
* Ycho: yock's logger module, is used for show information in running.

## License

This software is licensed under the MIT license, see [LICENSE](https://raw.githubusercontent.com/Ansurfen/yock/main/LICENSE) for more information.