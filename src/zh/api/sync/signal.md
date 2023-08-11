---
title: signal
icon: laptop-code
category:
  - API
  - sync
---

## wait()

* Prototype
```lua
---@param sig string
---@param timeout? time
function wait(sig, timeout) end
```

* Introduce

wait blocks self and waits for sig. If lack signal, it'll block for ever. If not, you can set deadline to unblock when timeout. 

* Example
```lua
# waiting for three second
go(function()
     time.Sleep(3 * time.Second)
     notify("x")
end)
wait("x")
# do something

# the following code will block for ever if don't wait `blocked` signal.
wait("blocked")

# sets deadline to unblock, and it does not mean signal arrives and is received.
wait("blocked", time.Second * 20)
```

## waits()

* Prototype
```lua
---@param ... string|time
function waits(...) end
```

* Introduce

waits just like wait, blocks self and waits for sig supporting for setting deadline to unblock when timeout. The difference is waits can collect a variable number of signals than wait. 

* Example
```lua
# just like wait when uses
waits("x", "y", time.Second * 20)
```

## notify()

* Prototype
```lua
---@param sig string
function notify(sig) end
```

* Introduce

notify sends sig to signal stream, which can unblock wait or waits. 

* Example
```lua
# waiting for three second util signal `x` was sent and received
go(function()
     time.Sleep(3 * time.Second)
     notify("x")
end)
wait("x")
```

