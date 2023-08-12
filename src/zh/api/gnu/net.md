---
title: 网络
---

## ifconfig_addr
* addr string

## ifconfig_flag
* string|"up"|"broadcast"|"multicast"|"loopback"

## ifconfig_result
* index integer
* mtu integer
* name string
* hardwareAddr string
* flags ifconfig_flag[]
* addrs ifconfig_addr[]

## ifconfig()

* 原型
```lua
---@return ifconfig_result[]
function ifconfig() end
```

* 介绍

ifconfig 返回网络接口的信息。

## lsof_info
* pid string
* state string
* proto string
* Local string
* foreign string

## lsof()

* 原型
```lua
---@param port? integer
---@return lsof_info[]|lsof_info
function lsof(port) end
```

* 介绍

lsof 返回给定端口的占用情况。

## curl_opt
* header? table<string, string> # header包含请求头字段，要么作为服务器的接收，要么作为客户端的发送。
* method? string|"GET"|"POST"|"HEAD"|"PUT"|"DELETE"|"CONNECT"|"OPTIONS"|"TRACE"|"PATCH" # method 指明 HTTP 请求的方法 (GET, POST, PUT, etc.)
* data? string # data 是请求的 body 部分。
* save? boolean # 当设置 true，写入 body 到指定文件。
* dir? string # 设置保存文件的根目录。
* filename? fun(url: string): string # 根据 url 返回将保存的文件名。
* async? boolean #

## curl()

* 原型
```lua
---@param opt curl_opt
---@vararg string
---@return string, err
function curl(opt, ...) end

---@vararg string
---@return string, err
function curl(...) end
```

* 介绍 

重载 1

curl 接收 urls 和遍历他们逐一发送请求，并收集所有响应体，通过双'\n'连接后返回。

重载 2

curl 接收可变字符串变量和遍历他们发送 GET 请求，并收集所有响应体，通过双'\n'连接后返回。

* 选项
    - opt, [curl_opt](#curl-opt)
    - urls, ...(string)

* 示例
```lua
-- curl 抓取 url 和保存它到基于目录和文件名连接的path。
-- `注意`: 如果 save 为 true，响应的数据只会写入文件，而不会作为字符串返回。
curl({
    save = true,
    dir = "./",
    filename = function(url)
        return path.base(url)
    end
}, "https://www.github.com/ansurfen/yock")

local data = curl({
     method = "POST",
     data = json.encode({ username = "yock" })
}, "")
print(data)
curl("https://www.github.com/ansurfen/yock")
```
