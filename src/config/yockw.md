---
title: Yockw (watch)
---

Yockw declears yock's monitoring configuration，and used for setting Prometheus metrics, logger query.

## Self boot

```lua
option({
    yockw = {
        self_boot = true,
        port = 9090,
    }
})
```
Yock will launch monitoring at the moment of runing script when `self_boot` is true and `port` is to be specified.

::: warning
Checks whether the yockw is already running every self-boot process. It'll not launch, when existed. Of course, you can change `port`'s value to run different yockw, and it's not recommended. The script of yock only supports to connect with the unique yockw.
:::