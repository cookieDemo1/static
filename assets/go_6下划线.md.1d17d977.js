import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u4E0B\u5212\u7EBF","slug":"_1-\u4E0B\u5212\u7EBF","link":"#_1-\u4E0B\u5212\u7EBF","children":[]},{"level":3,"title":"2.import\u4E0B\u5212\u7EBF","slug":"_2-import\u4E0B\u5212\u7EBF","link":"#_2-import\u4E0B\u5212\u7EBF","children":[]},{"level":3,"title":"3.\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D","slug":"_3-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D","link":"#_3-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D","children":[]}],"relativePath":"go/6\u4E0B\u5212\u7EBF.md"}'),p={name:"go/6\u4E0B\u5212\u7EBF.md"},e=l(`<h3 id="_1-\u4E0B\u5212\u7EBF" tabindex="-1">1.\u4E0B\u5212\u7EBF <a class="header-anchor" href="#_1-\u4E0B\u5212\u7EBF" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;_&quot; \u662F\u7279\u6B8A\u6807\u8BC6\u7B26\uFF0C\u7528\u6765\u5FFD\u7565\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_2-import\u4E0B\u5212\u7EBF" tabindex="-1">2.import\u4E0B\u5212\u7EBF <a class="header-anchor" href="#_2-import\u4E0B\u5212\u7EBF" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import \u4E0B\u5212\u7EBF\uFF08\u5982\uFF1Aimport hello/imp\uFF09\u7684\u4F5C\u7528\uFF1A\u5F53\u5BFC\u5165\u4E00\u4E2A\u5305\u65F6\uFF0C\u8BE5\u5305\u4E0B\u7684\u6587\u4EF6\u91CC\u6240\u6709init()\u51FD\u6570\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u7136\u800C\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u628A\u6574\u4E2A\u5305\u90FD\u5BFC\u5165\u8FDB\u6765\uFF0C\u4EC5\u4EC5\u662F\u662F\u5E0C\u671B\u5B83\u6267\u884Cinit()\u51FD\u6570\u800C\u5DF2\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 import \u5F15\u7528\u8BE5\u5305\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5373\u4F7F\u7528\u3010import _ \u5305\u8DEF\u5F84\u3011\u53EA\u662F\u5F15\u7528\u8BE5\u5305\uFF0C\u4EC5\u4EC5\u662F\u4E3A\u4E86\u8C03\u7528init()\u51FD\u6570\uFF0C\u6240\u4EE5\u65E0\u6CD5\u901A\u8FC7\u5305\u540D\u6765\u8C03\u7528\u5305\u4E2D\u7684\u5176\u4ED6\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import _ &quot;./hello&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // hello.Print() </span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u7F16\u8BD1\u62A5\u9519\uFF1A./main.go:6:5: undefined: hello</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D" tabindex="-1">3.\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D <a class="header-anchor" href="#_3-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    buf </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    f</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/Users/***/Desktop/text.txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Read</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">buf</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">break</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdout</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Write</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">buf</span><span style="color:#89DDFF;">[:</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,6),o=[e];function r(c,t,i,D,A,y){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
