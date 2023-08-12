---
title: 管道
---

pipe 对象被设计在lua中模拟终端的管道操作。

## pipe
* type integer
* payload any
* clone fun(self: pipe): pipe

## file()

* 原型
```lua
---@operator add(pipe):pipe
---@operator sub(pipe):pipe
---@vararg string
---@return pipe
function file(...) end
```

* 介绍

file 保存基于文件名的文件描述符。如果文件不存在，将会创建。

* 示例
```lua
local a = file("1.txt") -- 单文件流
local b = file("2.txt", "3.txt") -- 多文件流

 # operator reload to reset file stream
local c = a + b -- 聚合文件流一起操作
local d = c - file("2.txt") -- 移除文件流，根据第二个参数
```

## stream()

* 原型
```lua
---@param str string
---@return pipe
function stream(str) end
```

* 介绍

stream 转换字符串为 pipe 对象，它运行你使用运算符去操作文件流，就像终端的管道操作。

* 示例
```lua
local a = stream("Hello World") # create pipe object
_ = file("test.txt") < a -- 覆盖写入 test.txt

_ = file("test.txt") <= a -- 追加写入 test.txt
```
