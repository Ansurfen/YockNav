---
title: string
---

## grep_opt
* case? boolean, determine whether case sensitivity ignored
* color? string, set the color format for output
* pattern string, indicates a pattern to match string
* file? string[], searches matched results from files and its priority is more than str field, which means str field will be unavailable when set file field
* str? string[], searches matched results from string array and is unavailable when set file field, no supporting string with line break ('\n')

## grep()

* Prototype
```lua
---@param opt grep_opt
---@return string, err
function grep(opt) end
```

* Introduce

grep binds for [ripgrep](https://github.com/BurntSushi/ripgrep) to implement cross platform, which means it's different with native grep on bash, and can search string with fast, easy, convenient.

* Option:
    - opt, [grep_opt](#grep-opt)

* Example
```lua
-- queries according to string
local res, err = grep({
    pattern = "abc",
    str = { "abcd", "bcd", "abbc" }
})
yassert(err)
table.dump(strings.Split(res, "\n"))

-- queries files
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
* prog string|string[] # indicates single or multiple rules to extract string. `NOTE`: the single rule (string) only supports to write explicit prog string, but multiple rules (string[]) only support loading from .awk files.
* var? table<string, string|number|integer> # defines keyed variable and can use its in prog through key.
* file? string[] # extracts matched results from files and its priority is more than str field, which means str field will be unavailable when set file field
* str? string[] # extracts matched results from string array and is unavailable when set file field, no supporting string with line break ('\n')


## awk()

* Prototype
```lua
---@param opt awk_opt
---@return string, err
function awk(opt) end
```

* Introduce

awk binds for [goawk](https://github.com/benhoyt/goawk) to implement cross platform, which means it's different with native awk on bash, and can handle or extract string with fast, easy, convenient.

* Option
    - opt, [awk_opt](#awk-opt)

* Example
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