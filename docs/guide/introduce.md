---
title: Your next build-tool is not build-tool.
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---


[Yock](https://github.com/Ansurfen/yock)is a framework built for building, somewhat similar to nodejs and bazel, with some functionality encapsulated under the basement based on an interpreter. Just like NodeJS, Yock has implemented its own package management tool, YPM, based on wrapped Lua, which means that it is possible to introduce third-party libraries.

## Install
`NOTE`: Regardless of the installation method, you need to mount yock to the local environment after downloading. After extracting the package, go to the directory of the executable and run `yock run install.lua` to complete the process.

### Git Release (Recommended, the latest version is released as soon as possible)
[github](https://github.com/Ansurfen/yock/releases): Select the appropriate compressed package, download it, decompress it and run the install.lua.

### Package Management Tool (Lag in Version Update)
Package management tools are generally automatically decompressed after downloading, and you still need to manually run the install.lua after decompression, so it is highly recommended to use the form of `Git Release`.

npm: npm i @ansurfen/yock -g

pip: pip install yock

### Build by hand
```bash
git clone https://github.com/Ansurfen/yock.git
cd ctl

./build.bat/sh //standard build
./build.bat/sh ffi //build with libffi
./build.bat/sh dev //build development version
./build.bat/sh oslinux//cross compile, build for linux
```

## GetStarted

If you use VSCode as your development environment, you can install the plugin for Lua code hints for a better experience.
![lua-tip](https://github.com/Ansurfen/ansurfen.github.io/blob/main/images/yock/lua-tip.png?raw=true)

If you use IDEA or JetBrain's tools as your development environment, you can install EmmyLua to get the same effect.
![lua-tip](https://github.com/Ansurfen/YockNav/blob/main/assets/img/lua-tip-idea.png?raw=true)


## Get Start

When `yock run install.lua` is executed successfully, you can create a working directory to write and test yock scripts. Run `ypm tidy` to complete the code definition, and it will create an include directory in the working directory with source files for plugin prompts only.

```lua
-- main.lua
print("Hello World")
fmt.Printf("Hello %s!\n", "Yock")
```
Create a main.lua file and write down the above. Use `yock run main.lua` execution. If all goes well, you'll see the output in the terminal. At this point, Yock's development environment is configured. The next chapter begins with an introduction to the specific use of yock.