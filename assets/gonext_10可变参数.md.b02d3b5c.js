import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u53EF\u53D8\u53C2\u6570","slug":"_1-\u53EF\u53D8\u53C2\u6570","link":"#_1-\u53EF\u53D8\u53C2\u6570","children":[]}],"relativePath":"gonext/10\u53EF\u53D8\u53C2\u6570.md"}'),p={name:"gonext/10\u53EF\u53D8\u53C2\u6570.md"},o=l(`<h3 id="_1-\u53EF\u53D8\u53C2\u6570" tabindex="-1">1.\u53EF\u53D8\u53C2\u6570 <a class="header-anchor" href="#_1-\u53EF\u53D8\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u53EF\u53D8\u53C2\u6570\u5FC5\u987B\u5728\u51FD\u6570\u53C2\u6570\u5217\u8868\u7684\u5C3E\u90E8\uFF0C\u5373\u6700\u540E\u4E00\u4E2A</li><li>\u53EF\u53D8\u53C2\u6570\u5728\u51FD\u6570\u5185\u90E8\u662F\u4F5C\u4E3A\u5207\u7247\u6765\u89E3\u6790\u7684</li><li>\u53EF\u53D8\u53C2\u6570\u53EF\u4EE5\u4E0D\u586B\uFF0C\u4E0D\u586B\u662F\u5185\u90E8\u5F53\u6210nil\u5207\u7247\u5904\u7406</li><li>\u53EF\u53D8\u53C2\u6570\u5FC5\u987B\u662F\u76F8\u540C\u7C7B\u578B\u7684(\u5982\u679C\u9700\u8981\u662F\u4E0D\u540C\u7C7B\u578B\u7684\u53EF\u4EE5\u5B9A\u4E49\u4E3Ainterface{}\u7C7B\u578B)</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u53EF\u53D8\u53C2\u51FD\u6570\u662F\u6307\u51FD\u6570\u7684\u67D0\u4E2A\u53C2\u6570\u53EF\u6709\u53EF\u65E0\uFF0C\u5373\u8FD9\u4E2A\u53C2\u6570\u4E2A\u6570\u53EF\u4EE5\u662F0\u4E2A\u6216\u591A\u4E2A</span></span>
<span class="line"><span style="color:#676E95;">// \u58F0\u660E\u53EF\u53D8\u53C2\u6570\u51FD\u6570\u7684\u65B9\u5F0F\u662F\u5728\u53C2\u6570\u7C7B\u578B\u524D\u52A0\u4E0A...\u524D\u7F00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6BD4\u5982fmt\u5305\u4E2D\u7684 Println</span></span>
<span class="line"><span style="color:#676E95;">// func Println(a...interface{})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeting</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prefix </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> who </span><span style="color:#89DDFF;">...</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> who </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Nobody to say hi.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> people </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> who</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s %s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prefix</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> people</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Greeting</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&gt;&gt;&gt;]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hcp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u4F20\u9012\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">	guest </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">joe</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Anna</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Eileen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Greeting</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[---]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> guest</span><span style="color:#89DDFF;">...)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),e=[o];function r(t,c,D,F,y,i){return a(),n("div",null,e)}const u=s(p,[["render",r]]);export{C as __pageData,u as default};
