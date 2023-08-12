---
title: pipe
---

pipe object is designed to simulate the pipe operation of terminal on lua.

## pipe
* type integer
* payload any
* clone fun(self: pipe): pipe

## file()

* Prototype
```lua
---@operator add(pipe):pipe
---@operator sub(pipe):pipe
---@vararg string
---@return pipe
function file(...) end
```

* Introduce

file saves file descriptor based-on filename and creates empty file when given file not exist.

* Example
```lua
local a = file("1.txt") -- single file stream
local b = file("2.txt", "3.txt") -- multiple file stream

 # operator reload to reset file stream
local c = a + b -- converge file stream to handle at the same time
local d = c - file("2.txt") -- remove file stream based-on the second parameter
```
## stream()

* Prototype
```lua
---@param str string
---@return pipe
function stream(str) end
```

* Introduce

stream converts string into pipe object, which allow you use operator to handle file stream, just like the pipe operation of terminal.

* Example
```lua
local a = stream("Hello World") # create pipe object
_ = file("test.txt") < a -- write with truncation to test.txt

_ = file("test.txt") <= a -- write with append to test.txt
```
