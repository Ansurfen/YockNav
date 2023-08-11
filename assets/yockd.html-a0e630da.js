import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-0d28c3d4.js";const p={},t=e(`<p>Yockd 声明yock守护进程的配置，主要用于后台启动和对话Peer建立P2P或中心化集群。</p><h2 id="自启动" tabindex="-1"><a class="header-anchor" href="#自启动" aria-hidden="true">#</a> 自启动</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">option</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    yockd <span class="token operator">=</span> <span class="token punctuation">{</span>
        self_boot <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>
        name <span class="token operator">=</span> <span class="token string">&quot;master&quot;</span>
        port <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当<code>self_boot</code>设置为true并指定<code>port</code>字段，在你运行yock脚本的时候，yock将会在后台自启动守护进程。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>每次自启动的过程都会检测指定端口上是否已经启动了守护进程。若已存在，则不会重复启动。当然，你也可以改变<code>port</code>的值去启动不同的守护进程，这是不推荐的，yock脚本运行的时候目前只支持和一个yockd通信。</p></div><h2 id="构建集群" tabindex="-1"><a class="header-anchor" href="#构建集群" aria-hidden="true">#</a> 构建集群</h2><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这个功能还未完成，请不要使用。</p></div><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">option</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    yockd <span class="token operator">=</span> <span class="token punctuation">{</span>
        self_boot <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>
        port <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>
        name <span class="token operator">=</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
        peer <span class="token operator">=</span> <span class="token punctuation">{</span>
            master <span class="token operator">=</span> <span class="token punctuation">{</span>
                ip <span class="token operator">=</span> <span class="token string">&quot;172.1.0.1&quot;</span><span class="token punctuation">,</span>
                port <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>
                public <span class="token operator">=</span> <span class="token keyword">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            node1 <span class="token operator">=</span> <span class="token punctuation">{</span>
                ip <span class="token operator">=</span> <span class="token string">&quot;1.1.1.2&quot;</span><span class="token punctuation">,</span>
                port <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>
                public <span class="token operator">=</span> <span class="token keyword">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            node2 <span class="token operator">=</span> <span class="token punctuation">{</span>
                ip <span class="token operator">=</span> <span class="token string">&quot;192.168.127.1&quot;</span><span class="token punctuation">,</span>
                port <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>
                public <span class="token operator">=</span> <span class="token keyword">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管是P2P还是中心化集群的构建，只要罗列好<code>peer</code>的清单，解释器就会在底层向本地yockd报告，以自动化的构建集群。<code>peer</code>字段以kv的形式进行存储，key为节点的名称。若name的值和节点的名称相符（示例上为 master），那就是本地守护进程的配置。基于这一特性，在不同的主机上凭借同一份peer清单，只需要变更name就能无感知的搭建集群网络。</p>`,9),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","yockd.html.vue"]]);export{d as default};
