---
title: formdata
icon: laptop-code
category:
  - API
  - http
---

## formdata.encode()

* Prototype
```lua
---@param v table<string, string[]>
---@return string
function formdata.encode(v) end
```

* Introduce

encode marshals table to form string, just like json.encode() when use it.

* Example
```lua
print(formdata.encode({
     username = { "ansurfen" },
     password = { tostring(123456) }
}))
```
## formdata.decode()

* Prototype
```lua
---@param v string
---@return urlValues
function formdata.decode(v) end
```

* Introduce

decode unmarshals string to formdata object.

* Example
```lua
local data = formdata.encode({
    username = { "ansurfen" },
    password = { "root" }
})
print(data)
print(formdata.decode(data):Get("password"))
print(formdata.decode("pwd=a"):Get("password"))
print(formdata.decode(""):Get("password"))
```
