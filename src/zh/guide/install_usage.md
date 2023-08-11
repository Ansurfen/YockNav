---
title: 安装 / 使用
---

## 安装
`注意`: 无论是哪一种安装方式，下载完后都需要将yock挂载到本地环境中。在解压压缩包后，进入可执行文件的目录运行`yock run install.lua`完成这个过程。

::: warning
利用第三方包管理下载存在更新滞后的问题，并且下载完后虽然会自动解压，但解压完后还是需要手动执行install.lua，因此强烈推荐用`binary`的方式直接下载。
:::

::: code-tabs#shell

@tab binary
```shell
https://github.com/Ansurfen/yock/releases
```

@tab npm

```shell
npm i @ansurfen/yock -g
```

@tab pip

```shell
pip install yock
```

@tab self-build

```shell
git clone https://github.com/Ansurfen/yock.git

cd ctl

./build.bat/sh //正常构建
./build.bat/sh ffi //带 libffi 构建 (需要 gcc 或 mingw)
./build.bat/sh dev //构建开发版本
./build.bat/sh oslinux //交叉编译到linux平台

// 自动构建出带libffi版本的项目，当上一步完成后
yock run install.lua
yock run ../auto/build-ffi.lua
```
:::

## 环境

::: tip
这一步的主要目标是提高编写代码的效率，所以他是可选的。
Yock并没有直接提供官方的插件，而是复用第三方的lua语言去实现。因此，以下插件也仅作推荐。
:::

对于 VSCode：
![lua-tip](https://github.com/Ansurfen/ansurfen.github.io/blob/main/images/yock/lua-tip.png?raw=true)

对于 Jetbrain产品 （IDEA, Goland 等）：
![lua-tip](https://github.com/Ansurfen/YockNav/blob/main/assets/img/lua-tip-idea.png?raw=true)

## 使用

当`yock run install.lua`执行成功后，就可以创建一个工作目录编写和测试yock脚本。运行`ypm tidy`补全代码定义，它会在工作目录下创建include目录，里面的源文件仅供插件提示使用。

```lua
-- main.lua
print("Hello World")
fmt.Printf("Hello %s!\n", "Yock")
```
创建main.lua文件，写下以上内容。使用`yock run main.lua`执行。如果一切顺利，你将在终端看到输出结果。至此，yock的开发环境算是配置完成了。下一章开始将会介绍yock的具体使用。