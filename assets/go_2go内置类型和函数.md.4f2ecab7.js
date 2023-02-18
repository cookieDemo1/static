import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u503C\u7C7B\u578B","slug":"_1-\u503C\u7C7B\u578B","link":"#_1-\u503C\u7C7B\u578B","children":[]},{"level":3,"title":"2.\u5F15\u7528\u7C7B\u578B","slug":"_2-\u5F15\u7528\u7C7B\u578B","link":"#_2-\u5F15\u7528\u7C7B\u578B","children":[]},{"level":3,"title":"3.\u5185\u7F6E\u51FD\u6570","slug":"_3-\u5185\u7F6E\u51FD\u6570","link":"#_3-\u5185\u7F6E\u51FD\u6570","children":[]},{"level":3,"title":"4.\u5185\u7F6E\u63A5\u53E3","slug":"_4-\u5185\u7F6E\u63A5\u53E3","link":"#_4-\u5185\u7F6E\u63A5\u53E3","children":[]}],"relativePath":"go/2go\u5185\u7F6E\u7C7B\u578B\u548C\u51FD\u6570.md"}'),e={name:"go/2go\u5185\u7F6E\u7C7B\u578B\u548C\u51FD\u6570.md"},p=l(`<h3 id="_1-\u503C\u7C7B\u578B" tabindex="-1">1.\u503C\u7C7B\u578B <a class="header-anchor" href="#_1-\u503C\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">bool</span></span>
<span class="line"><span style="color:#A6ACCD;">int(32 or 64), int8, int16, int32, int64</span></span>
<span class="line"><span style="color:#A6ACCD;">uint(32 or 64), uint8(byte), uint16, uint32, uint64</span></span>
<span class="line"><span style="color:#A6ACCD;">float32, float64</span></span>
<span class="line"><span style="color:#A6ACCD;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">complex64, complex128</span></span>
<span class="line"><span style="color:#A6ACCD;">array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u5F15\u7528\u7C7B\u578B" tabindex="-1">2.\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#_2-\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">slice   -- \u5E8F\u5217\u6570\u7EC4(\u6700\u5E38\u7528)</span></span>
<span class="line"><span style="color:#A6ACCD;">map     -- \u6620\u5C04</span></span>
<span class="line"><span style="color:#A6ACCD;">chan    -- \u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-\u5185\u7F6E\u51FD\u6570" tabindex="-1">3.\u5185\u7F6E\u51FD\u6570 <a class="header-anchor" href="#_3-\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">append          -- \u7528\u6765\u8FFD\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u3001slice\u4E2D,\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3001slice</span></span>
<span class="line"><span style="color:#A6ACCD;">close           -- \u4E3B\u8981\u7528\u6765\u5173\u95EDchannel</span></span>
<span class="line"><span style="color:#A6ACCD;">delete            -- \u4ECEmap\u4E2D\u5220\u9664key\u5BF9\u5E94\u7684value</span></span>
<span class="line"><span style="color:#A6ACCD;">panic            -- \u505C\u6B62\u5E38\u89C4\u7684goroutine  \uFF08panic\u548Crecover\uFF1A\u7528\u6765\u505A\u9519\u8BEF\u5904\u7406\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">recover         -- \u5141\u8BB8\u7A0B\u5E8F\u5B9A\u4E49goroutine\u7684panic\u52A8\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">real            -- \u8FD4\u56DEcomplex\u7684\u5B9E\u90E8   \uFF08complex\u3001real imag\uFF1A\u7528\u4E8E\u521B\u5EFA\u548C\u64CD\u4F5C\u590D\u6570\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">imag            -- \u8FD4\u56DEcomplex\u7684\u865A\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">make            -- \u7528\u6765\u5206\u914D\u5185\u5B58\uFF0C\u8FD4\u56DEType\u672C\u8EAB(\u53EA\u80FD\u5E94\u7528\u4E8Eslice, map, channel)</span></span>
<span class="line"><span style="color:#A6ACCD;">new                -- \u7528\u6765\u5206\u914D\u5185\u5B58\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u503C\u7C7B\u578B\uFF0C\u6BD4\u5982int\u3001struct\u3002\u8FD4\u56DE\u6307\u5411Type\u7684\u6307\u9488</span></span>
<span class="line"><span style="color:#A6ACCD;">cap                -- capacity\u662F\u5BB9\u91CF\u7684\u610F\u601D\uFF0C\u7528\u4E8E\u8FD4\u56DE\u67D0\u4E2A\u7C7B\u578B\u7684\u6700\u5927\u5BB9\u91CF\uFF08\u53EA\u80FD\u7528\u4E8E\u5207\u7247\u548C map\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">copy            -- \u7528\u4E8E\u590D\u5236\u548C\u8FDE\u63A5slice\uFF0C\u8FD4\u56DE\u590D\u5236\u7684\u6570\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">len                -- \u6765\u6C42\u957F\u5EA6\uFF0C\u6BD4\u5982string\u3001array\u3001slice\u3001map\u3001channel \uFF0C\u8FD4\u56DE\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">print\u3001println     -- \u5E95\u5C42\u6253\u5370\u51FD\u6570\uFF0C\u5728\u90E8\u7F72\u73AF\u5883\u4E2D\u5EFA\u8BAE\u4F7F\u7528 fmt \u5305</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-\u5185\u7F6E\u63A5\u53E3" tabindex="-1">4.\u5185\u7F6E\u63A5\u53E3 <a class="header-anchor" href="#_4-\u5185\u7F6E\u63A5\u53E3" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u53EA\u8981\u5B9E\u73B0\u4E86Error()\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3AString\u7684\u90FD\u5B9E\u73B0\u4E86err\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">    String</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8),r=[p];function c(o,i,t,b,A,u){return a(),n("div",null,r)}const m=s(e,[["render",c]]);export{d as __pageData,m as default};
