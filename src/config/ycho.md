---
title: Ycho (logger)
---

Ycho is the logger module of yock, and used for setting relational parameters about logger, so you could view details about every running log in `{HomeDir/.yock/log}` folder.

## Option
* stdout, boolean, allows to output log on terminal, if true

## Example
```lua
option({
    ycho = {
        stdout = true
    }
})
```
