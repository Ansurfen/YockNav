---
title: FFI
index: false
icon: laptop-code
category:
  - API
  - sync
---

ffi 运行 yock 打开和调用动态库。

## ffiLib
* lib table

## ffi.library()

* 原型
```lua
---@param lib string
---@param funcs table
function ffi.library(lib, funcs) end
```

* 介绍

library declares function prototype (arguments + return value type) and creates its at running. Then, you can call its as function through ffi.lib.'lib_name'.'function_name' format. 

* 类型映射

|Lua      |C| 
| :-----------: | -------------: | 
|         |void| 
|integer  |uint8|
|integer  |int8| 
|integer  |int8|
|integer  |uint16|
|integer  |int16|
|integer  |uint32|
|integer  |int32|
|integer  |uint64|
|integer  |int64|
|integer  |int (int32)|
|integer  |long (int64)|
|number   |float|
|number   |double|
|boolean  |bool|
|string   |str (ptr 类型别名)|
|userdata |ptr # 指针类型|

* 示例
```lua
-- declares function prototype, and it's worth noting filename extension isn't required,
-- and yock will refer extension's name to add it automatically
-- according to platform (windows: .dll, linux: .so, darwin: .dylib).
-- Of course, obvious to add it is allowed, but not recommended because it's considered
-- difficult to cross platform.
ffi.library("./lib/mylib", {
     hello = { "void", { "str" } }
})

-- calls function, no matter how tortuous the library path is, and yock only extracts filename
-- in the end of path, meanwhile to split filename extension (.dll, .so, .dylib) to ensure cross platform.
ffi.lib.mylib.hello("yock")
```