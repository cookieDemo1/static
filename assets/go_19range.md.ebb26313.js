import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.range","slug":"_1-range","link":"#_1-range","children":[]},{"level":3,"title":"2.\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528_\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C","slug":"_2-\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528-\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C","link":"#_2-\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528-\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"3.\u4F8B\u5B50","slug":"_3-\u4F8B\u5B50","link":"#_3-\u4F8B\u5B50","children":[]},{"level":3,"title":"3.\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61","slug":"_3-\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61","link":"#_3-\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61","children":[]},{"level":3,"title":"4.\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236","slug":"_4-\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236","link":"#_4-\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236","children":[]},{"level":3,"title":"5.for \u548C for range\u7684\u533A\u522B","slug":"_5-for-\u548C-for-range\u7684\u533A\u522B","link":"#_5-for-\u548C-for-range\u7684\u533A\u522B","children":[]}],"relativePath":"go/19range.md"}'),p={name:"go/19range.md"},e=l(`<h3 id="_1-range" tabindex="-1">1.range <a class="header-anchor" href="#_1-range" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for key, value := range oldMap {</span></span>
<span class="line"><span style="color:#A6ACCD;">    newMap[key] = value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528-\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C" tabindex="-1">2.\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528_\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C <a class="header-anchor" href="#_2-\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u4F7F\u7528-\u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u7701\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">            1st value	2nd value	</span></span>
<span class="line"><span style="color:#A6ACCD;">string	    index	    s[index]</span></span>
<span class="line"><span style="color:#A6ACCD;">array/slice	index	    s[index]	</span></span>
<span class="line"><span style="color:#A6ACCD;">map	        key	        m[key]	</span></span>
<span class="line"><span style="color:#A6ACCD;">channel	    element	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-\u4F8B\u5B50" tabindex="-1">3.\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5FFD\u7565\u7B2C\u4E8C\u4E2A\u503Cvalue</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5FFD\u7565index</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5FFD\u7565\u5168\u90E8\u8FD4\u56DE\u503C\uFF0C\u4EC5\u8FED\u4EE3</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u904D\u5386map</span></span>
<span class="line"><span style="color:#A6ACCD;">	m </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_3-\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61" tabindex="-1">3.\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61 <a class="header-anchor" href="#_3-\u6CE8\u610Frange\u4F1A\u590D\u5236\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// index\u3001value \u90FD\u662F\u4ECE\u590D\u5236\u54C1\u4E2D\u53D6\u51FA\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5728\u4FEE\u6539\u524D\uFF0C\u6211\u4EEC\u5148\u4FEE\u6539\u539F\u6570\u7EC4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">            a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">999</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">999</span></span>
<span class="line"><span style="color:#A6ACCD;">            fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u786E\u8BA4\u4FEE\u6539\u6709\u6548\uFF0C\u8F93\u51FA [0, 999, 999]\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4F7F\u7528\u590D\u5236\u54C1\u4E2D\u53D6\u51FA\u7684 value \u4FEE\u6539\u539F\u6570\u7EC4\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8F93\u51FA [100, 101, 102]\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_4-\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236" tabindex="-1">4.\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236 <a class="header-anchor" href="#_4-\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    s </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u590D\u5236 struct slice { pointer, len, cap }\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">[:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// \u5BF9 slice \u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u5F71\u54CD range\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">            s</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5BF9\u5E95\u5C42\u6570\u636E\u7684\u4FEE\u6539\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_5-for-\u548C-for-range\u7684\u533A\u522B" tabindex="-1">5.for \u548C for range\u7684\u533A\u522B <a class="header-anchor" href="#_5-for-\u548C-for-range\u7684\u533A\u522B" aria-hidden="true">#</a></h3><ul><li><p>for\u53EF\u4EE5 \u904D\u5386array\u548Cslice \u904D\u5386key\u4E3A\u6574\u578B\u9012\u589E\u7684map \u904D\u5386string</p></li><li><p>for range\u53EF\u4EE5\u5B8C\u6210\u6240\u6709for\u53EF\u4EE5\u505A\u7684\u4E8B\u60C5\uFF0C\u5374\u80FD\u505A\u5230for\u4E0D\u80FD\u505A\u7684\uFF0C\u5305\u62EC \u904D\u5386key\u4E3Astring\u7C7B\u578B\u7684map\u5E76\u540C\u65F6\u83B7\u53D6key\u548Cvalue \u904D\u5386channel</p></li></ul>`,12),o=[e];function r(c,t,D,y,C,F){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};