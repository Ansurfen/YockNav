---
title: net
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

* Prototype
```lua
---@return ifconfig_result[]
function ifconfig() end
```

* Introduce

ifconfig returns information about net interface.

## lsof_info
* pid string
* state string
* proto string
* Local string
* foreign string

## lsof()

* Prototype
```lua
---@param port? integer
---@return lsof_info[]|lsof_info
function lsof(port) end
```

* Introduce

lsof returns information about port occupancy status according to given port.

## curl_opt
* header? table<string, string> # header contains the request header fields either received by the server or to be sent by the client.
* method? string|"GET"|"POST"|"HEAD"|"PUT"|"DELETE"|"CONNECT"|"OPTIONS"|"TRACE"|"PATCH" # method specifies the HTTP method (GET, POST, PUT, etc.)
* data? string # data is the request's body.
* save? boolean # write body into specified file when set true.
* dir? string # set root directory of file to be saved.
* filename? fun(url: string): string # returns filename that will be saved according to url.
* async? boolean #

## curl()

* Prototype
```lua
---@param opt curl_opt
---@vararg string
---@return string, err
function curl(opt, ...) end

---@vararg string
---@return string, err
function curl(...) end
```

* Introduce 

overload 1

curl receives urls and ranges its to send request one by one, and collects all response.body to contact and return according to double '\n'.

overload 2

curl receives variable string argument and ranges its to send GET request one by one, and collects all response.body to contact and return according to double ‘\n’.

* Option
    - opt, [curl_opt](#curl-opt)
    - urls, ...(string)

* Example
```lua
-- curl fetches url and saves it into specified path combing dir and filename.
-- `NOTE`: if save is true, body will not write into return's string.
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
