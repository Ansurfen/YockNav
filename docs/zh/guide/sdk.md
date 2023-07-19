---
title: yock服务开发
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

为了增加yock的拓展性，yock在打包的时候自带了基于yocki协议的protobuf，以便跨语言调用。

你可以使用`yock init python`创建一个带python SDK的demo项目，藉此进行开发。

## yocki相关API

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
connect: 连接指定服务，并为服务起一个别名，便于调用操作
call: 调用名为name的服务，指定调用的函数fn以及arg参数
list: 列出已经连接的服务列表

## ypm封装

## python