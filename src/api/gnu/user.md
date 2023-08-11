---
title: user
icon: harddisk
---

## whoami()

* Prototype
```lua
---@return string, err
function whoami() end
```

* Introduce

whoami returns hostname

## chmod()

* Prototype
```lua
---@param name string
---@param mode number
---@return err
function chmod(name, mode) end
```

* Introduce

chmod changes the mode of the named file to mode. If the file is a symbolic link, it changes the mode of the link's target.

## chown()

* Prototype
```lua
---@param name string
---@param uid number
---@param gid number
---@return err
function chown(name, uid, gid) end
```

* Introduce

chown changes the numeric uid and gid of the named file. If the file is a symbolic link, it changes the uid and gid of the link's target. A uid or gid of -1 means to not change that value.

## sudo()

* Prototype
```lua
---@param cmd string
function sudo(cmd) end
```

* Introduce

sudo runs command with administrator permission