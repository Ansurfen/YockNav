# Guide

Yock is a solution of cross platform to compose distributed build stream. It's able to act as software package tool, like Homebrew, rpm, winget and so on. It also is used for dependency manager (pip, npm, maven, etc.) of programming languages. On top of this, yock also implements distributed build tasks based on grpc and goroutines (and can even build cluster for this). You can think of it as the lua version of the nodejs framework, except that it focuses on composition and is more lightweight.

[![Go Report Card](https://goreportcard.com/badge/github.com/ansurfen/cushion)](https://goreportcard.com/report/github.com/ansurfen/yock)
![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)
[![GoDoc](https://godoc.org/github.com/ansurfen/yock?status.svg)](https://pkg.go.dev/github.com/ansurfen/yock)
[![codecov](https://codecov.io/gh/Ansurfen/yock/branch/main/graph/badge.svg?token=UHYKJTT80P)](https://codecov.io/gh/Ansurfen/yock)
[![Discord](https://img.shields.io/badge/chat-on_discord-7289da)](https://discord.gg/vdybzz8RJn)

## Architecture
![arch](https://github.com/Ansurfen/yock/blob/main/docs/static/arch.png?raw=true)

* Yctl: it's used for scheduling yock's commands.
* YockPack: it's mainly used for preprocessing lua file, such as schema decomposition, decomposing a lua source file into multiple lua files according to a given modes for distributed system.
* YockScheduler: the scheduler is responsible for running the lua code, and launchs goroutines to execute in tasks.
* YPM: yock package manager, used for completion and loading dependencies.

## License

This software is licensed under the MIT license, see [LICENSE](https://raw.githubusercontent.com/Ansurfen/yock/main/LICENSE) for more information.