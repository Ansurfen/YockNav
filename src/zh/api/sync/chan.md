---
title: channel
icon: laptop-code
category:
  - API
  - sync
---

### channel.make()

* Prototype
```lua
---@return chan
function channel.make() end
```

* Introduce
make returns a new chan

### channel.select()

* Prototype
```lua
---@vararg any
function channel.select(...) end
```

* Introduce
select just like golang's select grammatical sugar, which is designed for handling chan operation. Therefore, every case must be a available chan operation, send or receive. select will listen all message from given case and execute corresponding function. If there are multiple chan is ready at the moment, select will choose to execute with random. On the contrary, if none are ready, select will execute default case when it exists.

* Syntax
    - {"|<-", chan, fun(ok: bool, v: any)}, callback when message was received
    - {"<-|", chan, v: any}, send message from chan
    - {"default", fun()}, if none are ready, execute default case

* Example
```lua
local ch = channel.make()
go(function()
    while true do
        channel.select({ "|<-", ch, function(ok, v) -- wait message from chan
            print(ok, v)
        end }, { "default", function() -- if none, execute default case
            print("do nothing")
            time.Sleep(500 * time.Millisecond)
        end })
    end
end)
go(function()
    local i = 1
    while true do
        channel.select({ "<-|", ch, i }) -- continuous send i as message per second
        i = i + 1
        time.Sleep(1 * time.Second)
    end
end)
time.Sleep(20 * time.Second)
```