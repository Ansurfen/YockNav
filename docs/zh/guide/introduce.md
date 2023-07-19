---
title: 你的下一个构建工具，何必是构建工具
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

[Yock](https://github.com/Ansurfen/yock)是一个为构建而生的框架，他有点类似于nodejs和bazel，底层基于一个解释器封装了一些功能。正如nodejs那样，yock也基于封装过的lua实现了自己的包管理工具——ypm，这意味着引入第三方库成为可能。

[安装](#安装)
[快速开始](#快速开始)

## 安装
`注意`: 无论是哪一种安装方式，下载完后都需要将yock挂载到本地环境中。在解压压缩包后，进入可执行文件的目录运行`yock run install.lua`完成这个过程。

### Git Release (推荐，第一时间发布最新版本)
[github](https://github.com/Ansurfen/yock/releases): 选择合适的压缩包下载完解压运行install.lua即可。

### 包管理工具安装 (版本更新存在滞后)
包管理工具下载完后一般会自动解压，解压完后还是需要手动运行install.lua，因此强烈推荐用`Git Release`的形式。
npm: npm i @ansurfen/yock -g
pip: pip install yock

### 自己构建
```bash
git clone https://github.com/Ansurfen/yock.git
cd ctl
<!-- windows -->
./build.bat ffi //构建支持libffi的版本
./build.bat dev //构建测试版本
./build.bat oslinux//构建linux版本，默认为windows版本
<!-- 其他平台 -->
go run . run ../auto/build.lua all -- --all-os linux
```

## 快速开始

如果你使用vscode作为开发环境，可以先安装lua语言代码提示的插件以获得更好的体验。
![lua-tip](https://github.com/Ansurfen/ansurfen.github.io/blob/main/images/yock/lua-tip.png?raw=true)

当`yock run install.lua`执行成功后，就可以创建一个工作目录编写和测试yock脚本。运行`ypm tidy`（在windows之外的操作系统为ypm.sh）补全代码定义，它会在工作目录下创建include目录，里面的源文件仅供插件提示使用。

### 你好，世界！
```lua
-- main.lua
print("Hello World")
fmt.Printf("Hello %s!\n", "Yock")
```
创建main.lua文件，写下以上内容。使用`yock run main.lua`执行。如果一切顺利，你将在终端看到输出结果。至此，yock的开发环境算是配置完成了。下一章开始将会介绍yock的具体使用。
