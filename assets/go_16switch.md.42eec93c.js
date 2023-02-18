import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.switch","slug":"_1-switch","link":"#_1-switch","children":[]},{"level":3,"title":"3.\u4F8B\u5B50","slug":"_3-\u4F8B\u5B50","link":"#_3-\u4F8B\u5B50","children":[]},{"level":3,"title":"4.typeSwitch","slug":"_4-typeswitch","link":"#_4-typeswitch","children":[]},{"level":3,"title":"5.\u6355\u83B7\u591A\u4E2A\u503C","slug":"_5-\u6355\u83B7\u591A\u4E2A\u503C","link":"#_5-\u6355\u83B7\u591A\u4E2A\u503C","children":[]},{"level":3,"title":"6.\u6355\u83B7\u591A\u4E2A\u503C","slug":"_6-\u6355\u83B7\u591A\u4E2A\u503C","link":"#_6-\u6355\u83B7\u591A\u4E2A\u503C","children":[]},{"level":3,"title":"6.fallthrough","slug":"_6-fallthrough","link":"#_6-fallthrough","children":[]},{"level":3,"title":"37.switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F","slug":"_37-switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F","link":"#_37-switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F","children":[]}],"relativePath":"go/16switch.md"}'),p={name:"go/16switch.md"},o=l(`<h3 id="_1-switch" tabindex="-1">1.switch <a class="header-anchor" href="#_1-switch" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> var1 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> val1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> val2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-\u4F8B\u5B50" tabindex="-1">3.\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> grade </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> marks </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> marks </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grade </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grade </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// case\u540E\u9762\u4E0D\u9700\u8981break</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grade</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// case\u53EF\u4EE5\u6355\u83B7\u591A\u4E2A\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">						</span><span style="color:#676E95;">// default</span></span>
<span class="line"><span style="color:#A6ACCD;">		grade </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">grade</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-typeswitch" tabindex="-1">4.typeSwitch <a class="header-anchor" href="#_4-typeswitch" aria-hidden="true">#</a></h3><ul><li>switch \u8BED\u53E5\u8FD8\u53EF\u4EE5\u88AB\u7528\u4E8E type-switch \u6765\u5224\u65AD\u67D0\u4E2A interface \u53D8\u91CF\u4E2D\u5B9E\u9645\u5B58\u50A8\u7684\u53D8\u91CF\u7C7B\u578B\u3002</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">interface{}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//\u5199\u6CD5\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">.(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5E26\u521D\u59CB\u5316\u8BED\u53E5,x\u5FC5\u987B\u65F6interface</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> x \u7684\u7C7B\u578B :%T</span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u6253\u5370\u8FD9\u4E2A\uFF0C\u4E3A\u5565</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x \u662F int \u578B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x \u662F float64 \u578B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x \u662F func(int) \u578B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x \u662F bool \u6216 string \u578B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u672A\u77E5\u578B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_5-\u6355\u83B7\u591A\u4E2A\u503C" tabindex="-1">5.\u6355\u83B7\u591A\u4E2A\u503C <a class="header-anchor" href="#_5-\u6355\u83B7\u591A\u4E2A\u503C" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u5199\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;">// \u6355\u83B70\u548C1</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_6-\u6355\u83B7\u591A\u4E2A\u503C" tabindex="-1">6.\u6355\u83B7\u591A\u4E2A\u503C <a class="header-anchor" href="#_6-\u6355\u83B7\u591A\u4E2A\u503C" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u5199\u6CD5\u4E09</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_6-fallthrough" tabindex="-1">6.fallthrough <a class="header-anchor" href="#_6-fallthrough" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u5199\u6CD5\u4E09</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fallthrough</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">fallthrough</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">        Go\u7684switch\u975E\u5E38\u7075\u6D3B\uFF0C\u8868\u8FBE\u5F0F\u4E0D\u5FC5\u662F\u5E38\u91CF\u6216\u6574\u6570\uFF0C\u6267\u884C\u7684\u8FC7\u7A0B\u4ECE\u4E0A\u81F3\u4E0B\uFF0C\u76F4\u5230\u627E\u5230\u5339\u914D\u9879\uFF1B</span></span>
<span class="line"><span style="color:#676E95;">        \u800C\u5982\u679Cswitch\u6CA1\u6709\u8868\u8FBE\u5F0F\uFF0C\u5B83\u4F1A\u5339\u914Dtrue\u3002</span></span>
<span class="line"><span style="color:#676E95;">        Go\u91CC\u9762switch\u9ED8\u8BA4\u76F8\u5F53\u4E8E\u6BCF\u4E2Acase\u6700\u540E\u5E26\u6709break\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">        \u5339\u914D\u6210\u529F\u540E\u4E0D\u4F1A\u81EA\u52A8\u5411\u4E0B\u6267\u884C\u5176\u4ED6case\uFF0C\u800C\u662F\u8DF3\u51FA\u6574\u4E2Aswitch,</span></span>
<span class="line"><span style="color:#676E95;">        \u4F46\u662F\u53EF\u4EE5\u4F7F\u7528fallthrough\u5F3A\u5236\u6267\u884C\u540E\u9762\u7684case\u4EE3\u7801\u3002</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_37-switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F" tabindex="-1">37.switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F <a class="header-anchor" href="#_37-switch\u4F7F\u7528\u6761\u4EF6\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//\u5199\u6CD5\u56DB</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7701\u7565\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u53EF\u5F53 if...else if...else</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i &gt; 0 and i &lt; 10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i &gt; 10 and i &lt; 20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,15),e=[o];function c(r,t,D,F,y,i){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{A as __pageData,b as default};
