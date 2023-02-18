import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.select\u591A\u8DEF\u590D\u7528","slug":"_1-select\u591A\u8DEF\u590D\u7528","link":"#_1-select\u591A\u8DEF\u590D\u7528","children":[]},{"level":3,"title":"2.select\u7684\u4F7F\u7528","slug":"_2-select\u7684\u4F7F\u7528","link":"#_2-select\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"3.select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel.\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel ready","slug":"_3-select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel-\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel-ready","link":"#_3-select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel-\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel-ready","children":[]},{"level":3,"title":"4.\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready,\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C","slug":"_4-\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready-\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C","link":"#_4-\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready-\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C","children":[]},{"level":3,"title":"5.\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1","slug":"_5-\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1","link":"#_5-\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1","children":[]}],"relativePath":"go/44select.md"}'),p={name:"go/44select.md"},e=l(`<h3 id="_1-select\u591A\u8DEF\u590D\u7528" tabindex="-1">1.select\u591A\u8DEF\u590D\u7528 <a class="header-anchor" href="#_1-select\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h3><ul><li>\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u6211\u4EEC\u9700\u8981\u540C\u65F6\u4ECE\u591A\u4E2A\u901A\u9053\u63A5\u6536\u6570\u636E\u3002\u901A\u9053\u5728\u63A5\u6536\u6570\u636E\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u53EF\u4EE5\u63A5\u6536\u5C06\u4F1A\u53D1\u751F\u963B\u585E</li><li>\u4F60\u4E5F\u8BB8\u4F1A\u5199\u51FA\u5982\u4E0B\u4EE3\u7801\u65F6\u7528\u904D\u5386\u7684\u65B9\u5F0F\u5B9E\u73B0</li><li>\u8FD9\u79CD\u65B9\u5F0F\u867D\u7136\u53EF\u4EE5\u5B9E\u73B0\u4ECE\u591A\u4E2A\u901A\u9053\u63A5\u6536\u503C\u7684\u9700\u6C42\uFF0C\u4F46\u662F\u8FD0\u884C\u6027\u80FD\u4F1A\u5DEE\u5F88\u591A\u3002\u4E3A\u4E86\u5E94\u5BF9\u8FD9\u79CD\u573A\u666F\uFF0CGo\u5185\u7F6E\u4E86select\u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u540C\u65F6\u54CD\u5E94\u591A\u4E2A\u901A\u9053\u7684\u64CD\u4F5C\u3002</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5C1D\u8BD5\u4ECEch1\u63A5\u6536\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">ch1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5C1D\u8BD5\u4ECEch2\u63A5\u6536\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">ch2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-select\u7684\u4F7F\u7528" tabindex="-1">2.select\u7684\u4F7F\u7528 <a class="header-anchor" href="#_2-select\u7684\u4F7F\u7528" aria-hidden="true">#</a></h3><ul><li>select\u7684\u4F7F\u7528\u7C7B\u4F3C\u4E8Eswitch\u8BED\u53E5\uFF0C\u5B83\u6709\u4E00\u7CFB\u5217case\u5206\u652F\u548C\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5206\u652F\u3002</li><li>\u6BCF\u4E2Acase\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u901A\u9053\u7684\u901A\u4FE1\uFF08\u63A5\u6536\u6216\u53D1\u9001\uFF09\u8FC7\u7A0B\u3002</li><li>select\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF0C\u76F4\u5230\u67D0\u4E2Acase\u7684\u901A\u4FE1\u64CD\u4F5C\u5B8C\u6210\u65F6\uFF0C\u5C31\u4F1A\u6267\u884Ccase\u5206\u652F\u5BF9\u5E94\u7684\u8BED\u53E5\u3002</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">chan1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u5982\u679Cchan1\u6210\u529F\u8BFB\u5230\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> chan2 </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u5982\u679C\u6210\u529F\u5411chan2\u5199\u5165\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u5982\u679C\u4E0A\u9762\u90FD\u6CA1\u6709\u6210\u529F\uFF0C\u5219\u8FDB\u5165default\u5904\u7406\u6D41\u7A0B</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel-\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel-ready" tabindex="-1">3.select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel.\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel ready <a class="header-anchor" href="#_3-select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel-\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel-ready" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">time</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 5\u79D2\u540E\u5411\u901A\u9053ch\u5199\u5165\u4E00\u4E2A&quot;test1&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 2\u79D2\u540E\u5411\u901A\u9053ch\u5199\u5165\u4E00\u4E2A&quot;test2&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 2\u4E2A\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	output1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	output2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u8DD1\u4E24\u4E2A\u5B50\u534F\u7A0B\uFF0C\u5199\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">output1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">output2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u7528select\u76D1\u63A7</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> output1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s1=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> s2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> output2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s2=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="_4-\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready-\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C" tabindex="-1">4.\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready,\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C <a class="header-anchor" href="#_4-\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready-\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u521B\u5EFA2\u4E2A\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	int_chan </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	string_chan </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		int_chan </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		string_chan </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> int_chan</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">int:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> string_chan</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_5-\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1" tabindex="-1">5.\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1 <a class="header-anchor" href="#_5-\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1" aria-hidden="true">#</a></h3><ul><li>0.5\u79D2\u5F80\u901A\u9053\u53D1\u9001\u4E00\u6761\u6570\u636E\uFF0C1\u79D2\u4ECE\u901A\u9053\u4E2D\u53D6\u4E00\u6761\u6570\u636E\uFF0C\u90A3\u4E48\u901A\u9053\u80AF\u5B9A\u5C06\u4F1A\u88AB\u5199\u6EE1</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">time</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5224\u65AD\u7BA1\u9053\u6709\u6CA1\u6709\u5B58\u6EE1</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u521B\u5EFA\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	output1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5B50\u534F\u7A0B\u5199\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">output1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u53D6\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> output1</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u5199\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">write hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">channel full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Millisecond </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,13),o=[e];function c(r,t,D,F,y,A){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{C as __pageData,b as default};