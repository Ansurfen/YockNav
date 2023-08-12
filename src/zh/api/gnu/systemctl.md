---
title: systemctl
---

:::danger
未完成，请不要使用。
:::

## systemctl_opt

## sys_state
* string
* "all"
* "active"
* "inactive"

## sys_type
* string
* "target"
* "service"

## systemctl.list()

* Prototype
```lua
---@param t? sys_type
---@param s? sys_state
---@return sys_service[]
function systemctl.list(t, s) end
```

* Introduce

## systemctl.restart()

* Prototype
```lua
---@param name string
---@return err
function systemctl.restart(name) end
```

* Introduce

## systemctl.start()

* Prototype
```lua
---@param name string
---@return err
function systemctl.start(name) end
```

* Introduce

## systemctl.stop()

* Prototype
```lua
---@param name string
---@return err
function systemctl.stop(name) end
```

* Introduce

## systemctl.delete()

* Prototype
```lua
---@param name string
---@return err
function systemctl.delete(name) end
```

* Introduce

## systemctl.disable()

* Prototype
```lua
---@param name string
---@return err
function systemctl.disable(name) end
```

* Introduce

## systemctl.enable()

* Prototype
```lua
---@param name string
---@return err
function systemctl.enable(name) end
```

* Introduce

## sc_create_opt
* description? string
* before? string
* after? string
* type? "simple"|"exec"|"forking"|"oneshot"|"dbus"|"notify"|"idle"
* execStart? string
* execStop? string
* privateTmp? boolean
* restartSec? integer
* restart? string
* wantedBy string
* unit? sc_create_opt_unit
* service? sc_create_opt_service
* install? sc_create_opt_install
* spec? sc_create_opt_spec

## systemctl.create()

* Prototype
```lua
---@param name string
---@param opt sc_create_opt
---@return err
function systemctl.create(name, opt) end
```

* Introduce

## service_status
* integer
* "running"
* "stopped"
* "unknown"

## sys_service
* pid integer
* name string
* status service_status

## systemctl.status()

* Prototype
```lua
---@param name string
---@return sys_service, err
function systemctl.status(name) end
```

* Introduce