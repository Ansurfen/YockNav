---
title: ssh
---

## sshClient
* Exec fun(self: sshClient, cmd: string): string, err # execute command on remote host.
* Sh fun(self: sshClient, file: string, ...): string, err # upload local script to remote, create temporary file and execute it on remote host. File-name extension is set automatically based-on remote's os (windows: .bat, posix: .sh).
* Shell fun(self: sshClient) # redirect stdio, stdin, stderr to this terminal and allocate a shell to handle.
* OS fun(self: sshClient): string # returns os for remote host. If not get, returns unknown. Its implement is execute `echo $OSTYPE` and `echo %OS%` to infer.
* Get fun(self: sshClient, src: string, dst: string): err # fetches src from remote host and saves it to dst on local. Just like ftp, but it's based-on sftp protocol.
* Put fun(self: sshClient, src: string, dst: string): err # upload src on local to dst on remote. Just like ftp, but it's based-on sftp protocol.

## sshClient:Exec()

* Prototype
```lua
---@param cmd string
---@return string, err
function sshClient:Exec(cmd) end
```

* Introduce


## sshClient:Sh()

* Prototype
```lua
---@param file string
---@vararg any
---@return string, err
function sshClient:Sh(file, ...) end
```

* Introduce


## sshClient:OS()

* Prototype
```lua
---@return string
function sshClient:OS() end
```

* Introduce


## sshClient:Shell()

* Prototype
```lua
function sshClient:Shell() end
```

* Introduce


## sshClient:Get()

* Prototype
```lua
---@param src string
---@param dst string
---@return err
function sshClient:Get(src, dst) end
```

* Introduce


## sshClient:Put()

* Prototype
```lua
---@param src string
---@param dst string
---@return err
function sshClient:Put(src, dst) end
```

* Introduce


## ssh_opt
* user string # account what you want to login in on remote
* pwd string # user's password
* ip string # remote ip
* port integer # running port of ssh server
* network string # indicates network protocol (tcp, udp) to dial
* redirect boolean

## ssh()

* Prototype
```lua
---@param opt ssh_opt
---@param cb fun(client: sshClient)
---@return sshClient
function ssh(opt, cb) end
```

* Introduce

ssh dial remote host to be specified by ssh_opt. There are two different method to handle it, but it should be three to be exact. Either way, the effect is the same.

* Option
    * user, string, account what you want to login in on remote
    * pwd, string, user's password
    * ip, string, remote ip
    * port, integer, running port of ssh server
    * network, string, indicates network protocol (tcp, udp) to dial
    

* Example
```lua
-- method 1, callback
ssh({
    user = "root",
    pwd = "root",
    ip = "localhost",
    port = 22,
    network = "tcp",
}, function(c)
    c:Exec("echo Hello World")
end)

-- method 2, variable
local c = ssh({
    user = "root",
    pwd = "root",
    ip = "localhost",
    port = 22,
    network = "tcp",
})
c:Exec("echo Hello World")

-- method 3, combine above two method
```
