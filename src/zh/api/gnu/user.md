---
title: 用户
---

## whoami()

* 原型
```lua
---@return string, err
function whoami() end
```

* 介绍

whoami 返回主机名

## chmod()

* 原型
```lua
---@param name string
---@param mode number
---@return err
function chmod(name, mode) end
```

* 介绍

chmod 改变给定文件的模式。如果文件是符号链接，它将改变链接目标的模式。

## chown()

* 原型
```lua
---@param name string
---@param uid number
---@param gid number
---@return err
function chown(name, uid, gid) end
```

* 介绍

chown 改变给定文件的 uid 和 gid。如果文件是符号链接，它将改变链接目标的 uid 和 gid。uid 和 gid 为 -1 将不做任何改变。

## sudo()

* 原型
```lua
---@param cmd string
function sudo(cmd) end
```

* 介绍

sudo 以管理员权限运行命令