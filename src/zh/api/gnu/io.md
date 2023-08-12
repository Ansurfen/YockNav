---
title: IO
---

## echo_mode
* "c" # 当文件不存在时创建。
* "t" # 覆盖写打开文件
* "r" # 只读方式打开文件
* "w" # 只写方式打开文件
* "rw" # 以读写的方式打开文件
* "a" # 追加写数据到文件
* "e" # 和 `c` 一起使用，文件必须不存在。
* "s" # 同步打开 I/O.

## echo()

* 原型
```lua
---@vararg string
---@return string[], err
function echo(...) end

---@param opt echo_opt
---@vararg string
---@return string[], err
function echo(opt, ...) end
```

* 选项
    - mode, [echo_mode](#echo-mode) (string), 指明文件如何打开
    - fd, string[], fd 是文件描述符的缩写，用于指明流输出何处。你可以使用文件名作为 fd 去写入文件，或者使用 stdout, stderr 打印到终端。

* 介绍

echo 打印可变字符参数到终端，打印的结果将会被保存到数组中返回。除了原始的字符串，你还能打印环境变量对应的值。

* 示例

重载 1:
```lua
local data, err = echo("Hello", "World")
yassert(#data == 2 and not err)

local data = echo("$Path")
if #data > 0 then
 print("Path: ", data[1]) -- 效果等同于 environ("Path")
end
```

重载 2:
```lua
-- append write
echo({ fd = { "stdout", "test.txt" }, mode = "c|a|rw" }, "Hello World!")

-- truncate write
echo({ fd = { "stdout", "test.txt" }, mode = "c|t|rw" }, "Hello World!")
```

## clear()

* 原型
```lua
function clear() end
```

* 介绍

clear 清空终端的输出。

## cd()

* 原型
```lua
---@param dir string
---@return err
function cd(dir) end
```

* 介绍

cd 改变当前工作目录到指定目录。

## touch()

* 原型
```lua
---@param file string
---@return err
function touch(file) end
```

* 介绍

touch 当文件不存在的时候创建文件。

## cat()

* 原型
```lua
---@param file string
---@return string, err
function cat(file) end
```

* 介绍

cat 读取指定文件的内容。

## ls()

* 原型
```lua
---@param dir string
---@return string[][], err
function ls(dir) end

---@param dir string
---@param callback fun(path: string, info: fileinfo)
---@return nil, err
function ls(dir, callback) end
```

* 介绍

重载 1

ls 列出指定目录下子目录或文件的信息。

`注意`: ls 返回的结果不像其他 gnu 命令。为了节约内存，它被设置为数组形式去存储信息。你能够在下面看到它详细信息。

重载 2

ls 递归给定的目录，能够在遍历时设置回调函数，接收访问的路径以及路径信息。

* 格式信息

[1] 权限, string, e.g. -rwxrwxrwx, -rw-rw-rw-

[2] 大小, number

[3] 修改事件, string, e.g. Aug  6 15:26

[4] 文件名, string

* 示例
```lua
ls(".", function(path, info)
     print(path)
end)
```

## mkdir()

* 原型
```lua
---@vararg string
---@return err
function mkdir(...) end
```

* 介绍

mkdir 递归创建目录。

## cp_opt
* recurse?, boolean (default false), 递归复制指定的目录或文件
* force?, boolean (default false), 当为 true，覆盖同名文件

## cp()

* 原型
```lua
---@param src string
---@param dst string
function cp(src, dst) end

---@param opt cp_opt
---@param path table<string, string>
function cp(opt, path) end
```

* 介绍

cp 复制文件或目录从 src 到 dst

* 选项
    - recurse?, boolean (default false), 递归复制指定的目录或文件
    - force?, boolean (default false), 当为 true，覆盖同名文件

* 示例
```lua
--`注意`: 这不支持递归，如果你要做它，看另一个重载。
cp("a", "b")

cp({ recurse = true }, {
     ["a"] = "b",
     ["c"] = "d",
})
```

## mv()

* 原型
```lua
---@param src string
---@param dst string
function mv(src, dst) end
```

* 介绍

mv moves directory or file from src to dst, supporting recurse

## rm_opt
* safe? boolean # is the same with recurse field. Please use recurse instead of it, and it'll be deprecated in the future.
* pattern? string # remove directory or file to be matched if pattern's length is more than 0, and obeys golang's regular expressions.
* recurse? boolean # recurses to remove directory when set true

## rm()

* Prototype
```lua
--- overload 1
---@param opt rm_opt
---@vararg string
---@return err
function rm(opt, ...) end

--- overload 2
---@vararg string
---@return err
function rm(...) end
```

* Introduce

overload 1:

rm removes specified directories or files, and has one function overload of which capacity just like rmdir command on bash.

overload 2:

rm removes empty directories or single files to be specified, and just like rmdir command on bash. If you want to remove directory with recurse, see its function overload.

* Option
    - recurse?, boolean (default false), recurses to remove directory when set true
    - pattern?, string, remove directory or file to be matched if pattern's length is more than 0, and obeys golang's regular expressions.
    - safe?, boolean (default false), is the same with recurse field. Please use recurse instead of it, and it'll be deprecated in the future.

* Example
```lua
--just like rmdir, which only removes empty directory or single files
rm("/a", "/b")

-- delete file with recuse
rm({ recurse = true }, "/a", "/b")

-- remove with recurse and pattern
rm({ recurse = true, pattern = ".exe$" }, "/a")
```

## rename()

* Prototype
```lua
---@param old string
---@param new string
function rename(old, new) end
```

* Introduce

rename resets filename from old to new

## find_opt
* pattern? string # indicates rule to match directories or files, and writing format same as golang's regular expressions.
* dir? boolean # match directory when set true
* file? boolean # match file when set true

## find()

* Prototype
```lua
---@param opt find_opt
---@param path string
---@return table, err
function find(opt, path) end

---@param path string
---@return boolean
function find(path) end
```

* Introduce

overload 1

find scans specified directory with recurse and returns matched results.

overload 2

find returns whether file or directory exist according to path.

* Option
    - opt, [find_opt](#find-opt)

* Example
```lua
find({
    dir = false,
    pattern = "\\.lua"
}, "/script")

print(find("./test.txt"))
```

## tarc()

* Prototype
```lua
---@param src string
---@param dst string
function tarc(src, dst) end
```

* Introduce

tarc compresses src to dst base on tar.gz algorithm. Directly using it isn't recommended, you can use compress to instead of it. The compress function abstract tarc and zipc to fit in different platform default format.

## zipc()

* Prototype
```lua
---@param src string
---@param dst string
function zipc(src, dst) end
```

* Introduce

zipc compresses src to dst base on zip algorithm. Directly using it isn't recommended, you can use compress to instead of it. The compress function abstract tarc and zipc to fit in different platform default format.

## untar()

* Prototype
```lua
---@param src string
---@param dst string
function untar(src, dst) end
```

* Introduce

untar uncompress src to dst base on tar.gz algorithm. Directly using it isn't recommended, you can use uncompress to instead of it. The uncompress function abstract untar and unzip to fit in different platform default format.

## unzip()

* Prototype
```lua
---@param src string
---@param dst string
function unzip(src, dst) end
```

* Introduce

unzip uncompress src to dst base on zip algorithm. Directly using it isn't recommended, you can use uncompress to instead of it. The uncompress function abstract unzip and unzip to fit in different platform default format.

## compress()

* Prototype
```lua
---@param src string
---@param dst string
function compress(src, dst) end
```

* Introduce

compress compresses src to dst base on tar.gz or zip according to filename extension.

* Example
```lua
compress("./test", "test.zip")
compress("./test", "test.tar.gz")
```

## uncompress()

* Prototype
```lua
---@param src string
---@param dst string
---@return string, err
function uncompress(src, dst) end
```

* Introduce

uncompress uncompress src to dst base on tar.gz or zip according to filename extension, and returns an absolute path combining dst and root directory of compress package when uncompressed successfully. 

* Example
```lua
uncompress("./test.zip", "./test")
uncompress("./test.tar.gz", "./test")
```

## write()

* Prototype
```lua
---@param file string
---@param data string
---@return err
function write(file, data) end
```

* Introduce

write writes data to file and creates file when file isn't exist.

## read()

* Prototype
```lua
---@param name string
function read(name) end
```

* Introduce

read blocks and wait for inputting from user, and builds mapping relationship from given name to input's value.
