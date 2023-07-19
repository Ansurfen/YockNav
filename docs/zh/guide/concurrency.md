---
title: yock并发编程
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

Yock拥有异步任务转同步任务的能力，以及有栈和无栈协程并发编程的特性。

## 信号量

在开始异步编程之前，先引入同步的概念。正常情况下代码是顺序执行的，有时候迫于进程切换的开销，以及多核CPU的普及，多线程编程日益普遍。但是面对异步的任务，在某些场景下又不得不转换成同步处理，例如多线程爬虫都爬完后统一返回，需要从异步转换成同步。yock为用户提供了两个函数notify和wait。正如他们的字面意思，notify发送信号量，wait阻塞等待信号量。如果wait一直等不到信号量，它将永远阻塞下去。为了避免死锁的情况发生，yock也为wait函数提供了timeout参数，这是可选的，如果在规定的时间内无法等到信号量，那将自动结束阻塞。

```lua
---@param sig string
---@param timeout? time
function wait(sig, timeout) end

---@param ... string|time
function waits(...) end

---@param sig string
function notify(sig) end
```
除了wait外，yock还提供了等待多个信号量的waits，除了阻塞信号量比较多外，使用起来和wait别无二致。

## coroutine (无栈协程)

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
像传统lua语言一样，yock封装了一套简单的coroutine协程以适应单线程环境的需要。这个协程需要手动挂起(yield)，所以操作起来比较繁琐，同时单线程的特性也没法充分利用多核CPU的资源。另外，值得注意的是，虽然coroutine是单线程的，但是yock是基于go语言实现的，期间用了协程进行调度，因此运行的CPU核心最少大于2，不支持单核CPU运行。

## goroutine (有栈协程)

#### 协程与信号量相结合
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
上面的例子我们不难看出，waits阻塞了主线程，三个go函数起了三个异步任务。任务1执行完后会发出`x`的信号，任务2在执行的过程中阻塞等待`x`信号的到来，而任务3在执行结束发送`y`信号。当xy信号都到达时，主线程结束阻塞程序退出。

#### 嵌套协程
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
yock继承了go语言有栈协程的优势，使得go函数支持嵌套使用。