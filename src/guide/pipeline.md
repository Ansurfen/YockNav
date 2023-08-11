---
title: pipeline
tag:
    - yock
    - build-tool
    - package-manager
category: yock
---

Yock does not directly provide pipeline-related specifications, but does provide related functions that can build pipelines, which also makes yock more flexible in scheduling.

## Job & Task

```lua
---@param name string
---@param callback fun(ctx: context)
function job(name, callback) end

---@param name string
---@vararg string
function jobs(name, ...) end
```
Job: The smallest component of a task, a task can consist of one or more jobs. It is not difficult to see from the function signature that each job is a unit whose name is bound to the callback function. If a user defines a job with the same name in the same file, Yock will throw an error, so each job name must be unique.

Jobs: Compose multiple jobs to form a Task and share the namespace with the job. This means that if jobs and job have the same name, yock will also throw an error directly.

```lua
--- main.lua
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
```
In view of the above introduction, it is not difficult to see the task (Task consists of one or more jobs) in this code:

|Tasks|Jobs|
|:------:|:------:|
|test|test|
|build|build|
|depoly|depoly|
|all|test, build, depoly|

It is fairly easy to schedule them by task, just add the specified task name to the running file. For example, run the ALL task, `yock run main.lua all`. Running multiple tasks at the same time is also supported, `yock run main.lua all depoly`. Each task is executed asynchronously by coroutines, while the jobs within a task are executed sequentially.

## Context

According to the above introduction, in addition to having a certain understanding of Job, I believe you must be curious about what the parameter of the context type passed in the job callback function does. As the name suggests, it's a context type that operates the lifecycle of the Task process.

Imagine a scenario where if the `test` plan fails during the scheduling of an `all` task, do you want to continue `build`? This creates a branch, and there is no way to control this at the user level other than to introduce global variables. Because yock only provides a callback function, it does not provide the ability to compose callback functions. Hence the ctx variable is designed. If you want to terminate the entire task, just add `ctx.exit(0)` to the end of the callback function, and it will terminate the execution of the task. Note that tasks are dispatched asynchronously, so it will not affect the normal scheduling of the entire program, if you want to end the whole program just `os.exit()`. To get back to home, if you don't want to end the scheduling, you can pass 1 to exit, and he will continue to execute the next job of this task.