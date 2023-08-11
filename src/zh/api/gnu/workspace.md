---
title: workspace
icon: harddisk
---

## pwd()

* Prototype
```lua
---@return string, err
function pwd() end
```

* Introduce

pwd returns working directory for current program

## whereis()

* Prototype
```lua
---@param k string
---@return string, err
function whereis(k) end
```

* Introduce

whereis returns absolute path

## alias()

* Prototype
```lua
---@param k string
---@param v string
function alias(k, v) end
```

* Introduce

alias takes an alias v for k, and it isn't directly call alias command on terminal or shell but saves it in the program's memory for mapping commands the `sh` function call.

* Example
```lua
alias("CC", "go")
sh("$CC version")
```

## unalias()

* Prototype
```lua
---@vararg string
function unalias(...) end
```

* Introduce

unalias remove mapping relationship from alias.

* Example
```lua
alias("CC", "go")
unalias("CC")
sh("$CC version")
```


## export()

* Prototype
```lua
---@param k string
---@param v string
---@return err
function export(k, v) end
```

* Introduce

export sets user's environment variable for ever. If you only want to set temporary or local variable, see the `exportl` function.  `NOTE`: In current overload, write is overwrite format. If you want to write by append, see other overload function.

* Example
```lua
# hardly hurt
export("PATH:/bin/yock")
# append write into PATH when value isn't exist, and it's available on windows,
# which meant that it isn't required using Path instead of PATH.

# please keep cautious!!!
export("PATH", "/bin/yock") -- it'll overwrite entire PATH's value
```

## export()

* Prototype
```lua
---@param kv string
---@return err
function export(kv) end
```

* Introduce

export sets user's environment variable for ever. If you only want to set temporary or local variable, see the `exportl` function.  Comparing with `export(k, v)`, the overload function is conservative, and write value by append. If you want to overwrite entire value, see other overload function.  

* Example
```lua
export("PATH:/bin/yock")
```

## unset()

* Prototype
```lua
---@param k string
function unset(k) end
```

* Introduce

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

* Prototype
```lua
---@param k string
---@return string[]
function environ(k) end
```

* Introduce

environ returns values of environment variables k, and if v includes multiple values (e.g. PATH), then it'll be split into string array.

## environ()

* Prototype
```lua
---@return table<string, string>
function environ() end
```

* Introduce

environ returns all environment variables