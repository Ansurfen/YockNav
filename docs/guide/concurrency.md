---
title: yock concurrent programming
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

Yock has the ability to convert asynchronous tasks to synchronous tasks, as well as concurrent programming with and without stacks.

## Semaphores

Before starting asynchronous programming, introduce the concept of synchronization. Normally, code is executed sequentially, and sometimes due to the overhead of process switching and the popularity of multi-core CPUs, multithreaded programming is becoming more common. However, in the face of asynchronous tasks, in some scenarios, they have to be converted to synchronous processing, such as multi-threaded crawlers returning uniformly after crawling, and need to convert from asynchronous to synchronous. Yock provides users with two functions: notify and wait. As they literally mean, notify sends semaphores, wait blocks wait semaphores. If the wait doesn't wait for the semaphore, it will block forever. To avoid deadlocks, yock also provides a timeout parameter for the wait function, which is optional and will automatically end blocking if the semaphore cannot be waited for the allotted time.

```lua
---@param sig string
---@param timeout? time
function wait(sig, timeout) end

---@param ... string|time
function waits(...) end

---@param sig string
function notify(sig) end
```
In addition to wait, yock also provides waits for multiple semaphores, except for the more volume, it is no different from waiting.

## coroutine (No stack coroutines)

```lua
co({
    task1 = function(this)
        for i = 1, 5 do
            this.wait("x")
            print("I am task 1, executing step " .. i)
            coroutine.yield()
        end
    end,
    task2 = function(this)
        for i = 1, 10 do
            this.wait("x")
            print("I am task 2, executing step " .. i)
            coroutine.yield()
        end
    end,
    task3 = function(this)
        for i = 1, 10 do
            print("I am task 3, executing step " .. i)
            if i == 5 then
                this.wait("y")
            end
            coroutine.yield()
        end
        this.notify("x")
    end,
    task4 = function(this)
        for i = 1, 10 do
            print("I am task 4, executing step " .. i)
            if i == 9 then
                this.notify("y")
            end
            coroutine.yield()
        end
    end
})
```
Like traditional Lua, Yock encapsulates a simple set of coroutine coroutines to suit the needs of a single-threaded environment. This coroutine requires manual yield, so it is cumbersome to operate, and the single-threaded nature does not make full use of the resources of multi-core CPUs. In addition, it is worth noting that although coroutine is single-threaded, yock is implemented based on the go language, and coroutines are used for scheduling during the period, so the CPU cores running are at least greater than 2, and single-core CPU operation is not supported.

## goroutine (Coroutines with stack)

#### Coroutines are combined with semaphores
```lua
go(function()
    local idx = 0
    while idx ~= 5 do
        print("task 1")
        time.Sleep(1 * time.Second)
        idx = idx + 1
    end
    notify("x")
    print("task1 fine")
end)

go(function()
    print("task 2")
    wait("x")
    print("task2 fine")
end)

go(function()
    time.Sleep(8 * time.Second)
    notify("y")
end)

waits("x", "y")
```
In the above example, it is not difficult to see that waits block the main thread, and three go functions play three asynchronous tasks. Task 1 sends an `x` signal after execution, Task 2 blocks and waits for the `x` signal to arrive during execution, and Task 3 sends a `y` signal at the end of execution. When the xy signal is reached, the main thread ends the blocker exits.

#### Nested coroutines
```lua
go(function()
    local segs = { "a", "b", "c" }
    local i = 1
    while i <= #segs do
        local seg = segs[i]
        go(function()
            local j = 0
            while j < 5 do
                print(seg, j)
                time.Sleep(1 * time.Second)
                j = j + 1
            end
            notify(seg)
        end)
        i = i + 1
    end
    for _, seg in ipairs(segs) do
        wait(seg)
    end
    print("seg fine")
    os.exit(1)
end)
time.Sleep(20 * time.Second)
print("time abort")
```
Yock inherits the advantage of the Go language with stack coroutines, so that Go functions support nested use.