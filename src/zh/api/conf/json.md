---
title: JSON
---

## json.encode()

* Prototype
```lua
---@param v any
---@vararg string
---@return string
function json.encode(v, ...) end
```

* Introduce

encode 序列化 table 为 json 字符串

* Example
```lua
print(json.encode({ 1, 2, 3 })) -- input: [1,2,3]

print(json.encode({ a = 10, b = { c = "d" } })) -- input: {"a":10,"b":{"c":"d"}}
```

## json.decode()

* Prototype
```lua
---@param str string
---@return table
function json.decode(str) end
```

* Introduce

decode 反序列化 json 字符串为 table

## json.create()

* Prototype
```lua
---@param file string
---@param str? string
---@return json_object
function json.create(file, str) end
```

* Introduce

create 打开指定的json文件，并返回json_object对象。如果文件不存在，将会创建。第二个参数指明创建时要写入文件的内容。

## json.open()

* Prototype
```lua
---@param file string
---@return json_object
function json.open(file) end
```

* Introduce

open 必须要打开已经存在的文件，不然他将会panic。

## json.from_str()

* Prototype
```lua
---@param str string
---@return json_object
function json.from_str(str) end
```

* Introduce

反序列化 json 字符串并返回对象

## json_object

* Prototype
```lua
---@class json_object
---@field buf table
---@field file string
```

## json_object:getbool()

* Prototype
```lua
---@param k string
---@return boolean
function json_object:getbool(k) end
```

## json_object:getnumber()

* Prototype
```lua
---@param k string
---@return number
function json_object:getnumber(k) end
```

## json_object:getstr()

* Prototype
```lua
---@param k string
---@return string
function json_object:getstr(k) end
```

## json_object:gettable()

* Prototype
```lua
---@param k string
---@return table
function json_object:gettable(k) end
```

## json_object:get()

* Prototype
```lua
---@param k string
---@return any
function json_object:get(k) end
```

* Introduce

get 能够以 json path 的方式访问值

* Example
```lua
local jf = json.from_str([[{ "a" = { "b" = 10 } }]])
print(jf:get("a.b")) -- input: 10
```

## json_object:rawget()

* Prototype
```lua
---@param k string
---@return any
function json_object:rawget(k) end
```

* Introduce

rawget 根据 key 返回值。它与`get`不同，没有其他额外的操作。

## json_object:set()

* Prototype
```lua
---@param k string
---@param v any
function json_object:set(k, v) end
```

* Introduce

set 能够以 json path 的形式设置值。

* Example
```lua
local jf = json.from_str([[{ "a": { "b": 10 } }]])
jf:set("a.b", 11)
```

## json_object:rawset()

* Prototype
```lua
---@param k string
---@param v any
function json_object:rawset(k, v) end
```

* Introduce

rawget 根据 key 设置值。它和`set`不同，没有任何额外的处理。

## json_object:string()

* Prototype
```lua
---@return string
function json_object:string() end
```

* Introduce

string returns json string by self.

## json_object:save()

* Prototype
```lua
---@param pretty? boolean
function json_object:save(pretty) end
```

* Introduce

save 持久化 json 到指定的文件。通常情况下，它和调用 `json.open` 或 `json.create` 指明的文件相同。你也可以重新设置 file 字段去改变他。Pretty 是可选的，它默认为 false。如果设置为 true，将会格式化/美化 json 字符串写入。

* Example
```lua
local jf = json.open("./test.json")
jf:save(true)
-- to begin
{"a": {"b": 10}}

-- nowadays
{
    "a": {
        "b": 10
    }
}
```