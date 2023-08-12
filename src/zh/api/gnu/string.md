---
title: 字符串
---

## grep_opt
* case? boolean, 决定是否忽略大小写
* color? string, 设置输出的颜色
* pattern string, 指明匹配的模式
* file? string[], 从文件中搜索匹配的结果，它的优先级高于 str 字段，者意味着 str 将失效当设置 file 字段。
* str? string[], 从字符串数组中搜索匹配的结果。当 file 字段设置，它将失效，且不支持带换行符的字符串。

## grep()

* 原型
```lua
---@param opt grep_opt
---@return string, err
function grep(opt) end
```

* 介绍

grep 绑定 [ripgrep](https://github.com/BurntSushi/ripgrep) 实现跨平台，这意味着它和 bash 上的原生 grep不同，它能够快速，简单，方便的搜索字符串。

* 选项:
    - opt, [grep_opt](#grep-opt)

* 示例
```lua
-- 根据字符串搜索
local res, err = grep({
    pattern = "abc",
    str = { "abcd", "bcd", "abbc" }
})
yassert(err)
table.dump(strings.Split(res, "\n"))

-- 搜索文件
write("./test.txt", "get\n get abc\n getGeT\nGET")
local res, err = grep({
    case = true,
    color = "never",
    pattern = "get",
    file = { "./test.txt" }
})
yassert(err)
print(res)
```

## awk_opt
* prog string|string[] # 指明一个或多个规则去提取字符串。 `注意`: 单规则 (string) 只支持显式写入 prog 字符串, 而多规则 (string[]) 只支持从 .awk 文件中载入。
* var? table<string, string|number|integer> # 定义键值变量，它能够在 prog 中利用 key 使用。
* file? string[] # extracts matched results from files and its priority is more than str field, which means str field will be unavailable when set file field
* str? string[] # extracts matched results from string array and is unavailable when set file field, no supporting string with line break ('\n')


## awk()

* 原型
```lua
---@param opt awk_opt
---@return string, err
function awk(opt) end
```

* 介绍

awk binds for [goawk](https://github.com/benhoyt/goawk) to implement cross platform, which means it's different with native awk on bash, and can handle or extract string with fast, easy, convenient.

* 选项
    - opt, [awk_opt](#awk-opt)

* 示例
```lua
-- extracts from string
local new, err = awk({
    prog = "{ print $1 + $3 }",
    str = { "1 2 3" }
})
yassert(err)
table.dump(strings.Split(new, "\n"))

-- extracts and tests to define variable
local new, err = awk({
    prog = "{ print $1, name }",
    str = { "'Hello World'" },
    var = {
        name = "yock"
    }
})
yassert(err)
table.dump(strings.Split(new, "\n"))

-- extracts based-on rule from prog files
local res, err = awk({
    prog = {
        "./rule.awk",
        "./rule2.awk"
    },
    file = {
        "./test.txt"
    },
    var = {
        name = "yock",
        age = 20
    }
})
yassert(err)
print(res)
```

## sed_opt
* old string # old string to be replaced
* new string # new string that replace old string
* file? string[] # replaces matched results from files and its priority is more than str field, which means str field will be unavailable when set file field
* str? string[] # replaces matched results from string array and is unavailable when set file field, no supporting string with line break ('\n')


## sed()

* Prototype
```lua
---@param opt sed_opt
---@return string, err
function sed(opt) end
```

* Introduce

sed binds for [sd](https://github.com/chmln/sd)  to implement cross platform, which means it's different with native sed on bash, and can handle or replace string with fast, easy, convenient.

* Option
    - opt, [sed_opt](#sed-opt)

* Example
```lua
-- replaces content in string
local res, err = sed({
    old = "((([])))",
    new = " ",
    str = { "lots((([]))) of special chars" }
})
yassert(err)
print(res)

-- replaces content in files
res, err = sed({
    old = "(.*)",
    new = "//$1",
    file = { "./test.txt" },
})
print(out, err)
```