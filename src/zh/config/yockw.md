---
title: Yockw (监控)
---

Yockw 声明yock监控的配置，主要用于设置普罗米修斯指标，日志查询。

## 自启动

```lua
option({
    yockw = {
        self_boot = true,
        port = 9090,
    }
})
```
当`self_boot`设置为true并指定`port`字段，在你运行yock脚本的时候，yock将会在后台自启动监控。

::: warning
每次自启动的过程都会检测指定端口上是否已经启动了监控进程。若已存在，则不会重复启动。当然，你也可以改变`port`的值去启动不同的监控进程，这是不推荐的，yock脚本运行的时候目前只支持和一个yockw通信。
:::