---
title: Yockd (daemon)
---

Yockd declares yock's daemon configuration, which used for launching yockd backend process and connecting peers to build P2P or central cluster.

## Self boot

```lua
option({
    yockd = {
        self_boot = true,
        name = "master"
        port = 1314,
    }
})
```
Yock will launch daemon at the moment of runing script when `self_boot` is true and `port` is to be specified.

::: warning
Checks whether the daemon is already running every self-boot process. It'll not launch, when existed. Of course, you can change `port`'s value to run different daemon, and it's not recommended. The script of yock only supports to connect with the unique yockd.
:::

## Build cluster

::: danger
Yet not finished, and please not use.
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

Regardless of P2P or central cluster building, only needs to list `peer` todo-list, and interpreter would report for yockd in internal to build cluster automatically. The `peer` field is stored based-on kv format, where key expresses node's name. That's the configuration of local daemon, if name's value is equal to node's name (the above example is master). Based on the feature, only changing name field can build cluster network without sensitive in different host by the same todo-list.
