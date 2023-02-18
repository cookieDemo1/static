import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.or-channel","slug":"_1-or-channel","link":"#_1-or-channel","children":[]}],"relativePath":"concurrent/14or-channel.md"}'),p={name:"concurrent/14or-channel.md"},o=l(`<h3 id="_1-or-channel" tabindex="-1">1.or-channel <a class="header-anchor" href="#_1-or-channel" aria-hidden="true">#</a></h3><ul><li><p>\u6709\u65F6\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u81EA\u5DF1\u5E0C\u671B\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u5B8C\u6210\u7684 channel \u5408\u5E76\u5230\u4E00\u4E2A\u5B8C\u6210\u7684 channel \u4E2D\uFF0C\u8BE5 channel \u5728\u4EFB\u4F55\u7EC4\u4EF6 channel \u5173\u95ED\u65F6\u5173\u95ED</p></li><li><p>\u7F16\u5199\u4E00\u4E2A\u6267\u884C\u8FD9\u79CD\u8026\u5408\u7684\u9009\u62E9\u662F\u5B8C\u5168\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C\u5C3D\u7BA1\u5F88\u5197\u957F\u3002\u4F46\u662F\uFF0C\u6709\u65F6\u4F60\u65E0\u6CD5\u77E5\u9053\u4F60\u5728\u8FD0\u884C\u65F6\u4F7F\u7528\u7684\u5DF2\u5B8C\u6210\u7684 channel \u7684\u6570\u91CF\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6216\u8005\u5982\u679C\u4F60\u53EA\u559C\u6B22\u5355\u7EBF\u7A0B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 or-channel \u6A21\u5F0F\u5C06\u8FD9\u4E9B channel \u7EC4\u5408\u5728\u4E00\u8D77</p></li><li><p>\u8FD9\u79CD\u6A21\u5F0F\u901A\u8FC7\u9012\u5F52\u548C goroutine \u521B\u5EFA\u4E00\u4E2A\u590D\u5408 done channel,\u6211\u4EEC\u6765\u770B\u4F8B\u5B50</p></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// or\u7684\u7C7B\u578B\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u662F\u591A\u4E2A\u53EA\u8BFBchannel,\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u53EA\u8BFBchannel</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> or </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">channels </span><span style="color:#89DDFF;">...&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">or </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">channels </span><span style="color:#89DDFF;">...&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5982\u679C\u53EF\u53D8\u5207\u7247\u662F\u7A7A\u7684\uFF0C\u6211\u4EEC\u53EA\u8FD4\u56DE\u4E00\u4E2A\u7A7Achannel.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5982\u679C\u6211\u4EEC\u7684\u53D8\u91CF\u5207\u7247\u53EA\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF0C\u6211\u4EEC\u53EA\u8FD4\u56DE\u8BE5\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  orDone </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u8FD9\u662F\u51FD\u6570\u7684\u4E3B\u4F53\uFF0C\u4EE5\u53CA\u9012\u5F52\u53D1\u751F\u7684\u5730\u65B9\u3002\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2Agoroutine,\u4EE5\u4FBF\u6211\u4EEC\u53EF\u4EE5\u4E0D\u53D7\u963B\u585E\u5730\u7B49\u5F85\u6211\u4EECchannel\u4E0A\u7684\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u53EA\u8981\u5176\u4E2D\u4E00\u4E2A\u9012\u5F52\u7ED3\u675F\uFF0C\u5C06close(orDone)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">orDone</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u57FA\u4E8E\u6211\u4EEC\u8FDB\u884C\u8FED\u4EE3\u7684\u65B9\u5F0F\uFF0C\u6BCF\u4E00\u6B21\u8FED\u4EE3\u8C03\u7528\u90FD\u81F3\u5C11\u6709\u4E24\u4E2Achannel.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5728\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u4E3A\u4E24\u4E2Achannel\u7684\u60C5\u51B5\u91C7\u7528\u4E86\u7EA6\u675Fgoroutine\u6570\u76EE\u7684\u4F18\u5316\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#82AAFF;">or</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">channels</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:],</span><span style="color:#A6ACCD;"> orDone</span><span style="color:#89DDFF;">)...):</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5F53\u6709\u4E00\u4E2A\u9012\u5F52\u7ED3\u675F\uFF0C\u8FD4\u56DE\u7684oDone\u5C06\u88ABclose</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> orDone</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li><p>\u4E0A\u9762\u7684\u662F\u4E00\u4E2A\u76F8\u5F53\u7B80\u6D01\u7684\u51FD\u6570\uFF0C\u4F7F\u4F60\u53EF\u4EE5\u5C06\u4EFB\u4F55\u6570\u91CF\u7684 channel \u7EC4\u5408\u5230\u5355\u4E2A channel \u4E2D\uFF0C\u53EA\u8981\u4EFB\u4F55\u7EC4\u4EF6 channel \u5173\u95ED\u6216 \u5199\u5165\uFF0C\u8BE5 channel \u5C31\u4F1A\u5173\u95ED\u3002\u6211\u4EEC\u6765\u770B\u770B\u5982\u4F55\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u3002</p></li><li><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u77ED\u7684\u4F8B\u5B50\uFF0C\u5B83\u5C06\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u540E\u5173\u95ED\u7684 channel,\u5E76\u5C06\u8FD9\u4E9B channel \u5408\u5E76\u5230\u4E00\u4E2A\u5173\u95ED\u7684\u5355\u4E2A channel \u4E2D</p></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u53EA\u662F\u521B\u5EFA\u4E00\u4E2Achannel, \u5F53\u540E\u7EED\u65F6\u95F4\u4E2D\u6307\u5B9A\u7684\u65F6\u95F4\u7ED3\u675F\u65F6\u5C06\u5173\u95ED\u8BE5channel</span></span>
<span class="line"><span style="color:#A6ACCD;">sig </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">after time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Duration</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sleep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">after</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> c</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u8FFD\u8E2A\u5927\u81F4\u6765\u81EAor\u51FD\u6570\u7684channel</span></span>
<span class="line"><span style="color:#A6ACCD;">start </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Now</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;-</span><span style="color:#82AAFF;">or</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">sig</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Hour</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">sig</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Minute</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">sig</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">sig</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Minute</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">done after %v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Since</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// done after 1.0010572s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u5C3D\u7BA1\u5728\u6211\u4EEC\u7684\u8C03\u7528\u4E2D\u653E\u7F6E\u4E86\u591A\u4E2A channel \u6216\u9700\u8981\u4E0D\u540C\u65F6\u95F4\u624D\u80FD\u5173\u95ED\uFF0C\u4F46\u6211\u4EEC\u5728 1s \u540E\u5173\u95ED\u7684 channel \u4F1A\u5BFC\u81F4\u7531\u8BE5\u8C03\u7528\u521B\u5EFA\u7684\u6574\u4E2A channel \u5173\u95ED\u3002\u8FD9\u662F\u56E0\u4E3A\u5C3D\u7BA1\u5B83\u4F4D\u4E8E\u6811\u6216\u51FD\u6570\u6784\u5EFA\u7684\u6570\u4E2D\uFF0C\u5B83\u5C06\u59CB\u7EC8\u5173\u95ED\u3002\u56E0\u4E3A\u4F9D\u8D56\u4E8E\u5176\u5173\u95ED\u7684 channel \u4E5F\u5C06\u5173\u95ED\u3002</li></ul>`,6),e=[o];function c(r,t,D,F,y,A){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{i as __pageData,b as default};
