---
title: Introduce
icon: lightbulb
---

go-faker binding for yock, and built-in captcha and random avatars functions for mock service.

* repository, [github](https://github.com/Ansurfen/yock-faker), [gitee](https://gitee.com/ansurfen/yock-faker), gitlab, gitea
* version, found in [here](https://github.com/Ansurfen/yock-faker/releases)

## Install
```bash
ypm install github.tag/ansurfen/yock-faker@1.0.0
```

## Get started

### Faker data
```lua
print(fake.name(), fake.email())
```

### Mock with captcha and random avatars
```lua
local port = init("yock-faker@1.0.0")
---@type faker
local fake = import("./index")
fake.set_port(port)

local m = mock.new()

-- writes a random avatar into response according to name
m:get("/avatar/:name", function(ctx)
    local name = ctx:Param("name")
    fake.avatar.govatar(ctx, name)
end)

-- writes captcha into response according to captcha's id
m:get("/captcha/get/:id", function(ctx)
    local id = ctx:Param("id")
    fake.captcha.get(ctx, id)
end)

-- returns a captcha's id
m:get("/captcha/new", function(ctx)
    local id = fake.captcha.new()
    ctx:String(200, id)
end)

-- lists all avaiable captcha's id
m:get("/captcha/ls", function(ctx)
    ctx:String(200, json.encode(fake.captcha.ls()))
end)

m:run(8080)
```
