import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386","slug":"_1-\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386","link":"#_1-\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386","children":[]},{"level":3,"title":"2.\u5E76\u53D1\u7684\u9000\u51FA","slug":"_2-\u5E76\u53D1\u7684\u9000\u51FA","link":"#_2-\u5E76\u53D1\u7684\u9000\u51FA","children":[]},{"level":3,"title":"3.\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50","slug":"_3-\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50","link":"#_3-\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50","children":[]}],"relativePath":"gonext/18goroutine.md"}'),p={name:"gonext/18goroutine.md"},o=l(`<h3 id="_1-\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386" tabindex="-1">1.\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386 <a class="header-anchor" href="#_1-\u5E76\u53D1\u7684\u5B57\u5178\u904D\u5386" aria-hidden="true">#</a></h3><ul><li>\u8FD9\u4E2A\u4F8B\u5B50\u751F\u6210\u6307\u5B9A\u76EE\u5F55\u7684\u786C\u76D8\u60C5\u51B5\u62A5\u544A\uFF0C\u8FD9\u4E2A\u7A0B\u5E8F\u548CUnix\u91CC\u7684du\u5DE5\u5177\u6BD4\u8F83\u76F8\u4F3C</li><li>\u5927\u591A\u6570\u5DE5\u4F5C\u7528\u4E0B\u9762\u8FD9\u4E2AwalkDir\u51FD\u6570\u6765\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F7F\u7528dirents\u51FD\u6570\u6765\u679A\u4E3E\u4E00\u4E2A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u5165\u53E3</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">io/ioutil</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path/filepath</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// fileSizes\u53EA\u5199\u901A\u9053</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">walkDir</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fileSizes </span><span style="color:#89DDFF;">chan&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> entry </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dirents</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsDir</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			subdir </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> filepath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Join</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Name</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">walkDir</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">subdir</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fileSizes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u662F\u76EE\u5F55\uFF0C\u5219\u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			fileSizes </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Size</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Name</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Size</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8BFB\u53D6\u76EE\u5F55\uFF0C\u7136\u540E\u8FD4\u56DE\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4FE1\u606F</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dirents</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FileInfo </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	entries</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> ioutil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadDir</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> entries</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fileSizes </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int64</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 1.goroutine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u8FD9\u91CC\u662F\u540C\u6B65\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">walkDir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fileSizes</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u6240\u4EE5\u8FD9\u91CC\u4F1A\u7B49walkDir\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u6267\u884Cclose</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fileSizes</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#C792EA;">int64</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// main goroutine</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> size </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> fileSizes </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		result </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> size</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5355\u4F4D\u662Fbytes</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 113865\u5B57\u8282</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="_2-\u5E76\u53D1\u7684\u9000\u51FA" tabindex="-1">2.\u5E76\u53D1\u7684\u9000\u51FA <a class="header-anchor" href="#_2-\u5E76\u53D1\u7684\u9000\u51FA" aria-hidden="true">#</a></h3><ul><li>\u6211\u4EEC\u5173\u95ED\u4E86\u4E00\u4E2Achannel\u5E76\u4E14\u6D88\u8D39\u6389\u4E86\u6240\u6709\u5DF2\u53D1\u9001\u7684\u503C\uFF0C\u64CD\u4F5Cchannel\u4E4B\u540E\u7684\u4EE3\u7801\u53EF\u4EE5\u7ACB\u5373\u88AB\u6267\u884C\uFF0C\u5E76\u4E14\u4F1A\u4EA7\u751F\u96F6\u503C</li><li>\u6211\u4EEC\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u673A\u5236\u6269\u5C55\u4E00\u4E0B\uFF0C\u6765\u4F5C\u4E3A\u6211\u4EEC\u7684\u5E7F\u64AD\u673A\u5236\uFF1A\u4E0D\u8981\u5411channel\u53D1\u9001\u503C\uFF0C\u800C\u662F\u7528\u5173\u95ED\u4E00\u4E2Achannel\u6765\u8FDB\u884C\u5E7F\u64AD</li></ul><h3 id="_3-\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50" tabindex="-1">3.\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u804A\u5929\u670D\u52A1\u5668\u4F8B\u5B50" aria-hidden="true">#</a></h3><ul><li>\u8FD9\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u8BA9\u4E00\u4E9B\u7528\u6237\u901A\u8FC7\u670D\u52A1\u5668\u5411\u5176\u4ED6\u6240\u6709\u7528\u6237\u5E7F\u64AD\u6587\u672C\u4FE1\u606F\u3002</li><li>\u8FD9\u4E2A\u7A0B\u5E8F\u4E2D\u6709\u56DB\u79CDgoroutine. main\u548Cbroadcaster\u5404\u81EA\u662F\u4E00\u4E2Agoroutine\u5B9E\u4F8B \u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u90FD\u4F1A\u6709\u4E00\u4E2AhandleConn\u548CclientWriter\u7684goroutine</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">bufio</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">net</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	listener</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> net</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Listen</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tcp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:8000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fatal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">broadcaster</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> listener</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Accept</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">continue</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// broadcaster: \u5185\u90E8\u53D8\u91CFclients\u4F1A\u8BB0\u5F55\u5F53\u524D\u5EFA\u7ACB\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\u96C6\u5408</span></span>
<span class="line"><span style="color:#676E95;">// \u5176\u8BB0\u5F55\u7684\u5185\u5BB9\u662F\u6BCF\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7684\u6D88\u606F\u53D1\u51FAchannel\u7684&quot;\u8D44\u683C&quot;\u4FE1\u606F</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">client</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">chan&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7C7B\u578Bclient\u662F\u53EA\u5199\u7BA1\u9053\u7C7B\u578B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	entering </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6BCF\u4E00\u4E2A\u7BA1\u9053\u653E\u7684\u53C8\u662F\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	leaving  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	messages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6240\u6709\u4F20\u5165\u7684\u5BA2\u6237\u7AEF\u6D88\u606F</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">broadcaster</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5168\u90E8\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u4E3A\u4EC0\u4E48\u5BA2\u6237\u7AEF\u7684\u7C7B\u578B\u662F\u4E00\u4E2A\u53EA\u5199\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	clients </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">messages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// \u5E7F\u64AD\u63A5\u6536\u5230\u7684\u6D88\u606F\u7ED9\u6240\u6709\u7684\u5BA2\u6237\u7AEF\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> cli </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> clients </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				cli </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> msg</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u76D1\u542C\u5168\u5C40\u7684entering\u548Cleaving\u7684channel\u6765\u83B7\u77E5\u5BA2\u6237\u7AEF\u7684\u5230\u6765\u548C\u79BB\u5F00\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u5F53\u5176\u63A5\u6536\u5230\u5176\u4E2D\u7684\u4E00\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u4F1A\u66F4\u65B0clients\u96C6\u5408\uFF0C\u5F53\u8BE5\u4E8B\u4EF6\u662F\u79BB\u5F00\u884C\u4E3A\u65F6\uFF0C\u5B83\u4F1A\u5173\u95ED\u5BA2\u6237\u7AEF\u7684\u6D88\u606F\u53D1\u51FAchannel</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// broadcaster\u4E5F\u4F1A\u76D1\u542C\u5168\u5C40\u7684\u6D88\u606Fchannel,\u6240\u6709\u7684\u5BA2\u6237\u7AEF\u90FD\u4F1A\u5411\u8FD9\u4E2Achannel\u53D1\u9001\u6D88\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u5F53broadcaster\u63A5\u6536\u5230\u6D88\u606F\u65F6\uFF0C\u5C31\u4F1A\u5C06\u5176\u5E7F\u64AD\u81F3\u6240\u6709\u8FDE\u63A5\u5230\u670D\u52A1\u7AEF\u7684\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> cli </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">entering</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			clients</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">cli</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> cli </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">leaving</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">clients</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cli</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cli</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5BA2\u6237\u7AEF\u7684goroutine.handleConn\u51FD\u6570\u4F1A\u4E3A\u5B83\u7684\u5BA2\u6237\u7AEF\u521B\u5EFA\u4E00\u4E2A\u6D88\u606F\u53D1\u51FAchannel\u5E76\u901A\u8FC7</span></span>
<span class="line"><span style="color:#676E95;">// entering channel\u6765\u901A\u77E5\u5BA2\u6237\u7AEF\u7684\u5230\u6765\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleConn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn net</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Conn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ch </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clientWriter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ch</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	who </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> conn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RemoteAddr</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">you are </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> who</span></span>
<span class="line"><span style="color:#A6ACCD;">	entering </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> ch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// bufio.NewScanner\u9700\u8981\u4F20\u9012\u4E00\u4E2AReader\u8FD4\u56DE\u4E00\u4E2AScanner</span></span>
<span class="line"><span style="color:#A6ACCD;">	input </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> bufio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewScanner</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scan</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		messages </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> who </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> input</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Text</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5C06ch\u653E\u5230leaving\u7BA1\u9053\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">	leaving </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> ch</span></span>
<span class="line"><span style="color:#A6ACCD;">	messages </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> who </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> has left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	conn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clientWriter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn net</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u904D\u5386\u7BA1\u9053ch</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Fprintln</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">conn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5C06msg\u5199\u5230conn\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div>`,8),e=[o];function r(c,t,D,F,y,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
