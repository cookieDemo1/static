import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u8D85\u65F6\u548C\u53D6\u6D88","slug":"_1-\u8D85\u65F6\u548C\u53D6\u6D88","link":"#_1-\u8D85\u65F6\u548C\u53D6\u6D88","children":[]},{"level":3,"title":"2.\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0?","slug":"_2-\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0","link":"#_2-\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0","children":[]},{"level":3,"title":"3.\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0(\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88)","slug":"_3-\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0-\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88","link":"#_3-\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0-\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88","children":[]},{"level":3,"title":"4.\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B","slug":"_4-\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B","link":"#_4-\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B","children":[]}],"relativePath":"concurrent/21\u8D85\u65F6\u548C\u53D6\u6D88.md"}'),p={name:"concurrent/21\u8D85\u65F6\u548C\u53D6\u6D88.md"},e=l(`<h3 id="_1-\u8D85\u65F6\u548C\u53D6\u6D88" tabindex="-1">1.\u8D85\u65F6\u548C\u53D6\u6D88 <a class="header-anchor" href="#_1-\u8D85\u65F6\u548C\u53D6\u6D88" aria-hidden="true">#</a></h3><ul><li>\u5728\u5E76\u53D1\u4EE3\u7801\u8FD0\u884C\u65F6\uFF0C\u8D85\u65F6(Timeouts)\u548C\u53D6\u6D88(Cancellaation)\u4F1A\u9891\u7E41\u51FA\u73B0\u3002</li><li>\u8D85\u65F6\u7684\u5904\u7406\u5BF9\u4E8E\u521B\u5EFA\u4E00\u4E2A\u6613\u4E8E\u7ACB\u5373\u7684\u7CFB\u7EDF\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u8FDB\u7A0B\u88AB\u53D6\u6D88\u662F\u5176\u53D1\u751F\u8D85\u65F6\u7684\u81EA\u7136\u53CD\u6620\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u4E00\u4E2A\u5E76\u53D1\u8FDB\u7A0B\u53EF\u80FD\u88AB\u53D6\u6D88\u7684\u539F\u56E0\u3002</li></ul><h3 id="_2-\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0" tabindex="-1">2.\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0? <a class="header-anchor" href="#_2-\u5E76\u53D1\u7A0B\u5E8F\u8D85\u65F6\u7684\u539F\u56E0" aria-hidden="true">#</a></h3><p>1.\u7CFB\u7EDF\u9971\u548C(\u6211\u4EEC\u7684\u7CFB\u7EDF\u5DF2\u7ECF\u9971\u548C\uFF0C\u5373\u5B83\u5904\u7406\u8BF7\u6C42\u7684\u80FD\u529B\u521A\u597D\u8DB3\u591F)\uFF0C\u6211\u4EEC\u5E0C\u671B\u8D85\u51FA\u7684\u8BF7\u6C42\u8FD4\u56DE\u8D85\u65F6\uFF0C\u800C\u4E0D\u662F\u82B1\u5F88\u957F\u7684\u65F6\u95F4\u7B49\u5F85\u54CD\u5E94\u3002</p><p>2.\u9648\u65E7\u7684\u6570\u636E: \u6570\u636E\u901A\u5E38\u6709\u4E00\u4E2A\u7A97\u53E3\u671F\uFF0C\u4E00\u822C\u662F\u5728\u8FD9\u4E2A\u7A97\u53E3\u4E2D\u5FC5\u987B\u5904\u7406\u66F4\u591A\u7684\u76F8\u5173\u6570\u636E\uFF0C\u6216\u8005\u5904\u7406\u6570\u636E\u7684\u9700\u6C42\u5DF2\u8FC7\u671F\u3002\u5982\u679C\u4E00\u4E2A\u5E76\u53D1\u8FDB\u7A0B\u5904\u7406\u6570\u636E\u9700\u8981\u7684\u65F6\u95F4\u6BD4\u8FD9\u4E2A\u7A97\u53E3\u671F\u66F4\u957F\uFF0C\u6211\u4EEC\u4F1A\u5411\u8FD4\u56DE\u8D85\u65F6\u5E76\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u5E76\u53D1\u8FDB\u7A0B\u5728\u957F\u65F6\u95F4\u7B49\u5F85\u4E4B\u540E\u54CD\u5E94\uFF0C\u5219\u5728\u6392\u961F\u4E2D\u7684\u8BF7\u6C42\u6216\u5176\u6570\u636E\u53EF\u80FD\u5DF2\u7ECF\u8FC7\u65F6\u3002</p><p>3.\u8BD5\u56FE\u9632\u6B62\u6B7B\u9501: \u5728\u5927\u578B\u7CFB\u7EDF\u4E2D\uFF0C\u5C24\u5176\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u6709\u65F6\u96BE\u4EE5\u7406\u89E3\u6570\u636E\u6D41\u52A8\u7684\u65B9\u5F0F\uFF0C\u6216\u8005\u53EF\u80FD\u51FA\u73B0\u7684\u7F55\u89C1\u60C5\u51B5\u3002\u4E3A\u4E86\u4FDD\u8BC1\u7CFB\u7EDF\u4E0D\u4F1A\u53D1\u751F\u6B7B\u9501\uFF0C\u5EFA\u8BAE\u5728\u6240\u6709\u5E76\u53D1\u64CD\u4F5C\u4E2D\u589E\u52A0\u8D85\u65F6\u65F6\u95F4\u3002\u8D85\u65F6\u65F6\u95F4\u4E0D\u4E00\u5B9A\u8981\u63A5\u8FD1\u6267\u884C\u5E76\u53D1\u64CD\u4F5C\u6240\u9700\u7684\u5B9E\u9645\u65F6\u95F4\u3002\u4E0D\u8FC7\u8D85\u65F6\u7684\u76EE\u7684\u53EA\u662F\u4E3A\u4E86\u9632\u6B62\u6B7B\u9501\uFF0C\u6240\u4EE5\u9700\u8981\u5B83\u8DB3\u591F\u77ED\uFF0C\u4F7F\u6B7B\u9501\u7684\u7CFB\u7EDF\u5728\u5408\u7406\u7684\u65F6\u95F4\u5185\u89E3\u9664\u963B\u585E\u5373\u53EF\u3002</p><h3 id="_3-\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0-\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88" tabindex="-1">3.\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0(\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88) <a class="header-anchor" href="#_3-\u5E76\u53D1\u7A0B\u5E8F\u53D6\u6D88\u7684\u539F\u56E0-\u8D85\u65F6\u4E5F\u662F\u9690\u5F0F\u53D6\u6D88" aria-hidden="true">#</a></h3><p>1.\u7528\u6237\u5E72\u9884: \u4E3A\u4E86\u83B7\u5F97\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u901A\u5E38\u5EFA\u8BAE\u7EF4\u6301\u4E00\u4E2A\u957F\u94FE\u63A5\uFF0C\u7136\u540E\u4EE5\u8F6E\u8BE2\u95F4\u9694\u5C06\u72B6\u6001\u62A5\u544A\u7ED9\u7528\u6237\uFF0C\u6216\u5141\u8BB8\u7528\u6237\u67E5\u770B\u4ED6\u4EEC\u8BA4\u4E3A\u5408\u9002\u7684\u72B6\u6001\u3002\u5F53\u7528\u6237\u4F7F\u7528\u5E76\u53D1\u7A0B\u5E8F\u65F6\uFF0C\u53C8\u662F\u9700\u8981\u7528\u6237\u53D6\u6D88\u4ED6\u4EEC\u5DF2\u7ECF\u5F00\u59CB\u7684\u64CD\u4F5C</p><p>2.\u7236\u8FDB\u7A0B\u53D6\u6D88: \u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u4EFB\u4F55\u4E00\u79CD\u5E76\u53D1\u64CD\u4F5C\u7684\u7236\u8FDB\u7A0B\u505C\u6B62\uFF0C\u90A3\u5B50\u8FDB\u7A0B\u4E5F\u5C06\u88AB\u53D6\u6D88</p><p>3.\u8D4B\u503C\u8BF7\u6C42\uFF1A\u6211\u4EEC\u53EF\u80FD\u5E0C\u671B\u5C06\u6570\u636E\u53D1\u9001\u5230\u591A\u4E2A\u5E76\u53D1\u8FDB\u7A0B\uFF0C\u4EE5\u5C1D\u8BD5\u4ECE\u5176\u4E2D\u4E00\u4E2A\u8FDB\u7A0B\u83B7\u5F97\u66F4\u5FEB\u7684\u54CD\u5E94\uFF0C\u5F53\u7B2C\u4E00\u4E2A\u56DE\u6765\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u4F1A\u53D6\u6D88\u5176\u4F59\u7684\u8FDB\u7A0B</p><h3 id="_4-\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B" tabindex="-1">4.\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B <a class="header-anchor" href="#_4-\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B" aria-hidden="true">#</a></h3><ul><li><p>\u4E4B\u524D\uFF0C\u6211\u4EEC\u63A2\u8BA8\u4E86\u4E24\u79CD\u53D6\u6D88\u5E76\u53D1\u8FDB\u7A0B\u7684\u65B9\u6CD5: <code>cancel done</code>\u548C<code>context.Context</code>\u7C7B\u578B\u3002\u8FD9\u662F\u76F8\u5BF9\u5BB9\u6613\u7684\u4E00\u90E8\u5206</p></li><li><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u60F3\u8981\u63A2\u7D22\u66F4\u590D\u6742\u7684\u95EE\u9898\uFF1A\u5F53\u4E00\u4E2A\u5E76\u53D1\u8FDB\u7A0B\u88AB\u53D6\u6D88\u65F6\uFF0C\u5BF9\u4E8E\u6B63\u5728\u6267\u884C\u7684\u7B97\u6CD5\u53CA\u5176\u4E0B\u6E38\u6D88\u8D39\u8005\u610F\u5473\u7740\u4EC0\u4E48\uFF1F\u5728\u7F16\u5199\u53EF\u968F\u65F6\u7EC8\u6B62\u7684\u5E76\u53D1\u4EE3\u7801\u65F6\uFF0C\u9700\u8981\u8003\u8651\u54EA\u4E9B\u4E8B\u9879\u3002</p></li><li><p>\u8FD8\u6709\u53E6\u5916\u4E00\u4E2A\u6F5C\u5728\u7684\u95EE\u9898\uFF1A\u5982\u679C\u6211\u4EEC\u7684 goroutine \u6070\u597D\u4FEE\u6539\u4E86\u5171\u4EAB\u72B6\u6001(\u4F8B\u5982\u6570\u636E\u5E93\uFF0C\u6587\u4EF6\uFF0C\u5185\u5B58\u6570\u636E\u7ED3\u6784)\uFF0C\u90A3\u5F53 goroutine \u88AB\u53D6\u6D88\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F\u4F60\u7684 goroutine \u4F1A\u89C6\u56FE\u5C06\u8FD9\u4E2A\u4E2D\u95F4\u72B6\u6001\u56DE\u6EDA\u5417\uFF1F\u56DE\u6EDA\u8FC7\u7A0B\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1Fgoroutine \u5DF2\u7ECF\u63A5\u6536\u5230\u4E86\u505C\u6B62\u4FE1\u53F7\uFF0C\u6240\u4EE5\u5B83\u4E0D\u5E94\u8BE5\u82B1\u592A\u957F\u65F6\u95F4\u6765\u56DE\u6EDA\u4E4B\u524D\u7684\u5DE5\u4F5C\uFF0C\u5BF9\u5427\u3002</p></li><li><p>\u6211\u4EEC\u9700\u8981\u63A2\u7D22\u7684\u7B2C\u4E00\u4EF6\u4E8B\u6B7B\u5E76\u53D1\u8FDB\u7A0B\u7684\u53EF\u62A2\u5360\u6027\u3002\u89C2\u5BDF\u4E0B\u9762\u7684\u4EE3\u7801\u3002\u5E76\u5047\u8BBE\u5B83\u5728\u81EA\u5DF1\u7684 goroutine \u4E2D\u8FD0\u884C</p></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">interface{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">select</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;">done</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> valueStream</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// reallyLongCalculation\u4F3C\u4E4E\u4E0D\u80FD\u62A2\u5360\uFF0C\u800C\u4E14\u6839\u636E\u540D\u5B57\u6765\u770B\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\uFF01</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u5728\u957F\u65F6\u95F4\u8BA1\u7B97\u6B63\u5728\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6709\u4E1C\u897F\u89C6\u56FE\u53D6\u6D88\u8FD9\u4E2Agoroutine,\u90A3\u4E48\u6211\u4EEC\u5728\u786E\u8BA4\u53D6\u6D88\u548C\u505C\u6B62\u4E4B\u524D\u53EF\u80FD\u9700\u8981\u5F88\u957F\u65F6\u95F4\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reallyLongCalculation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">select</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> done</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> resultStream </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u8BA9\u6211\u4EEC\u8BD5\u7740\u8BA9 reallyLongCaluclation \u652F\u6301\u62A2\u5360\uFF0C\u770B\u770B\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">reallyLongCalculation </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">done </span><span style="color:#89DDFF;">&lt;-chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{},</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">interface{})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		intermediateResult </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">longCalculation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> done</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">longCalculation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">intermediateResult</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,15),o=[e];function r(c,t,i,D,F,y){return a(),n("div",null,o)}const A=s(p,[["render",r]]);export{C as __pageData,A as default};
