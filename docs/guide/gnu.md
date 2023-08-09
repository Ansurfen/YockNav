---
title: Use yock instead of batch and shell scripts
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

`NOTE`: Because GNU commands are too bulky, related functions are interspersed with code and comments.

## Native execution

The calling terminal is directly executed, and it does not have the ability to adapt to different flags for the same command on different platforms. Therefore, if you want to get better cross-platform capabilities, it is best to use only commands that are inherently cross-platform. For example, commands that support cross-platform: go mod, npm; Cross-platform commands are not supported: OS-native commands (tasklist, ps).

```lua
-- Depending on the environment, this alias exists in yock memory and is not executed directly in the terminal
local env = "dev"
if env == "dev" then
    alias("CC", "go.exe")
else
    alias("CC", "go")
end
-- unalias("CC") -- delete mapping
-- The child process is called for execution, and the alias is mapped before execution
sh("$CC version")
-- The following are the different overloads of the sh command
sh("echo a", "echo b")

sh([[
echo a
echo b
]])
```

## IO related

```lua
mkdir("a", "b") -- Create directories a and b
-- The ls command returns the subfiles and subdirectories below the include directory in the form of arrays
-- In Lua, arrays and maps are shared in the table data structure
local res = ls("include")
if type(res) == "table" then -- The type determines whether it is an array
    table.dump(res)
elseif type(res) == "string" then -- To determine whether it is a string, you can use awk, grep to extract the data instead of objectifying the operation data
    print(res)
end
-- clear screen
clear()
-- Create an empty file for a .txt
touch("a.txt")
-- Output to the screen
echo("Hello", "World")
-- fd is an abbreviation for file descriptor and stdout is screen
-- mode c (create) | t (overwrite write) | rw (read-write open) The mode in which the file is opened
echo({ fd = { "stdout", "test.txt" }, mode = "c|t|rw" }, "Hello World!")
-- mode a(append write)
echo({ fd = { "stdout", "test.txt" }, mode = "c|a|rw" }, "Hello World!")
-- By analogy, rmdir can only delete empty directories with no files
rm("a")
-- An unsafe deletion will recursively delete all files and subdirectories in directory a
rm({ safe = false }, "a")
-- Copy directory a to directory b
cp("a", "b")
-- Recursively copy src under dst, and the parameters accepted by map are source directory (src) -> destination directory (dst)
cp({recurse = true}, {
    ["a"] = "b"
})
-- Move target a below directory b, which is recursive
mv("a", "b")
-- Read the contents of a.txt
print(cat("a.txt"))
-- read input from keyboard
read("name")
sh([[echo "Hello $name"]])
```

## Workspace-related
```lua
cd("..")
--- Returns the current working directory
print(pwd())
-- Get the absolute path to the yock executable file
print(whereis("yock"))
-- Write a = b to the environment variable, noting that this is permanent
export("a", "b")
-- Append writes to environment variable a
export("a:c")
-- Delete the environment variable a
unset("a")
```

## Permissions-related
```lua
-- View the current user
print(whoami())
-- Analogy with chmod 777 yock.exe
chmod("yock.exe", 777)
-- chown("")
-- Open with administrator privileges
sudo("yock")
```

## Process-related
```lua
-- Start the background process
nohup("yock")
-- Print out a list of processes with a PID of 20
table.dump(ps(20))
-- Print out a list of processes with the enable command yock
table.dump(ps("yock"))
-- The list of processes is not filtered
ps()
-- Displays certain parameters of the process, such as running user, memory information, CPU information, startup time
ps({ user = true, mem = true, cpu = true, time = true })
-- Displays a list of processes with the command test
local procs = pgrep("test")
for i = 1, #procs, 1 do
    print(procs[i].pid, procs[i].name)
end
-- To kill the specified process, there are two overloads, one fuzzy match command and one PID
kill("test")
kill(8080)
```

## Network related
```lua
table.dump(ifconfig())
-- Find the appropriate information based on the port number
print("PID", "Proto", "State","Local")
for _, info in ipairs(lsof(58838)) do
    print(info.pid, info.proto, info.state, info.Local)
end
```

## String handling

To implement the string three musketeers cross-platform, Yock has built-in third-party implementations to replace them.
Original|Substitute
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

## Experimental commands
> The following commands are highly suitable for the platform, so it is best not to use them in production environments when yock is currently unstable.

#### systemctl

#### crontab

#### iptables