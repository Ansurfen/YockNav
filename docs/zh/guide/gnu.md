---
title: 利用yock代替batch和shell脚本
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

`注意`: 由于GNU命令过于庞杂，因此对于相关函数以代码和注释的形式穿插介绍。

## 原生执行

调用终端直接执行，对于不同平台相同命令不同flag并不具备适配的能力。因此，如果你想获得更好的跨平台能力，最好仅使用原本就跨平台的命令。例如，支持跨平台的命令: go mod, npm; 不支持跨平台的命令: 操作系统原生命令（tasklist, ps）。

```lua
-- 根据环境取别名，这个别名是存在于yock内存中的，而不是直接在终端执行
local env = "dev"
if env == "dev" then
    alias("CC", "go.exe")
else
    alias("CC", "go")
end
-- unalias("CC") -- 删除映射
-- 调用子进程执行，在执行前会先映射别名
sh("$CC version")
-- 以下为sh命令不同重载形式
sh("echo a", "echo b")

sh([[
echo a
echo b
]])
```

## IO相关

```lua
mkdir("a", "b") -- 创建a, b目录
-- ls命令返回include目录下面子文件和子目录，以数组的形式
-- 在lua中数组和map都共用在table数据结构中
local res = ls("include")
if type(res) == "table" then -- 类型判断是否为数组
    table.dump(res)
elseif type(res) == "string" then -- 判断是否为字符串，可以利用awk grep提取，而不是对象化操作数据
    print(res)
end
-- 清屏
clear()
-- 创建一个a.txt的空文件
touch("a.txt")
-- 输出到屏幕上
echo("Hello", "World")
-- fd 为 file descriptor 文件描述符的缩写, stdout 为屏幕
-- mode c (创建) | t (覆盖写) | rw(读写打开) 文件打开的模式
echo({ fd = { "stdout", "test.txt" }, mode = "c|t|rw" }, "Hello World!")
-- mode a(追加写)
echo({ fd = { "stdout", "test.txt" }, mode = "c|a|rw" }, "Hello World!")
-- 类比rmdir 只能删除没有文件的空目录
rm("a")
-- 不安全的删除，会递归删除a目录下所有文件和子目录
rm({ safe = false }, "a")
-- 将a目录拷贝到b目录下
cp("a", "b")
-- 递归将src拷贝到dst下面，map接受的参数为 源目录(src)->目标目录(dst)
cp({recurse = true}, {
    ["a"] = "b"
})
-- 将a目标移动到b目录下面，这是递归的
mv("a", "b")
-- 读取a.txt的内容
print(cat("a.txt"))
-- 等待用户输入从键盘
read("name")
sh([[echo "Hello $name"]])
```

## 工作区相关
```lua
cd("..")
--- 返回当前工作目录
print(pwd())
-- 获取yock可执行文件的绝对路径
print(whereis("yock"))
-- 向环境变量写入a = b, 注意这是永久性
export("a", "b")
-- 向环境变量a追加写
export("a:c")
-- 删除环境变量a
unset("a")
```

## 权限相关
```lua
-- 查看当前用户
print(whoami())
-- 类比 chmod 777 yock.exe
chmod("yock.exe", 777)
-- chown("")
-- 以管理员权限打开
sudo("yock")
```

## 进程相关
```lua
-- 启动后台进程
nohup("yock")
-- 打印出pid为20的进程列表
table.dump(ps(20))
-- 打印出启用命令为yock的进程列表
table.dump(ps("yock"))
-- 不过滤进程列表
ps({})
-- 显示进程的某些参数，如运行的用户，内存信息，CPU信息，启动时间
ps({ user = true, mem = true, cpu = true, time = true })
-- 显示命令为test的进程列表
local procs = pgrep("test")
for i = 1, #procs, 1 do
    print(procs[i].Pid, procs[i].Name)
end
-- 杀死指定进程，有两种重载，一个模糊匹配命令，一个为PID
kill("test")
kill(8080)
```

## 网络相关
```lua
table.dump(ifconfig())
-- 根据端口号查找相应的信息
print("PID", "Proto", "State","Local")
for _, info in ipairs(lsof(58838)) do
    print(info.pid, info.proto, info.state, info.Local)
end
```

## 字符串处理

为了实现字符串三剑客跨平台，yock内置第三方实现以代替它们。
原命令|替代
-|:-:|-
grep|[ripgrep](https://github.com/BurntSushi/ripgrep)
awk|[goawk](https://github.com/benhoyt/goawk)
sed|[sd](https://github.com/chmln/sd)

```lua
grep({
    case = true,
    color = "never",
    pattern = "get",
    file = { "awk_test.txt" }
})
```

```lua
awk({
    prog = {
        "../bin/test.awk",
        "../bin/test2.awk"
    },
    file = {
        "awk_test.txt"
    },
    var = {
        name = "ansurfen",
        age = 20
    }
})
```

```lua
local out, err = sed({
    old = "(.*)",
    new = "//$1",
    file = { "t.txt" },
})
print(out, err)
```

## 实验性命令
> 以下命令对平台适配程度很高，因此在目前yock还不稳定的情况下最好不要用于生产环境。

#### systemctl

#### crontab

#### iptables