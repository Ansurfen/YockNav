---
title: gnu
---

### echo_mode
* "c" # create a new file if none exists.
* "t" # truncate regular writable file when opened.
* "r" # open the file read-only.
* "w" # open the file write-only.
* "rw" # open the file read-write.
* "a" # append data to the file when writing.
* "e" # used with `c`, file must not exist.
* "s" # open for synchronous I/O.

---
### echo()

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

echo prints variable string argument on terminal andreturns an array that saves every result of print.Except primitive string, you also print environment variablecorresponding value.

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

---
### whoami()

* Prototype
```lua
---@return string, err
function whoami() end
```

* Introduce

whoami returns hostname

---
### clear()

* Prototype
```lua
function clear() end
```

* Introduce

clear clears outputs on terminal.

---
### cd()

* Prototype
```lua
---@param dir string
---@return err
function cd(dir) end
```

* Introduce

cd changes the current working directory to the named directory.

---
### touch()

* Prototype
```lua
---@param file string
---@return err
function touch(file) end
```

* Introduce

touch creates an empty file when file isn't exist.

---
### cat()

* Prototype
```lua
---@param file string
---@return string, err
function cat(file) end
```

* Introduce

cat reads content from specified file.

---
### ls()

* Prototype
```lua
---@param dir string
---@return string[][], err
function ls(dir) end
```

* Introduce

ls lists the information of directory or file according to specified directory.

`NOTE`: results to be returned by ls isn't like other gun command. In order to save memory, it's set array format to store information. You can see detail in the following.

* Format of info

[1] permission, string, e.g. -rwxrwxrwx, -rw-rw-rw-

[2] size, number

[3] mod_time, string, e.g. Aug  6 15:26

[4] filename, string

---
### chmod()

* Prototype
```lua
---@param name string
---@param mode number
---@return err
function chmod(name, mode) end
```

* Introduce

chmod changes the mode of the named file to mode. If the file is a symbolic link, it changes the mode of the link's target.

---
### chown()

* Prototype
```lua
---@param name string
---@param uid number
---@param gid number
---@return err
function chown(name, uid, gid) end
```

* Introduce

chown changes the numeric uid and gid of the named file. If the file is a symbolic link, it changes the uid and gid of the link's target. A uid or gid of -1 means to not change that value.

---
### mkdir()

* Prototype
```lua
---@vararg string
---@return err
function mkdir(...) end
```

* Introduce

mkdir recurses to create directory.

---
### cp_opt
* recurse?, boolean (default false), recurses to copy specified file or directory
* force?, boolean (default false), covers file with the same name when set true

---
### cp()

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

---
### mv()

* Prototype
```lua
---@param src string
---@param dst string
function mv(src, dst) end
```

* Introduce

mv moves directory or file from src to dst, supporting recurse

---
### pwd()

* Prototype
```lua
---@return string, err
function pwd() end
```

* Introduce

pwd returns working directory for current program

---
### rm_opt
* safe? boolean # is the same with recurse field. Please use recurse instead of it, and it'll be deprecated in the future.
* pattern? string # remove directory or file to be matched if pattern's length is more than 0, and obeys golang's regular expressions.
* recurse? boolean # recurses to remove directory when set true

---
### rm()

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
# just like rmdir, which only removes empty directory or single files
rm("/a", "/b")

# delete file with recuse
rm({ recurse = true }, "/a", "/b")

# remove with recurse and pattern
rm({ recurse = true, pattern = ".exe$" }, "/a")
```

---
### rename()

* Prototype
```lua
---@param old string
---@param new string
function rename(old, new) end
```

* Introduce

rename resets filename from old to new

---
### sudo()

* Prototype
```lua
---@param cmd string
function sudo(cmd) end
```

* Introduce

sudo runs command with administrator permission

