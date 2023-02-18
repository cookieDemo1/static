import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Scopes","slug":"scopes","link":"#scopes","children":[]},{"level":3,"title":"1.\u67E5\u8BE2","slug":"_1-\u67E5\u8BE2","link":"#_1-\u67E5\u8BE2","children":[]},{"level":3,"title":"2.\u5206\u9875","slug":"_2-\u5206\u9875","link":"#_2-\u5206\u9875","children":[]},{"level":3,"title":"3.\u66F4\u65B0","slug":"_3-\u66F4\u65B0","link":"#_3-\u66F4\u65B0","children":[]}],"relativePath":"gorm/32Scopes.md"}'),p={name:"gorm/32Scopes.md"},o=l(`<h3 id="scopes" tabindex="-1">Scopes <a class="header-anchor" href="#scopes" aria-hidden="true">#</a></h3><ul><li>\u4F5C\u7528\u57DF\u5141\u8BB8\u4F60\u590D\u7528\u901A\u7528\u7684\u903B\u8F91\uFF0C\u8FD9\u79CD\u5171\u4EAB\u903B\u8F91\u9700\u8981\u5B9A\u4F4D\u4E3A\u7C7B\u578B<code>func(*gorm.DB) *gorm.DB</code></li></ul><h3 id="_1-\u67E5\u8BE2" tabindex="-1">1.\u67E5\u8BE2 <a class="header-anchor" href="#_1-\u67E5\u8BE2" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AmountGreaterThan1000</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">amount &gt; ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PaidWithCreditCard</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pay_mode_sign = ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PaidWithCod</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pay_mode_sign = ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OrderStatus</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">status </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status IN (?)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> status</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AmountGreaterThan1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PaidWithCreditCard</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">orders</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E1000\u7684\u4FE1\u7528\u5361\u8BA2\u5355</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AmountGreaterThan1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PaidWithCod</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">orders</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u67E5\u627E\u6240\u6709\u91D1\u989D\u5927\u4E8E1000\u7684COD\u8BA2\u5355</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AmountGreaterThan1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OrderStatus</span><span style="color:#89DDFF;">([]</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">paid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shipped</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">})).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">orders</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_2-\u5206\u9875" tabindex="-1">2.\u5206\u9875 <a class="header-anchor" href="#_2-\u5206\u9875" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u7528<code>Scopes</code>\u6765\u52A8\u6001\u6307\u5B9A\u67E5\u8BE2\u7684\u8868</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TableOfYear</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> year </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		tableName </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TableName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> strconv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Itoa</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">year</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tableName</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableOfYear</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2019</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// SELECT * FROM users_2019;</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableOfYear</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2020</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// SELECT * FROM users_2020;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u8868\u6765\u81EA\u4E0D\u540C\u7684\u6570\u636E\u5E93</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TableOfOrg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dbName </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		tableName </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> dbName </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TableName</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tableName</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableOfOrg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">org1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// SELECT * FROM org1.users;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TableOfOrg</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">org2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// SELECT * FROM org2.users;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-\u66F4\u65B0" tabindex="-1">3.\u66F4\u65B0 <a class="header-anchor" href="#_3-\u66F4\u65B0" aria-hidden="true">#</a></h3><ul><li><code>Scope</code>\u66F4\u65B0\uFF0C\u5220\u9664\u793A\u4F8B</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CurOrganization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Request</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		org </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Header</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">org</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> org </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> organization Organization</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Session</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Session</span><span style="color:#89DDFF;">{}).</span><span style="color:#82AAFF;">First</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">organization</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name = ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> org</span><span style="color:#89DDFF;">).</span><span style="color:#A6ACCD;">Error </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">org_id = ?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> organization</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ID</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddError</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">invalid organization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Model</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">article</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">CurOrganization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Update</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// UPDATE articles SET name = &quot;name 1&quot; WHERE org_id = 111</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scopes</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">CurOrganization</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)).</span><span style="color:#82AAFF;">Delete</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Article</span><span style="color:#89DDFF;">{})</span></span>
<span class="line"><span style="color:#676E95;">// DELETE FROM articles WHERE org_id = 111</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,11),e=[o];function r(D,c,t,F,y,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
