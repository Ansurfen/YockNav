---
title: IO
---

## echo_mode
* "c" # create a new file if none exists.
* "t" # truncate regular writable file when opened.
* "r" # open the file read-only.
* "w" # open the file write-only.
* "rw" # open the file read-write.
* "a" # append data to the file when writing.
* "e" # used with `c`, file must not exist.
* "s" # open for synchronous I/O.

## echo()

* Prototype
```lua
---@vararg string
---@return string[], err
function echo(...) end

---@param opt echo_opt
---@vararg string
---@return string[], err
function echo(opt, ...) end
```

* Option
    - mode, [echo_mode](#echo-mode) (string), indicates how files are opened
    - fd, string[], fd is short for file descriptor, which used for indicating where stream outputs. You can use filename as fd to write file, or print terminal by stdout, stderr.

* Introduce

echo prints variable string argument on terminal and returns an array that saves every result of print. Except primitive string, you also print environment variable corresponding value.

* Example

overload 1:
```lua
local data, err = echo("Hello", "World")
yassert(#data == 2 and not err)

local data = echo("$Path")
if #data > 0 then
 print("Path: ", data[1]) -- effect like environ("Path")
end
```

overload 2:
```lua
-- append write
echo({ fd = { "stdout", "test.txt" }, mode = "c|a|rw" }, "Hello World!")

-- truncate write
echo({ fd = { "stdout", "test.txt" }, mode = "c|t|rw" }, "Hello World!")
```

## clear()

* Prototype
```lua
function clear() end
```

* Introduce

clear clears outputs on terminal.

## cd()

* Prototype
```lua
---@param dir string
---@return err
function cd(dir) end
```

* Introduce

cd changes the current working directory to the named directory.

## touch()

* Prototype
```lua
---@param file string
---@return err
function touch(file) end
```

* Introduce

touch creates an empty file when file isn't exist.

## cat()

* Prototype
```lua
---@param file string
---@return string, err
function cat(file) end
```

* Introduce

cat reads content from specified file.

## ls()

* Prototype
```lua
---@param dir string
---@return string[][], err
function ls(dir) end

---@param dir string
---@param callback fun(path: string, info: fileinfo)
---@return nil, err
function ls(dir, callback) end
```

* Introduce

overload 1

ls lists the information of directory or file according to specified directory.

`NOTE`: results to be returned by ls isn't like other gun command. In order to save memory, it's set array format to store information. You can see detail in the following.

overload 2

ls recurses given directory, and can set callback that recives visited path and path's information while walking dir.

* Format of info

[1] permission, string, e.g. -rwxrwxrwx, -rw-rw-rw-

[2] size, number

[3] mod_time, string, e.g. Aug  6 15:26

[4] filename, string

* Example
```lua
ls(".", function(path, info)
     print(path)
end)
```

## mkdir()

* Prototype
```lua
---@vararg string
---@return err
function mkdir(...) end
```

* Introduce

mkdir recurses to create directory.

## cp_opt
* recurse?, boolean (default false), recurses to copy specified file or directory
* force?, boolean (default false), covers file with the same name when set true

## cp()

* Prototype
```lua
---@param src string
---@param dst string
function cp(src, dst) end

---@param opt cp_opt
---@param path table<string, string>
function cp(opt, path) end
```

* Introduce

cp copies file or directory from src to dst

* Option
    - recurse?, boolean (default false), recurses to copy specified file or directory
    - force?, boolean (default false), covers file with the same name when set true

* Example
```lua
--`NOTE`: It isn't support recurse, and see other overload
--when you want to do it.
cp("a", "b")

cp({ recurse = true }, {
     ["a"] = "b",
     ["c"] = "d",
})
```

## mv()

* Prototype
```lua
---@param src string
---@param dst string
function mv(src, dst) end
```

* Introduce

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
