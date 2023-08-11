---
title: mock
icon: laptop-code
category:
  - API
  - http
---

## mock
* new fun(): mock_server # returns mock server object
* request fun(method: string, url: string, body: string): httpRequest # returns a new request

## mock_context
* Writer httpResponseWriter # an abstract to response will be sent to client
* Request httpRequest # saves request information from client
* Param fun(self: mock_context, key: string): string # returns the value of the URL param.
* Query fun(self: mock_context, key: string): string # returns the keyed url query value if it exists, otherwise it returns an empty string
* PostForm fun(self: mock_context, key: string): string # returns the specified key from a POST urlencoded form or multipart form
* Bind fun(self: mock_context, obj: table): err # checks the Method and Content-Type to select a binding engine automatically,
* String fun(self: mock_context, code: integer, format: string, ...) # writes the given string into the response body.
* JSON fun(self: mock_context, code: integer, obj: table) # serializes the given struct as JSON into the response body. It also sets the Content-Type as "application/json".
* File fun(self: mock_context, code: integer, dir: string) # writes the specified file into the body stream in an efficient way.

## mock_handle
* fun(ctx: mock_context)

## mock_server: ginEngine
* engine ginEngine
* run fun(self: mock_server, port: integer): err # runs service on specified port
* get fun(self: mock_server, pattern: string, handle: mock_handle) # binds pattern and handle, and will be called when the http GET request arrived by client
* post fun(self: mock_server, pattern: string, handle: mock_handle) # binds pattern and handle, and will be called when the http POST request arrived by client

## proxy()

* Prototype
```lua
---@param writer httpResponseWriter
---@param request httpRequest
function proxy(writer, request) end
```

* Introduce

proxy sends request and writes to writer

* Example
```lua
--assume you use mock and try to proxy request handle. 
--`NOTE`: it'll copy and return automatically when proxy finished. 
local s = mock.new() 
s:get("/", function(ctx)      
    proxy(ctx.Writer, mock.new("GET", "http://localhost:8080", ""))
end) 
```
