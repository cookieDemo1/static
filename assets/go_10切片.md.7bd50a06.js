import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u5207\u7247\u6982\u5FF5","slug":"_1-\u5207\u7247\u6982\u5FF5","link":"#_1-\u5207\u7247\u6982\u5FF5","children":[]},{"level":3,"title":"2.\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F","slug":"_2-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F","link":"#_2-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F","children":[]},{"level":3,"title":"3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247","slug":"_3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247","link":"#_3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247","children":[]}],"relativePath":"go/10\u5207\u7247.md"}'),p={name:"go/10\u5207\u7247.md"},o=l(`<h3 id="_1-\u5207\u7247\u6982\u5FF5" tabindex="-1">1.\u5207\u7247\u6982\u5FF5 <a class="header-anchor" href="#_1-\u5207\u7247\u6982\u5FF5" aria-hidden="true">#</a></h3><ul><li>\u9700\u8981\u8BF4\u660E\uFF0Cslice \u5E76\u4E0D\u662F\u6570\u7EC4\u6216\u6570\u7EC4\u6307\u9488\u3002\u5B83\u901A\u8FC7\u5185\u90E8\u6307\u9488\u548C\u76F8\u5173\u5C5E\u6027\u5F15\u7528\u6570\u7EC4\u7247\u6BB5\uFF0C\u4EE5\u5B9E\u73B0\u53D8\u957F\u65B9\u6848\u3002</li><li>\u4E0D\u6307\u5B9A\u957F\u5EA6\u7684\u5C31\u662F\u5207\u7247</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1. \u5207\u7247\uFF1A\u5207\u7247\u662F\u6570\u7EC4\u7684\u4E00\u4E2A\u5F15\u7528\uFF0C\u56E0\u6B64\u5207\u7247\u662F\u5F15\u7528\u7C7B\u578B\u3002\u4F46\u81EA\u8EAB\u662F\u7ED3\u6784\u4F53\uFF0C\u503C\u62F7\u8D1D\u4F20\u9012\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">2. \u5207\u7247\u7684\u957F\u5EA6\u53EF\u4EE5\u6539\u53D8\uFF0C\u56E0\u6B64\uFF0C\u5207\u7247\u662F\u4E00\u4E2A\u53EF\u53D8\u7684\u6570\u7EC4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">3. \u5207\u7247\u904D\u5386\u65B9\u5F0F\u548C\u6570\u7EC4\u4E00\u6837\uFF0C\u53EF\u4EE5\u7528len()\u6C42\u957F\u5EA6\u3002\u8868\u793A\u53EF\u7528\u5143\u7D20\u6570\u91CF\uFF0C\u8BFB\u5199\u64CD\u4F5C\u4E0D\u80FD\u8D85\u8FC7\u8BE5\u9650\u5236\u3002 </span></span>
<span class="line"><span style="color:#A6ACCD;">4. cap\u53EF\u4EE5\u6C42\u51FAslice\u6700\u5927\u6269\u5F20\u5BB9\u91CF\uFF0C\u4E0D\u80FD\u8D85\u51FA\u6570\u7EC4\u9650\u5236\u30020 &lt;= len(slice) &lt;= len(array)\uFF0C\u5176\u4E2Darray\u662Fslice\u5F15\u7528\u7684\u6570\u7EC4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">5. \u5207\u7247\u7684\u5B9A\u4E49\uFF1Avar \u53D8\u91CF\u540D []\u7C7B\u578B\uFF0C\u6BD4\u5982 var str []string  var arr []int\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">6. \u5982\u679C slice == nil\uFF0C\u90A3\u4E48 len\u3001cap \u7ED3\u679C\u90FD\u7B49\u4E8E 0\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F" tabindex="-1">2.\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F <a class="header-anchor" href="#_2-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">//1.\u58F0\u660E\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u662F\u7A7A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E0D\u662F\u7A7A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 2.:=</span></span>
<span class="line"><span style="color:#A6ACCD;">   s2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 3.make()</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s3 </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">int </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 4.\u521D\u59CB\u5316\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s4 </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">int </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s4</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   s5 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// 5.\u4ECE\u6570\u7EC4\u5207\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">   arr </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> s6 </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u524D\u5305\u540E\u4E0D\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">   s6 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">   fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s6</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247" tabindex="-1">3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247 <a class="header-anchor" href="#_3\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var slice []type = make([]type, len)</span></span>
<span class="line"><span style="color:#A6ACCD;">slice  := make([]type, len)</span></span>
<span class="line"><span style="color:#A6ACCD;">slice  := make([]type, len, cap)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">slice3 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">slice4 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">slice5 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,8),e=[o];function r(c,t,D,y,F,C){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
