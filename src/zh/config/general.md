---
title: 通用
---

option 能够在运行时重设 yock 配置，你可以认为它是一个局部或者临时环境。通常说，大部分设置是有效的。你也能够添加`sync`字段去同步配置，但是这并不推荐，它可能会破坏全局环境。

## 选项
* strict?, boolean, 捕获错误和结束程序，当错误发生。
* sync?, boolean, 同步配置 (yock.yaml)，不推荐。

## 示例
```lua
option({
    strict = true,
    sync = true
})
```