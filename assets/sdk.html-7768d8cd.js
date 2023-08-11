import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-0d28c3d4.js";const t={},c=e(`<p>为了增加yock的拓展性，yock在打包的时候自带了基于yocki协议的protobuf，以便跨语言调用。</p><p>你可以使用<code>yock init python</code>创建一个带python SDK的demo项目，藉此进行开发。</p><h2 id="yocki相关api" tabindex="-1"><a class="header-anchor" href="#yocki相关api" aria-hidden="true">#</a> yocki相关API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">---@param name string</span>
<span class="token comment">---@param ip string</span>
<span class="token comment">---@param port number</span>
<span class="token keyword">function</span> yocki<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> port<span class="token punctuation">)</span> <span class="token keyword">end</span>

<span class="token comment">---@param name string</span>
<span class="token comment">---@param fn string</span>
<span class="token comment">---@param arg string</span>
<span class="token comment">---@return string, err</span>
<span class="token keyword">function</span> yocki<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> arg<span class="token punctuation">)</span> <span class="token keyword">end</span>

<span class="token comment">---@return table&lt;string&gt;</span>
<span class="token keyword">function</span> yocki<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>connect: 连接指定服务，并为服务起一个别名，便于调用操作<br> call: 调用名为name的服务，指定调用的函数fn以及arg参数<br> list: 列出已经连接的服务列表</p><h2 id="ypm封装" tabindex="-1"><a class="header-anchor" href="#ypm封装" aria-hidden="true">#</a> ypm封装</h2><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2>`,7),o=[c];function i(p,l){return a(),s("div",null,o)}const u=n(t,[["render",i],["__file","sdk.html.vue"]]);export{u as default};
