---
title: env
index: false
icon: laptop-code
category:
  - API
  - sync
---

## env
* args string[]
* platform platform
* flags table
* job string
* workdir string
* yock_path string
* conf yockConf
* yock_tmp string
* yock_bin string
* params table<string, table<string, starType>>?

## platform
* OS string|"aix"|"android"|"darwin"|"dragonfly"|"freebsd"|"hurd"|"illumos"|"ios"|"js"|"linux"|"nacl"|"netbsd"|"openbsd"|"plan9"|"solaris"|"windows"|"zos"
* Ver string
* Arch string|"386"|"amd64"|"amd64p32"|"arm"|"armbe"|"arm64"|"arm64be"|"loong64"|"mips"|"mipsle"|"mips64"|"mips64le"|"mips64p32"|"mips64p32le"|"ppc"|"ppc64"|"ppc64le"|"riscv"|"riscv64"|"s390"|"s390x"|"sparc"|"sparc64"|"wasm"

## platform:Exf()

* Prototype
```lua
---@return string
function platform:Exf() end
```

* Introduce

Exf returns executable file extension name in default.  windows: .exe  posix:
## platform:Script()

* Prototype
```lua
---@return string
function platform:Script() end
```

* Introduce

Script returns script extension name in default.  windows: .bat  posix: .sh
## platform:Zip()

* Prototype
```lua
---@return string
function platform:Zip() end
```

* Introduce

Zip returns zip extension name in default.  windows: .zip  posix: .tar.gz

