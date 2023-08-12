import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-aad1477e.js";const e={},o=t(`<p>Yock has the ability to convert asynchronous tasks to synchronous tasks, as well as concurrent programming with and without stacks.</p><h2 id="semaphores" tabindex="-1"><a class="header-anchor" href="#semaphores" aria-hidden="true">#</a> Semaphores</h2><p>Before starting asynchronous programming, introduce the concept of synchronization. Normally, code is executed sequentially, and sometimes due to the overhead of process switching and the popularity of multi-core CPUs, multithreaded programming is becoming more common. However, in the face of asynchronous tasks, in some scenarios, they have to be converted to synchronous processing, such as multi-threaded crawlers returning uniformly after crawling, and need to convert from asynchronous to synchronous. Yock provides users with two functions: notify and wait. As they literally mean, notify sends semaphores, wait blocks wait semaphores. If the wait doesn&#39;t wait for the semaphore, it will block forever. To avoid deadlocks, yock also provides a timeout parameter for the wait function, which is optional and will automatically end blocking if the semaphore cannot be waited for the allotted time.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">---@param sig string</span>
<span class="token comment">---@param timeout? time</span>
<span class="token keyword">function</span> <span class="token function">wait</span><span class="token punctuation">(</span>sig<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span> <span class="token keyword">end</span>

<span class="token comment">---@param ... string|time</span>
<span class="token keyword">function</span> <span class="token function">waits</span><span class="token punctuation">(</span><span class="token punctuation">...</span><span class="token punctuation">)</span> <span class="token keyword">end</span>

<span class="token comment">---@param sig string</span>
<span class="token keyword">function</span> <span class="token function">notify</span><span class="token punctuation">(</span>sig<span class="token punctuation">)</span> <span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to wait, yock also provides waits for multiple semaphores, except for the more volume, it is no different from waiting.</p><h2 id="coroutine-no-stack-coroutines" tabindex="-1"><a class="header-anchor" href="#coroutine-no-stack-coroutines" aria-hidden="true">#</a> coroutine (No stack coroutines)</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">co</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    task1 <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token keyword">do</span>
            this<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;I am task 1, executing step &quot;</span> <span class="token operator">..</span> i<span class="token punctuation">)</span>
            coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span><span class="token punctuation">,</span>
    task2 <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token keyword">do</span>
            this<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;I am task 2, executing step &quot;</span> <span class="token operator">..</span> i<span class="token punctuation">)</span>
            coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span><span class="token punctuation">,</span>
    task3 <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token keyword">do</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;I am task 3, executing step &quot;</span> <span class="token operator">..</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token keyword">then</span>
                this<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">end</span>
            coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
        this<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span><span class="token punctuation">,</span>
    task4 <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token keyword">do</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;I am task 4, executing step &quot;</span> <span class="token operator">..</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">9</span> <span class="token keyword">then</span>
                this<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">end</span>
            coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Like traditional Lua, Yock encapsulates a simple set of coroutine coroutines to suit the needs of a single-threaded environment. This coroutine requires manual yield, so it is cumbersome to operate, and the single-threaded nature does not make full use of the resources of multi-core CPUs. In addition, it is worth noting that although coroutine is single-threaded, yock is implemented based on the go language, and coroutines are used for scheduling during the period, so the CPU cores running are at least greater than 2, and single-core CPU operation is not supported.</p><h2 id="goroutine-coroutines-with-stack" tabindex="-1"><a class="header-anchor" href="#goroutine-coroutines-with-stack" aria-hidden="true">#</a> goroutine (Coroutines with stack)</h2><h4 id="coroutines-are-combined-with-semaphores" tabindex="-1"><a class="header-anchor" href="#coroutines-are-combined-with-semaphores" aria-hidden="true">#</a> Coroutines are combined with semaphores</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">go</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">local</span> idx <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> idx <span class="token operator">~=</span> <span class="token number">5</span> <span class="token keyword">do</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;task 1&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        idx <span class="token operator">=</span> idx <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">end</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;task1 fine&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>

<span class="token function">go</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;task 2&quot;</span><span class="token punctuation">)</span>
    <span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;task2 fine&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>

<span class="token function">go</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>

<span class="token function">waits</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, it is not difficult to see that waits block the main thread, and three go functions play three asynchronous tasks. Task 1 sends an <code>x</code> signal after execution, Task 2 blocks and waits for the <code>x</code> signal to arrive during execution, and Task 3 sends a <code>y</code> signal at the end of execution. When the xy signal is reached, the main thread ends the blocker exits.</p><h4 id="nested-coroutines" tabindex="-1"><a class="header-anchor" href="#nested-coroutines" aria-hidden="true">#</a> Nested coroutines</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">go</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">local</span> segs <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span> <span class="token punctuation">}</span>
    <span class="token keyword">local</span> i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token operator">#</span>segs <span class="token keyword">do</span>
        <span class="token keyword">local</span> seg <span class="token operator">=</span> segs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token function">go</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">local</span> j <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">while</span> j <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token keyword">do</span>
                <span class="token function">print</span><span class="token punctuation">(</span>seg<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
                time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
                j <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token keyword">end</span>
            <span class="token function">notify</span><span class="token punctuation">(</span>seg<span class="token punctuation">)</span>
        <span class="token keyword">end</span><span class="token punctuation">)</span>
        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">end</span>
    <span class="token keyword">for</span> _<span class="token punctuation">,</span> seg <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>segs<span class="token punctuation">)</span> <span class="token keyword">do</span>
        <span class="token function">wait</span><span class="token punctuation">(</span>seg<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;seg fine&quot;</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;time abort&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yock inherits the advantage of the Go language with stack coroutines, so that Go functions support nested use.</p>`,15),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","concurrency.html.vue"]]);export{d as default};