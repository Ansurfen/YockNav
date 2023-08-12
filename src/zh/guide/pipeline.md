---
title: 流水线
tag:
    - yock
    - build-tool
    - package-manager
category: yock
---

Yock没有直接提供Pipeline相关的规范，但是提供了能够搭建Pipeline的相关功能，这也使得yock在调度上更加灵活。

## Job & Task

```lua
---@param name string
---@param callback fun(ctx: context)
function job(name, callback) end

---@param name string
---@vararg string
function jobs(name, ...) end
```
Job: Task的最小组成单元，一个Task可由一个或者多个job组成。从函数签名不难看出，每个job都是一个名称与回调函数相绑定的单元。如果用户在同一份文件中定义同名的job，那yock将会抛出错误，因此每个job名称必须唯一。
Jobs: 编排多个job组成一个Task，与job共享命名空间。这意味着，要是jobs和job出现同名的情况，yock也会直接抛出错误。

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
鉴于上文的介绍，我们不难看出这份代码中存在的task(Task由一个或者多个job组成):
|Tasks|Jobs|
|:------:|:------:|
|test|test|
|build|build|
|depoly|depoly|
|all|test, build, depoly|

要分task调度他们相当容易，只需要在运行的文件后面加上指定的任务名即可。例如运行all任务，`yock run main.lua all`。同时运行多个任务也是支持的, `yock run main.lua all depoly`。每个task之间都是协程异步执行的，而task内的job则是按照顺序依次执行。

## Context

根据上文的介绍，除了对Job有一定了解外，相信你一定很好奇job回调函数中传递的context类型的参数是做什么的。顾名思义，它是一个上下文类型，操作着task流程的生命周期。

想象一个这样的场景，在调度`all`任务期间，如果`test`计划失败，那是否要继续`build`的运行呢？这就会产生一个分支，而要控制这一切在用户层面除了引入全局变量外是没办法的。因为yock只是提供了一个回调函数，没有提供编排回调函数的能力。因此，ctx变量应运而生。如果你想要终止整个task那只在回调函数结尾处加上`ctx.exit(0)`，他将终止本次task的执行。注意task之间是协程异步调度的，因此不会影响整个程序的正常调度，如果你想要结束整个程序只需`os.exit()`。言归正传，如果你不想结束调度，那可以给exit传递1，他将会继续执行本次task的下一个job。

