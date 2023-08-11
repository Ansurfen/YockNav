local doc_str = [[
    ---write writes data to file and creates file
    ---when file isn't exist.
    ---### Option:
    ---* opt, table
    ---### Example:
    ---```lua
    ---print()
    ---```
    ---@param file string
    ---@param data string
    ---@return err
    function write(file, data) end

    ---read blocks and wait for inputting from user,
    ---and builds mapping relationship from given
    ---name to input's value.
    ---### Example:
    ---```lua
    ---print()
    ---```
    ---### Option:
    ---* opt, table
    ---@param name string
    function read(name) end
]]
doc_str = cat("in.txt")
local doc_seg = strings.Split(doc_str, "\n")
local cur = { prototype = {}, intro = {}, fn = true }
local key = "intro"
local docs = {}
local i = 1
while i <= #doc_seg do
    local value = strings.TrimSpace(doc_seg[i])
    if #value == 0 then
        goto continue
    end
    if strings.HasPrefix(value, "---@class") then
        cur.fn = false
        cur.name = string.match(value, "---@class (.*)")
        goto continue
    end
    if strings.HasPrefix(value, "---@alias") then
        value = string.sub(value, #"---@alias " + 1, #value)
        local res = strings.SplitN(value, " ", 2)
        if #res < 2 then
            yassert("error happen")
        end
        local prototype = { res[2] }
        for j = i + 1, #doc_seg, 1 do
            value = strings.TrimSpace(doc_seg[j])
            if strings.HasPrefix(value, "---|>") then
                table.insert(prototype, strings.TrimSpace(string.sub(value, #"---|>" + 1, #value)))
            elseif strings.HasPrefix(value, "---|") then
                table.insert(prototype, strings.TrimSpace(string.sub(value, #"---|" + 1, #value)))
            else
                i = j - 1
                break
            end
        end
        table.insert(docs, { name = res[1], prototype = prototype })
        goto continue
    end
    if not cur.fn and not strings.HasPrefix(value, "---@field") then
        table.insert(docs, cur)
        cur = { prototype = {}, intro = {}, fn = true }
        key = "intro"
    end
    if cur.fn then
        if strings.HasPrefix(value, "---@") then
            table.insert(cur.prototype, value)
        elseif strings.HasPrefix(value, "function") then
            cur.name = string.match(value, "function (.*)%(")
            table.insert(cur.prototype, value)
            table.insert(docs, cur)
            cur = { prototype = {}, intro = {}, fn = true }
            key = "intro"
        else
            if not strings.HasPrefix(value, "---") then
                goto continue
            end
            local s, e = string.find(value, "---### (.*):")
            if s and e then
                key = string.match(value, "---### (.*):")
            end
            if cur[key] == nil then
                cur[key] = {}
                goto continue
            end
            table.insert(cur[key], string.sub(value, 4, #value))
        end
    else
        if strings.HasPrefix(value, "---@field") then
            table.insert(cur.prototype, string.match(value, "---@field (.*)"))
        end
    end
    ::continue::
    i = i + 1
end
if not cur.fn then
    table.insert(docs, cur)
end
local f = file("out.md")
for _, doc in ipairs(docs) do
    local docstr
    if doc.fn then
        docstr = string.format("## %s()\n", doc.name)
        if doc.prototype ~= nil then
            docstr = docstr .. string.format("\n* Prototype\n```lua\n%s\n```\n", table.concat(doc.prototype, "\n"))
        end
        if doc.intro ~= nil then
            docstr = docstr .. string.format("\n* Introduce\n\n%s\n", table.concat(doc.intro, " "))
        end
        if doc.Option ~= nil then
            for i = 1, #doc.Option, 1 do
                doc.Option[i] = "    " .. doc.Option[i]
            end
            docstr = docstr .. string.format("\n* Option\n%s\n", table.concat(doc.Option, "\n"))
        end
        if doc.Example ~= nil then
            docstr = docstr .. string.format("\n* Example\n%s\n", table.concat(doc.Example, "\n"))
        end
    else
        docstr = string.format("## %s\n", doc.name)
        for i = 1, #doc.prototype, 1 do
            doc.prototype[i] = "* " .. doc.prototype[i]
        end
        docstr = docstr .. table.concat(doc.prototype, "\n") .. "\n\n"
    end
    _ = f <= stream(docstr)
end
