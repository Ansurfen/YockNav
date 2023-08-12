---
title: 进程
---

## nohup()

* 原型
```lua
---@param cmd string
---@return err
function nohup(cmd) end
```

* 介绍

nohup 隐藏窗口地启动后台进程。

## pgrep_info
* name string
* pid integer

## pgrep()

* 原型
```lua
---@param name string
---@return pgrep_info[]
function pgrep(name) end
```

* 介绍

pgrep 根据进程名称返回相关信息。

## ps_info
* name string
* cmd string
* cpu? number
* start? number
* mem? any
* user? string

## ps_opt
* user? boolean # 当设置 true，包含进程的执行者
* cpu? boolean # 当设置 true，包含 cpu 在调用那一刻的使用率
* time? boolean # 当设置 true，包含进程的开始时间
* mem? boolean # 当设置 true，包含进程的内存使用率

## ps()

* 原型
```lua
---@param opt ps_opt|string|integer|nil
---@return table<integer, ps_info>
function ps(opt) end
```

* 介绍

ps 列出所有进程状态，当opt为空时。值得注意的是，默认情况下只有 cmd (命令) 和 name（进程名）字段。如果你想要获得更详细的信息，尝试使用 ps_opt (table) 格式去获取。

除了以上介绍的两种方式，还有两种查询方式，一种是指明 pid，另一个是模糊匹配 cmd 字符串。

* 选项
    - opt, [ps_opt](#ps-opt)

* 示例
```lua
local info, err = ps() -- 抓取所有
yassert(err)
table.dump(info)
ps({ mem = true, user = true }) -- 列出所有进程信息，同时附带内存使用率和进程执行者信息
ps(20) -- 查询 pid 20的进程信息
ps("yock") -- 模糊匹配命令带 yock 的进程信息
```

## kill()

* 原型
```lua
---@param k integer|string
---@return err
function kill(k) end
```

* 介绍

kill 根据给定的 pid 或者 进程名 杀死进程。
