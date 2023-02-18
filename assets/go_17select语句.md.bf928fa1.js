import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.select","slug":"_1-select","link":"#_1-select","children":[]},{"level":3,"title":"2.select\u8BED\u53E5\u7684\u8BED\u6CD5","slug":"_2-select\u8BED\u53E5\u7684\u8BED\u6CD5","link":"#_2-select\u8BED\u53E5\u7684\u8BED\u6CD5","children":[]},{"level":3,"title":"3.\u4F8B\u5B50","slug":"_3-\u4F8B\u5B50","link":"#_3-\u4F8B\u5B50","children":[]},{"level":3,"title":"4.select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5","slug":"_4-select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5","link":"#_4-select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5","children":[]},{"level":3,"title":"5.\u9000\u51FA","slug":"_5-\u9000\u51FA","link":"#_5-\u9000\u51FA","children":[]},{"level":3,"title":"6.\u5224\u65ADchannel\u662F\u5426\u963B\u585E","slug":"_6-\u5224\u65ADchannel\u662F\u5426\u963B\u585E","link":"#_6-\u5224\u65ADchannel\u662F\u5426\u963B\u585E","children":[]}],"relativePath":"go/17select\u8BED\u53E5.md"}'),p={name:"go/17select\u8BED\u53E5.md"},e=l(`<h3 id="_1-select" tabindex="-1">1.select <a class="header-anchor" href="#_1-select" aria-hidden="true">#</a></h3><ul><li>select \u8BED\u53E5\u7C7B\u4F3C\u4E8E switch \u8BED\u53E5\uFF0C\u4F46\u662Fselect\u4F1A\u968F\u673A\u6267\u884C\u4E00\u4E2A\u53EF\u8FD0\u884C\u7684case\u3002\u5982\u679C\u6CA1\u6709case\u53EF\u8FD0\u884C\uFF0C\u5B83\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u6709case\u53EF\u8FD0\u884C\u3002</li><li>select \u662FGo\u4E2D\u7684\u4E00\u4E2A\u63A7\u5236\u7ED3\u6784\uFF0C\u7C7B\u4F3C\u4E8E\u7528\u4E8E\u901A\u4FE1\u7684switch\u8BED\u53E5\u3002\u6BCF\u4E2Acase\u5FC5\u987B\u662F\u4E00\u4E2A\u901A\u4FE1\u64CD\u4F5C\uFF0C\u8981\u4E48\u662F\u53D1\u9001\u8981\u4E48\u662F\u63A5\u6536\u3002 select \u968F\u673A\u6267\u884C\u4E00\u4E2A\u53EF\u8FD0\u884C\u7684case\u3002\u5982\u679C\u6CA1\u6709case\u53EF\u8FD0\u884C\uFF0C\u5B83\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u6709case\u53EF\u8FD0\u884C\u3002\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5B50\u53E5\u5E94\u8BE5\u603B\u662F\u53EF\u8FD0\u884C\u7684\u3002</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">select {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case communication clause  :</span></span>
<span class="line"><span style="color:#A6ACCD;">       statement(s);      </span></span>
<span class="line"><span style="color:#A6ACCD;">    case communication clause  :</span></span>
<span class="line"><span style="color:#A6ACCD;">       statement(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u4F60\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u6570\u91CF\u7684 case */</span></span>
<span class="line"><span style="color:#A6ACCD;">    default : /* \u53EF\u9009 */</span></span>
<span class="line"><span style="color:#A6ACCD;">       statement(s);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-select\u8BED\u53E5\u7684\u8BED\u6CD5" tabindex="-1">2.select\u8BED\u53E5\u7684\u8BED\u6CD5 <a class="header-anchor" href="#_2-select\u8BED\u53E5\u7684\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6BCF\u4E2Acase\u90FD\u5FC5\u987B\u662F\u4E00\u4E2A\u901A\u4FE1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6240\u6709channel\u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6240\u6709\u88AB\u53D1\u9001\u7684\u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u4EFB\u610F\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FDB\u884C\uFF0C\u5B83\u5C31\u6267\u884C\uFF1B\u5176\u4ED6\u88AB\u5FFD\u7565\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u6709\u591A\u4E2Acase\u90FD\u53EF\u4EE5\u8FD0\u884C\uFF0CSelect\u4F1A\u968F\u673A\u516C\u5E73\u5730\u9009\u51FA\u4E00\u4E2A\u6267\u884C\u3002\u5176\u4ED6\u4E0D\u4F1A\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5426\u5219\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u6709default\u5B50\u53E5\uFF0C\u5219\u6267\u884C\u8BE5\u8BED\u53E5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u6CA1\u6709default\u5B57\u53E5\uFF0Cselect\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FD0\u884C\uFF1BGo\u4E0D\u4F1A\u91CD\u65B0\u5BF9channel\u6216\u503C\u8FDB\u884C\u6C42\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3-\u4F8B\u5B50" tabindex="-1">3.\u4F8B\u5B50 <a class="header-anchor" href="#_3-\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> c1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c3 </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> i1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i2 </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> i1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">c1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">received</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from c1</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> c2 </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> i2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to c2</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> i3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ok </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(&lt;-</span><span style="color:#A6ACCD;">c3</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//same as: i3, ok := &lt;- c3</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> ok</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">received</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from c3</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c3 is closed</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u6267\u884C\u7ED3\u679C\u8FDB\u5165\u8FD9\u4E2Adefault</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no communication</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    select { //\u4E0D\u505C\u7684\u5728\u8FD9\u91CC\u68C0\u6D4B</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &lt;-chanl : //\u68C0\u6D4B\u6709\u6CA1\u6709\u6570\u636E\u53EF\u4EE5\u8BFB</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5982\u679Cchanl\u6210\u529F\u8BFB\u53D6\u5230\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    case chan2 &lt;- 1 : //\u68C0\u6D4B\u6709\u6CA1\u6709\u53EF\u4EE5\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5982\u679C\u6210\u529F\u5411chan2\u5199\u5165\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5047\u5982\u6CA1\u6709default\uFF0C\u90A3\u4E48\u5728\u4EE5\u4E0A\u4E24\u4E2A\u6761\u4EF6\u90FD\u4E0D\u6210\u7ACB\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u4F1A\u5728\u6B64\u963B\u585E//\u4E00\u822Cdefault\u4F1A\u4E0D\u5199\u5728\u91CC\u9762\uFF0Cselect\u4E2D\u7684default\u5B50\u53E5\u603B\u662F\u53EF\u8FD0\u884C\u7684\uFF0C\u56E0\u4E3A\u4F1A\u5F88\u6D88\u8017CPU\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5982\u679C\u4EE5\u4E0A\u90FD\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\uFF0C\u90A3\u4E48\u5219\u8FDB\u884Cdefault\u5904\u7406\u6D41\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5" tabindex="-1">4.select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5 <a class="header-anchor" href="#_4-select\u7684\u4F7F\u7528\u53CA\u7ECF\u5178\u7528\u6CD5" aria-hidden="true">#</a></h3><ul><li>select\u662FGo\u4E2D\u7684\u4E00\u4E2A\u63A7\u5236\u7ED3\u6784\uFF0C\u7C7B\u4F3C\u4E8Eswitch\u8BED\u53E5\uFF0C\u7528\u4E8E\u5904\u7406\u5F02\u6B65IO\u64CD\u4F5C\u3002select\u4F1A\u76D1\u542Ccase\u8BED\u53E5\u4E2Dchannel\u7684\u8BFB\u5199\u64CD\u4F5C\uFF0C\u5F53case\u4E2Dchannel\u8BFB\u5199\u64CD\u4F5C\u4E3A\u975E\u963B\u585E\u72B6\u6001\uFF08\u5373\u80FD\u8BFB\u5199\uFF09\u65F6\uFF0C\u5C06\u4F1A\u89E6\u53D1\u76F8\u5E94\u7684\u52A8\u4F5C\u3002 select\u4E2D\u7684case\u8BED\u53E5\u5FC5\u987B\u662F\u4E00\u4E2Achannel\u64CD\u4F5C</li><li>select\u4E2D\u7684default\u5B50\u53E5\u603B\u662F\u53EF\u8FD0\u884C\u7684\u3002</li><li>\u5982\u679C\u6709\u591A\u4E2Acase\u90FD\u53EF\u4EE5\u8FD0\u884C\uFF0Cselect\u4F1A\u968F\u673A\u516C\u5E73\u5730\u9009\u51FA\u4E00\u4E2A\u6267\u884C\uFF0C\u5176\u4ED6\u4E0D\u4F1A\u6267\u884C\u3002</li><li>\u5982\u679C\u6CA1\u6709\u53EF\u8FD0\u884C\u7684case\u8BED\u53E5\uFF0C\u4E14\u6709default\u8BED\u53E5\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884Cdefault\u7684\u52A8\u4F5C\u3002</li><li>\u5982\u679C\u6CA1\u6709\u53EF\u8FD0\u884C\u7684case\u8BED\u53E5\uFF0C\u4E14\u6CA1\u6709default\u8BED\u53E5\uFF0Cselect\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u67D0\u4E2Acase\u901A\u4FE1\u53EF\u4EE5\u8FD0\u884C</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u6BD4\u5982\u5728\u4E0B\u9762\u7684\u573A\u666F\u4E2D\uFF0C\u4F7F\u7528\u5168\u5C40resChan\u6765\u63A5\u53D7response\uFF0C\u5982\u679C\u65F6\u95F4\u8D85\u8FC73S,resChan\u4E2D\u8FD8\u6CA1\u6709\u6570\u636E\u8FD4\u56DE\uFF0C\u5219\u7B2C\u4E8C\u6761case\u5C06\u6267\u884C</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> resChan </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// do request</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">resChan</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">doData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">After</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">request time out</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_5-\u9000\u51FA" tabindex="-1">5.\u9000\u51FA <a class="header-anchor" href="#_5-\u9000\u51FA" aria-hidden="true">#</a></h3><ul><li>\u6CA1\u770B\u61C2</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u4E3B\u7EBF\u7A0B\uFF08\u534F\u7A0B\uFF09\u4E2D\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> shouldQuit</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct{})</span></span>
<span class="line"><span style="color:#A6ACCD;">fun </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">//loop</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//...out of the loop</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shouldQuit</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">cleanUp</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u518D\u53E6\u5916\u4E00\u4E2A\u534F\u7A0B\u4E2D\uFF0C\u5982\u679C\u8FD0\u884C\u9047\u5230\u975E\u6CD5\u64CD\u4F5C\u6216\u4E0D\u53EF\u5904\u7406\u7684\u9519\u8BEF\uFF0C\u5C31\u5411shouldQuit\u53D1\u9001\u6570\u636E\u901A\u77E5\u7A0B\u5E8F\u505C\u6B62\u8FD0\u884C</span></span>
<span class="line"><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">shouldQuit</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_6-\u5224\u65ADchannel\u662F\u5426\u963B\u585E" tabindex="-1">6.\u5224\u65ADchannel\u662F\u5426\u963B\u585E <a class="header-anchor" href="#_6-\u5224\u65ADchannel\u662F\u5426\u963B\u585E" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">//\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u662F\u5B58\u5728\u4E0D\u5E0C\u671Bchannel\u7F13\u5B58\u6EE1\u4E86\u7684\u9700\u6C42\u7684\uFF0C\u53EF\u4EE5\u7528\u5982\u4E0B\u65B9\u6CD5\u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> make </span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">data\uFF1A</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u5982\u679C\u4E0D\u80FD\u5F80\u901A\u9053\u91CC\u9762\u653Edata,\u8868\u793A\u901A\u9053\u5DF2\u7ECF\u6EE1\u4E86\uFF0C\u8FDB\u5165default</span></span>
<span class="line"><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//\u505A\u76F8\u5E94\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E22\u5F03data\u3002\u89C6\u9700\u6C42\u800C\u5B9A</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 2.\u5224\u65ADchannel\u662F\u5426\u963B\u585E</span></span>
<span class="line"><span style="color:#A6ACCD;">	ch </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	data </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">ch</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u901A\u9053\u6CA1\u6709\u6EE1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u901A\u9053\u6EE1\u4E86</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,17),o=[e];function c(r,t,D,y,F,i){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{C as __pageData,b as default};
