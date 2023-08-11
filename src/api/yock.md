---
title: yock
index: false
icon: laptop-code
category:
  - API
  - sync
---

## yocki
* connect fun(name: string, ip: string, port: integer) # dial server to be specified by ip and port, and name it for call.
* call fun(name: string, fn: string, arg: string): string, err # calls function on specified server
* list fun(): string[] # returns a list of services that have been connected

## pathf()

* Prototype
```lua
---@vararg string
---@return string
function pathf(...) end
```

* Introduce

pathf joins any number of path elements into a single path, separating them with slashes. Empty elements are ignored. The result is Cleaned. However, if the argument list is empty or all its elements are empty, Join returns an empty string.  Except joining any number of path, pathf's first element can alias regular path according to different parameter.

* Example
```lua
# assumes working directory is D:/tmp/main.lua
pathf("@/", "a", "b") -- mapping: {HomeDir}/.yock/a/b
pathf("#1", "../a") -- mapping: #1 returns D:/tmp/main.lua path, then joins "../a" to output "D:/tmp/a"
```
## wrapzip()

* Prototype
```lua
---@param s string
---@return string
function wrapzip(s) end
```

* Introduce

wrapzip returns string that wrapped platform zip format in default

* Example
```lua
wrapzip("a") -- on windows, result is a.zip

wrapzip("a") -- on linux, darwin and etc, result is a.tar.gz
```
## wrapexf()

* Prototype
```lua
---@param s string
---@return string
function wrapexf(s) end
```

* Introduce

wrapexf returns string that wrapped platform executable filename extension in default

* Example
```lua
wrapexf("a") -- on windows, result is a.exe

wrapexf("a") -- on linux, darwin and etc, result is a
```
## wrapscript()

* Prototype
```lua
---@param s string
---@return string
function wrapscript(s) end
```

* Introduce

wrapscript returns string that wrapped platform script format in default

* Example
```lua
wrapscript("a") -- on windows, result is a.bat

wrapscript("a") -- on linux, darwin and etc, result is a.sh
```
