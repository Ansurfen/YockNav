---
title: Conf
---

conf 能够简单、快速地打开和解析配置文件，支持 yaml, yml, json, toml, hcl, tfvars, ini, properties, props, prop, dotenv, env 文件格式。

## conf.create()

* Prototype
```lua
---@param file string
---@param tmpl string
---@return conf
function conf.create(file, tmpl) end
```

* Introduce

create 返回被解析的 conf 对象。当文件不存在的时候，将会创建新文件并panic。

## conf.open()

* Prototype
```lua
---@param file string
---@return conf
function conf.open(file) end
```

* Introduce

open 必须打开指定的文件，否则它将会panic。

## conf:read()

* Prototype
```lua
---@param k string
---@return table|nil
function conf:read(k) end
```

* Introduce

read 根据 json path 返回值

## conf:write()

* Prototype
```lua
---@param k string
---@param v any
function conf:write(k, v) end
```

* Introduce

写入键值对，需要调用save函数去持久化到配置文件。

## conf:save()

* Prototype
```lua
function conf:save() end
```

* Introduce

save 持久化内存中的数据进入配置文件当中。