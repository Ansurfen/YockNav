---
title: job
category:
  - API
  - pipeline
---

## job()

* Prototype
```lua
---@param dir string
---@param callback fun(path: string, info: fileinfo)
---@return nil, err
---@param name string
---@param callback fun(ctx: context)
function job(name, callback) end
```

* Introduce

job is the smallest component of a task, a task can consist of one or more jobs.
It is not difficult to see from the function signature that each job is a unit
whose name is bound to the callback function. If a user defines a job with the same
name in the same file, Yock will throw an error, so each job name must be unique.

* Example
```lua
# main.lua

job("test", function(ctx)
     ctx.info("Hello World!")
end)

# use `yock run main.lua test` to run test task for the above code.
```
## jobs()

* Prototype
```lua
---@param name string
---@vararg string
function jobs(name, ...) end
```

* Introduce

jobs composes multiple jobs to form a task and share the namespace with the job. This means that if jobs and job have the same name, yock will also throw an error directly.

* Example
```lua
# main.lua
job("test", function(ctx)
    print("start test...")
end)

job("build", function(ctx)
    print("start build...")
end)

job("deploy", function(ctx)
    print("start deploy...")
end)

jobs("all", "test", "build", "deploy")
# just like scheduling job, use `yock run main.lua all` to run all task one by one.
# if you want to run multiple task with cover at the same time, it's also supported
# and use the form of `yock run main.lua all deploy` to make it.
```
