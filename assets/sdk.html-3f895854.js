import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-62237bf4.js";const t={},c=e(`<p>In order to increase the extensibility of Yock, yock comes with protobuf based on the yocki protocol when packaging for cross-language calls.</p><p>You can use <code>yock init python</code> to create a demo project with a python SDK for development.</p><h2 id="yocki-related-apis" tabindex="-1"><a class="header-anchor" href="#yocki-related-apis" aria-hidden="true">#</a> yocki-related APIs</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">---@param name string</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>connect: Connects to the specified service and gives the service an alias to facilitate the operation to be invoked<br> call: Invokes a service named name, specifying the function fn called and the arg parameter<br> list: Lists a list of connected services</p><h2 id="ypm-encapsulation" tabindex="-1"><a class="header-anchor" href="#ypm-encapsulation" aria-hidden="true">#</a> ypm encapsulation</h2><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2>`,7),o=[c];function i(p,l){return a(),s("div",null,o)}const u=n(t,[["render",i],["__file","sdk.html.vue"]]);export{u as default};