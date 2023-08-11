---
title: JSON
icon: harddisk
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

encode marshals table into json string

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

decode unmarshals json string to table

## json.create()

* Prototype
```lua
---@param file string
---@param str? string
---@return json_object
function json.create(file, str) end
```

* Introduce

create opens json file to be specified and returns json_object and create json file when it don't exist. The second parameter indicates content to write file when create.

## json.open()

* Prototype
```lua
---@param file string
---@return json_object
function json.open(file) end
```

* Introduce

open must opens an existed file. if not, it'll panic.

## json.from_str()

* Prototype
```lua
---@param str string
---@return json_object
function json.from_str(str) end
```

* Introduce

unmarshals json string to object and returns

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

get could visit value by json path.

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

rawget returns value according to key. It's different with `get`, and not any handling.

## json_object:set()

* Prototype
```lua
---@param k string
---@param v any
function json_object:set(k, v) end
```

* Introduce

set could set value by json path.

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

rawget sets value according to key. It's different with `set`, and not any handling.

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

save persists json into file to be specified. In general, it's the same with calling `json.open` or `json.create` to indicate. You also could reset file field to change it. Pretty is optional, and it's false in default and will formats json string when be set true.

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