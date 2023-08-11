---
title: Conf
icon: harddisk
---

conf can open and parse configuration with easy and fast way, supporting yaml, yml, json, toml, hcl, tfvars, ini, properties, props, prop, dotenv, env file format.

## conf.create()

* Prototype
```lua
---@param file string
---@param tmpl string
---@return conf
function conf.create(file, tmpl) end
```

* Introduce

create returns parsed conf object, and creates a new file and panics when file isn't exist.

## conf.open()

* Prototype
```lua
---@param file string
---@return conf
function conf.open(file) end
```

* Introduce

open must open specified file, otherwise it would panic.

## conf:read()

* Prototype
```lua
---@param k string
---@return table|nil
function conf:read(k) end
```

* Introduce

read returns value by json path

## conf:write()

* Prototype
```lua
---@param k string
---@param v any
function conf:write(k, v) end
```

* Introduce

writes v to specified k, and required to call the save function for persisting on configuration file.

## conf:save()

* Prototype
```lua
function conf:save() end
```

* Introduce

save persists data based-on memory into configuration.