---
title: coroutine
category:
  - API
  - sync
---

## go()

* Prototype
```lua
---@async
---@param callback fun()
function go(callback) end
```

* Introduce

yock inherits golang's goroutine, allowing you use it in lua script with easy, fast and free. Less like lua native coroutine, the goroutine supports nested call. 

* Example
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
