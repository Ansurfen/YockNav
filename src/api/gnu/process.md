---
title: process
---

## nohup()

* Prototype
```lua
---@param cmd string
---@return err
function nohup(cmd) end
```

* Introduce

nohup launches backend process hidden window.


## pgrep_info
* name string
* pid integer

## pgrep()

* Prototype
```lua
---@param name string
---@return pgrep_info[]
function pgrep(name) end
```

* Introduce

pgrep returns results according to process's name.

## ps_info
* name string
* cmd string
* cpu? number
* start? number
* mem? any
* user? string

## ps_opt
* user? boolean # includes process's launcher when set true
* cpu? boolean # includes cpu usage ratio at calling moment when set true
* time? boolean # includes process's start time when set true
* mem? boolean # includes process's memory usage ratio when set true

## ps()

* Prototype
```lua
---@param opt ps_opt|string|integer|nil
---@return table<integer, ps_info>
function ps(opt) end
```

* Introduce

ps lists all process state when opt is nil. It's worthy of noting that there only are cmd (command) and name (process's name) field in default. If you want to get detailed info, try to use ps_opt (table) format to make it. 
 
Except above two method introduced, there are two way to query, and the one is indicated pid, and the other passes by string to do fuzzy matching according to cmd.

* Option
    - opt, [ps_opt](#ps-opt)

* Example
```lua
local info, err = ps() -- fetches all
yassert(err)
table.dump(info)
ps({ mem = true, user = true }) -- gets all with launcher and memory usage ratio info
ps(20) -- queries process of pid 20
ps("yock") -- fuzzy queries process of command with yock
```

## kill()

* Prototype
```lua
---@param k integer|string
---@return err
function kill(k) end
```

* Introduce

kill kills process according to pid or process's name.
