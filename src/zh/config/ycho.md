---
title: Ycho (日志)
---

Ycho 是yock的日志模块，主要用来设置日志相关的参数，你能够在`{用户目录}/.yock/log`文件夹下面查看每次运行时的日志。

## 选项
* stdout, boolean, 允许日志输出到终端上，若为true

## 示例
```lua
option({
    ycho = {
        stdout = true
    }
})
```