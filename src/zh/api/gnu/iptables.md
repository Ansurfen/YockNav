---
title: iptables
---

:::danger
未完成，请不要使用。
:::

## iptables_list_opt
* name string, returns service to be specified and all services when the length of name is empty/zero.
* chain string
* legacy boolean, determine to use iptables or iptables-legacy (except windows)

## fireware_rule
* name string
* proto string
* src string
* dst string
* action string

## iptables.list()

* Prototype
```lua
---@param opt iptables_list_opt
---@return fireware_rule[]|fireware_rule, err
function iptables.list(opt) end
```

* Option
    - opt, [iptables_list_opt](#iptables-list-opt)


## iptables_op_opt
* chain? string, INPUT(linux), in(windows)
* name? string
* protocol? string
* action? string, drop(linux), block(windows)
* destination? string
* legacy? boolean

## iptables.add()

* Prototype
```lua
---@param opt iptables_op_opt
---@return err
function iptables.add(opt) end
```

* Option
    - opt, [iptables_op_opt](#iptables-op-opt)

## iptables.del()

* Prototype
```lua
---@param opt iptables_op_opt
---@return err
function iptables.del(opt) end
```