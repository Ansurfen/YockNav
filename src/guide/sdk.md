---
title: SDK
tag:
    - yock
    - build-tool
    - package-manager
category: yock
---

In order to increase the extensibility of Yock, yock comes with protobuf based on the yocki protocol when packaging for cross-language calls.

You can use `yock init python` to create a demo project with a python SDK for development.

## yocki-related APIs

```lua
---@param name string
---@param ip string
---@param port number
function yocki.connect(name, ip, port) end

---@param name string
---@param fn string
---@param arg string
---@return string, err
function yocki.call(name, fn, arg) end

---@return table<string>
function yocki.list() end
```
connect: Connects to the specified service and gives the service an alias to facilitate the operation to be invoked
call: Invokes a service named name, specifying the function fn called and the arg parameter
list: Lists a list of connected services

## ypm encapsulation

## python