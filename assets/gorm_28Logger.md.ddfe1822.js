import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.Logger","slug":"_1-logger","link":"#_1-logger","children":[]},{"level":3,"title":"2.\u65E5\u5FD7\u7EA7\u522B","slug":"_2-\u65E5\u5FD7\u7EA7\u522B","link":"#_2-\u65E5\u5FD7\u7EA7\u522B","children":[]},{"level":3,"title":"3.Debug","slug":"_3-debug","link":"#_3-debug","children":[]},{"level":3,"title":"4.\u81EA\u5B9A\u4E49 Logger","slug":"_4-\u81EA\u5B9A\u4E49-logger","link":"#_4-\u81EA\u5B9A\u4E49-logger","children":[]}],"relativePath":"gorm/28Logger.md"}'),p={name:"gorm/28Logger.md"},o=l(`<h3 id="_1-logger" tabindex="-1">1.Logger <a class="header-anchor" href="#_1-logger" aria-hidden="true">#</a></h3><ul><li><code>GORM</code>\u6709\u4E00\u4E2A\u9ED8\u8BA4 logger \u5B9E\u73B0\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u6253\u5370\u6162 sql \u548C\u9519\u8BEF</li><li><code>Logger</code>\u63A5\u53D7\u7684\u9009\u9879\u4E0D\u591A\uFF0C\u4F60\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u65F6\u81EA\u5B9A\u4E49\u5B83\uFF0C\u4F8B\u5982:</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">newLogger </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// io writer(\u65E5\u5FD7\u8F93\u51FA\u7684\u76EE\u6807\uFF0C\u524D\u7F00\u548C\u65E5\u5FD7\u5305\u542B\u7684\u5185\u5BB9)</span></span>
<span class="line"><span style="color:#A6ACCD;">  log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">New</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Stdout</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> log</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LstdFlags</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  logger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    SlowThreshold</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">             time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Second</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u6162SQL\u9608\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    LogLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                  logger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Silent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u65E5\u8BB0\u7EA7\u522B</span></span>
<span class="line"><span style="color:#A6ACCD;">    IgnoreRecordNotFoundError</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// \u5FFD\u7565ErrRecordNotFound\uFF08\u8BB0\u5F55\u672A\u627E\u5230\uFF09\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">    Colorful</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">false,</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;">// \u7981\u7528\u5F69\u8272\u6253\u5370</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5168\u5C40\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> gorm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sqlite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.db</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Logger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> newLogger</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u65B0\u5EFA\u4F1A\u8BDD\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">tx </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Session</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Session</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Logger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> newLogger</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">tx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">First</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">tx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Model</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Update</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_2-\u65E5\u5FD7\u7EA7\u522B" tabindex="-1">2.\u65E5\u5FD7\u7EA7\u522B <a class="header-anchor" href="#_2-\u65E5\u5FD7\u7EA7\u522B" aria-hidden="true">#</a></h3><ul><li><code>GORM</code>\u5B9A\u4E49\u770B\u4E86\u8FD9\u4E9B\u65E5\u5FD7\u7EA7\u522B<code>Silent</code>, <code>Error</code>, <code>Warn</code>, <code>Info</code></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> gorm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sqlite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test.db</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Logger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> logger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Default</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LogMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Silent</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-debug" tabindex="-1">3.Debug <a class="header-anchor" href="#_3-debug" aria-hidden="true">#</a></h3><ul><li><code>Debug</code>\u5355\u4E2A\u64CD\u4F5C\uFF0C\u5C06\u5F53\u524D\u64CD\u4F5C\u7684 log \u7EA7\u522B\u8C03\u6574\u4E3A <a href="http://logger.Info" target="_blank" rel="noreferrer">logger.Info</a></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Debug</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name = ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jinzhu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">First</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">{})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_4-\u81EA\u5B9A\u4E49-logger" tabindex="-1">4.\u81EA\u5B9A\u4E49 Logger <a class="header-anchor" href="#_4-\u81EA\u5B9A\u4E49-logger" aria-hidden="true">#</a></h3><ul><li>\u53C2\u8003 GORM \u7684\u9ED8\u8BA4 logger \u6765\u81EA\u5B9A\u4E49\u4F60\u7684 logger</li><li>Logger \u5B9E\u73B0\u4EE5\u4E0B\u63A5\u53E3\uFF0C\u5B83\u63A5\u53D7 context,\u6240\u4EE5\u4F60\u53EF\u4EE5\u7528\u5B83\u6765\u8FFD\u8E2A\u65E5\u5FD7</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">LogMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">LogLevel</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Interface</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Info</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Warn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...interface{})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Trace</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> begin time</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Time</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fc </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sql </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rowsAffected </span><span style="color:#C792EA;">int64</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> err </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,12),e=[o];function r(c,t,D,F,y,A){return a(),n("div",null,e)}const g=s(p,[["render",r]]);export{i as __pageData,g as default};