---
title: Yockd (守护进程)
---

Yockd 声明yock守护进程的配置，主要用于后台启动和对话Peer建立P2P或中心化集群。

## 自启动

```lua
option({
    yockd = {
        self_boot = true,
        name = "master"
        port = 1314,
    }
})
```
当`self_boot`设置为true并指定`port`字段，在你运行yock脚本的时候，yock将会在后台自启动守护进程。

::: warning
每次自启动的过程都会检测指定端口上是否已经启动了守护进程。若已存在，则不会重复启动。当然，你也可以改变`port`的值去启动不同的守护进程，这是不推荐的，yock脚本运行的时候目前只支持和一个yockd通信。
:::

## 构建集群

::: danger
这个功能还未完成，请不要使用。
:::

```lua
option({
    yockd = {
        self_boot = false,
        port = 1314,
        name = "master",
        peer = {
            master = {
                ip = "172.1.0.1",
                port = 1314,
                public = false
            },
            node1 = {
                ip = "1.1.1.2",
                port = 1314,
                public = true
            },
            node2 = {
                ip = "192.168.127.1",
                port = 1314,
                public = false
            }
        }
    }
})
```

不管是P2P还是中心化集群的构建，只要罗列好`peer`的清单，解释器就会在底层向本地yockd报告，以自动化的构建集群。`peer`字段以kv的形式进行存储，key为节点的名称。若name的值和节点的名称相符（示例上为 master），那就是本地守护进程的配置。基于这一特性，在不同的主机上凭借同一份peer清单，只需要变更name就能无感知的搭建集群网络。