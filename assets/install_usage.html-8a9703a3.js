import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as o,b as d,w as s,e as n,f as a,d as r}from"./app-62237bf4.js";const p={},b=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),m=n("p",null,[n("code",null,"注意"),a(": 无论是哪一种安装方式，下载完后都需要将yock挂载到本地环境中。在解压压缩包后，进入可执行文件的目录运行"),n("code",null,"yock run install.lua"),a("完成这个过程。")],-1),h=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[a("利用第三方包管理下载存在更新滞后的问题，并且下载完后虽然会自动解压，但解压完后还是需要手动执行install.lua，因此强烈推荐用"),n("code",null,"binary"),a("的方式直接下载。")])],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`https://github.com/Ansurfen/yock/releases
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(" i @ansurfen/yock "),n("span",{class:"token parameter variable"},"-g"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("pip "),n("span",{class:"token function"},"install"),a(` yock
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),a(` clone https://github.com/Ansurfen/yock.git

`),n("span",{class:"token builtin class-name"},"cd"),a(` ctl

./build.bat/sh //正常构建
./build.bat/sh ffi //带 libffi 构建 `),n("span",{class:"token punctuation"},"("),a("需要 gcc 或 mingw"),n("span",{class:"token punctuation"},")"),a(`
./build.bat/sh dev //构建开发版本
./build.bat/sh oslinux //交叉编译到linux平台

// 自动构建出带libffi版本的项目，当上一步完成后
yock run install.lua
yock run `),n("span",{class:"token punctuation"},".."),a(`/auto/build-ffi.lua
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=r(`<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这一步的主要目标是提高编写代码的效率，所以他是可选的。<br> Yock并没有直接提供官方的插件，而是复用第三方的lua语言去实现。因此，以下插件也仅作推荐。</p></div><p>对于 VSCode：<br><img src="https://github.com/Ansurfen/ansurfen.github.io/blob/main/images/yock/lua-tip.png?raw=true" alt="lua-tip" loading="lazy"></p><p>对于 Jetbrain产品 （IDEA, Goland 等）：<br><img src="https://github.com/Ansurfen/YockNav/blob/main/assets/img/lua-tip-idea.png?raw=true" alt="lua-tip" loading="lazy"></p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>当<code>yock run install.lua</code>执行成功后，就可以创建一个工作目录编写和测试yock脚本。运行<code>ypm tidy</code>补全代码定义，它会在工作目录下创建include目录，里面的源文件仅供插件提示使用。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- main.lua</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello %s!\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yock&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建main.lua文件，写下以上内容。使用<code>yock run main.lua</code>执行。如果一切顺利，你将在终端看到输出结果。至此，yock的开发环境算是配置完成了。下一章开始将会介绍yock的具体使用。</p>`,8);function y(x,A){const l=c("CodeTabs");return u(),o("div",null,[b,m,h,d(l,{id:"11",data:[{id:"binary"},{id:"npm"},{id:"pip"},{id:"self-build"}],"tab-id":"shell"},{title0:s(({value:e,isActive:i})=>[a("binary")]),title1:s(({value:e,isActive:i})=>[a("npm")]),title2:s(({value:e,isActive:i})=>[a("pip")]),title3:s(({value:e,isActive:i})=>[a("self-build")]),tab0:s(({value:e,isActive:i})=>[v]),tab1:s(({value:e,isActive:i})=>[g]),tab2:s(({value:e,isActive:i})=>[k]),tab3:s(({value:e,isActive:i})=>[f]),_:1}),_])}const C=t(p,[["render",y],["__file","install_usage.html.vue"]]);export{C as default};