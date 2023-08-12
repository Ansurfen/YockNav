---
title: 工作区
---

## pwd()

* 原型
```lua
---@return string, err
function pwd() end
```

* 介绍

pwd 返回当前程序的工作目录。

## whereis()

* 原型
```lua
---@param k string
---@return string, err
function whereis(k) end
```

* 介绍

whereis 返回指定环境变量所在的绝对路径。

## alias()

* 原型
```lua
---@param k string
---@param v string
function alias(k, v) end
```

* 介绍

alias 为 k 创建一个别名 v，它并不是直接调用终端或者shell上的 alias 命令，而是保存它在程序的内存当中去映射命令，当 `sh` 函数调用的时候。

* 示例
```lua
alias("CC", "go")
sh("$CC version")
```

## unalias()

* 原型
```lua
---@vararg string
function unalias(...) end
```

* 介绍

unalias 移除 alias 的映射关系。

* 示例
```lua
alias("CC", "go")
unalias("CC")
sh("$CC version")
```

## export()

* 原型
```lua
---@param k string
---@param v string
---@return err
function export(k, v) end
```

* 介绍

export 永久地设置用户环境变量。如果你只想要设置临时或者局部变量，看 `exportl` 函数。 

* 示例
```lua
-- 几乎无害
export("PATH:/bin/yock")
-- 当值不存在的时候，将追加写入PATH中，它能够在 windows 上起作用
-- 这意味着不需要使用 Path 替代 PATH

-- 请保持谨慎!!!
export("PATH", "/bin/yock") -- 它将重写整个 PATH 的值
```

## unset()

* 原型
```lua
---@param k string
function unset(k) end
```

* 介绍

unset removes specified environment variable for ever. If you only want to set temporary, or local variable, see the `unsetl` function.  Just like export, the unset function supports entire delete and deletes one of values for specified key.

* Example
```lua
# entire deletes
unset("PATH")

# deletes one of values for specified key
unset("PATH:/bin/yock")
```

## exportl()

* Prototype
```lua
---@param k string
---@param v string
---@return err
function exportl(k, v) end
```

* Introduce

exportl set temporary or local environment variable, and less like the `export` function it fails to write by append, and only supports to overwrite entire key, which meant you may need two step to complete append operation.

## unsetl()

* Prototype
```lua
---@param k string
---@return err
function unsetl(k) end
```

* Introduce

unsetl removes temporary or local environment variable, and less like the `export` function it fails to removes one of values, and only supports to remove entire key, which meant you may need two step to complete append operation.

## environ()

* 原型
```lua
---@return table<string, string>
function environ() end

---@param k string
---@return string[]
function environ(k) end
```

* 介绍

重载 1

environ 返回所有环境变量。

重载 2

environ 返回环境变量 k 的值，如果值包含了多个值的情况 （例如，PATH），那它将会被分割成字符串数组返回。