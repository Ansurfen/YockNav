---
title: General
---

option can reset yock configuration (yock.yaml) at runtime, and you can think it's an local or temporary environment. General said, most setting is effective. You also can add sync field to synchronize configuration, but it's not recommended and possible to destroy global.

## Option
* strict?, boolean, catches error and kills program when error occurs.
* sync?, boolean, synchronize to configuration (yock.yaml), and it's not recommended.

## Example
```lua
option({
    strict = true,
    sync = true
})
```

## Config file (yock.yaml)