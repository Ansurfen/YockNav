---
title: Context
category:
  - API
  - pipeline
---

## context
* platform platform
* args string[]
* task string
* flags? table<string, any>

## ec
* integer
* 0 # abort all peer jobs (default)
* 1 # continue to run peer jobs
* 2 # continue to run peer jobs with inherit

## context.exit()

* Prototype
```lua
---@param code? ec
function context.exit(code) end
```

* Introduce

exit aborts running for the context, and decides whether to continue the next according to code's value. Its scope only is limited to task, not impacting other tasks.
## context.assert()

* Prototype
```lua
---@generic T
---@param ok? T
---@param msg? string
function context.assert(ok, msg) end
```

* Introduce


## context.throw()

* Prototype
```lua
---@param error string
function context.throw(error) end
```

* Introduce

throw uses os.exit to abort entire program with force, and prints the info of error.
## context.yield()

* Prototype
```lua
---@param timeout? integer
function context.yield(timeout) end
```

* Introduce


## context.resume()

* Prototype
```lua
---@vararg string
function context.resume(...) end
```

* Introduce


## context.put()

* Prototype
```lua
---@param k string
---@param v any
function context.put(k, v) end
```

* Introduce

put sets keyed value in yock's memory database, which can be taken by `context.get()` and the lifetime is in total program, but any context.

* Example
```lua
# assumes yock is running in windows
job("", function (ctx)
    print(ctx.put("a", 10))
    print(ctx.get("a") == 10)
end)
```
## context.get()

* Prototype
```lua
---@param k string
---@return any
function context.get(k) end
```

* Introduce

get takes value from yock's memory database

* Example
```lua
# assumes yock is running in windows
job("", function (ctx)
    print(ctx.put("a", 10))
    print(ctx.get("a") == 10)
end)
```
## context.set_os()

* Prototype
```lua
---@param os string
function context.set_os(os) end
```

* Introduce

set_os sets the os of platform field in context, which returns corresponding platform information.

* Example
```lua
# assumes yock is running in windows
job("", function (ctx)
    print(ctx.platform:Script()) -- .bat
    ctx.set_os("linux")
    print(ctx.platform:Script()) -- .sh
end)
```
