import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.HasMany","slug":"_1-hasmany","link":"#_1-hasmany","children":[]},{"level":3,"title":"2.\u91CD\u5199\u5916\u952E","slug":"_2-\u91CD\u5199\u5916\u952E","link":"#_2-\u91CD\u5199\u5916\u952E","children":[]},{"level":3,"title":"3.\u91CD\u5199\u5F15\u7528","slug":"_3-\u91CD\u5199\u5F15\u7528","link":"#_3-\u91CD\u5199\u5F15\u7528","children":[]},{"level":3,"title":"4.\u591A\u6001\u5173\u8054","slug":"_4-\u591A\u6001\u5173\u8054","link":"#_4-\u591A\u6001\u5173\u8054","children":[]},{"level":3,"title":"5.\u9884\u52A0\u8F7D","slug":"_5-\u9884\u52A0\u8F7D","link":"#_5-\u9884\u52A0\u8F7D","children":[]},{"level":3,"title":"6.\u81EA\u5F15\u7528Has Many","slug":"_6-\u81EA\u5F15\u7528has-many","link":"#_6-\u81EA\u5F15\u7528has-many","children":[]},{"level":3,"title":"7.\u5916\u952E\u7EA6\u675F","slug":"_7-\u5916\u952E\u7EA6\u675F","link":"#_7-\u5916\u952E\u7EA6\u675F","children":[]}],"relativePath":"gorm/12HasMany.md"}'),p={name:"gorm/12HasMany.md"},e=l(`<h3 id="_1-hasmany" tabindex="-1">1.<code>HasMany</code> <a class="header-anchor" href="#_1-hasmany" aria-hidden="true">#</a></h3><ul><li><p><code>has many</code>\u4E0E\u53E6\u4E00\u4E2A\u6A21\u578B\u5EFA\u7ACB\u4E86\u4E00\u5BF9\u591A\u7684\u8FDE\u63A5\u3002\u4E0D\u540C\u4E8E<code>has one</code>,\u62E5\u6709\u8005\u53EF\u4EE5\u7531\u96F6\u6216\u591A\u4E2A\u5173\u8054\u6A21\u578B</p></li><li><p>\u4F8B\u5982\uFF0C\u4F60\u7684\u5E94\u7528\u5305\u542B<code>user</code>\u548C<code>credit card</code>\u6A21\u578B\uFF0C\u4E14\u6BCF\u4E2A user \u53EF\u4EE5\u6709\u591A\u5F20 credit card</p></li><li><p>\u58F0\u660E</p></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// User\u6709\u591A\u5F20CreditCard, UserID\u662F\u5916\u952E</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">	CreditCard </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">CreditCard</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreditCard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">	Number </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">	UserID </span><span style="color:#C792EA;">uint</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u68C0\u7D22</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u68C0\u7D22\u7528\u6237\u5217\u8868\u5E76\u9884\u52A0\u8F7D\u4FE1\u7528\u5361</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAll</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">([]</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> users </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">User</span></span>
<span class="line"><span style="color:#A6ACCD;">	err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Model</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">{}).</span><span style="color:#82AAFF;">Preload</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CreditCards</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Find</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">).</span><span style="color:#A6ACCD;">Error</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> users</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u91CD\u5199\u5916\u952E" tabindex="-1">2.\u91CD\u5199\u5916\u952E <a class="header-anchor" href="#_2-\u91CD\u5199\u5916\u952E" aria-hidden="true">#</a></h3><ul><li><p>\u8981\u5B9A\u4E49<code>has many</code>\u5173\u7CFB\uFF0C\u540C\u6837\u5FC5\u987B\u5B58\u5728\u5916\u952E\u3002\u9ED8\u8BA4\u7684\u5916\u952E\u540D\u662F\u62E5\u6709\u8005\u7684\u7C7B\u578B\u540D\u52A0\u4E0A\u5176\u4E3B\u952E\u5B57\u6BB5\u540D</p></li><li><p>\u4F8B\u5982\uFF0C\u8981\u5B9A\u4E49\u4E00\u4E2A\u5C5E\u4E8E<code>User</code>\u7684\u6A21\u578B\uFF0C\u5219\u5176\u5916\u952E\u5E94\u8BE5\u662F<code>UserID</code></p></li><li><p>\u6B64\u5916\uFF0C\u60F3\u8981\u4F7F\u7528\u53E6\u4E00\u4E2A\u5B57\u6BB5\u4F5C\u4E3A\u5916\u952E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 foreginKey \u6807\u7B7E\u81EA\u5B9A\u4E49\u5B83</p></li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  CreditCards </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">CreditCard </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;foreignKey:UserRefer&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreditCard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  Number    </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  UserRefer </span><span style="color:#C792EA;">uint</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-\u91CD\u5199\u5F15\u7528" tabindex="-1">3.\u91CD\u5199\u5F15\u7528 <a class="header-anchor" href="#_3-\u91CD\u5199\u5F15\u7528" aria-hidden="true">#</a></h3><ul><li>GORM \u901A\u5E38\u4F7F\u7528\u62E5\u6709\u8005\u7684\u4E3B\u952E\u4F5C\u4E3A\u5916\u952E\u7684\u503C\u3002 \u5BF9\u4E8E\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u5B83\u662F User \u7684 ID \u5B57\u6BB5\u3002</li><li>\u4E3A user \u6DFB\u52A0 credit card \u65F6\uFF0CGORM \u4F1A\u5C06 user \u7684 ID \u5B57\u6BB5\u4FDD\u5B58\u5230 credit card \u7684 UserID \u5B57\u6BB5\u3002</li><li>\u540C\u6837\u7684\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6807\u7B7E references \u6765\u66F4\u6539\u5B83\uFF0C\u4F8B\u5982\uFF1A</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  MemberNumber </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  CreditCards  </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">CreditCard </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;foreignKey:UserNumber;references:MemberNumber&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreditCard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  Number     </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  UserNumber </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-\u591A\u6001\u5173\u8054" tabindex="-1">4.\u591A\u6001\u5173\u8054 <a class="header-anchor" href="#_4-\u591A\u6001\u5173\u8054" aria-hidden="true">#</a></h3><ul><li><code>GORM</code>\u4E3A<code>has one</code>\u548C<code>has many</code>\u63D0\u4F9B\u4E86\u591A\u6001\u5173\u8054\u652F\u6301\uFF0C\u5B83\u4F1A\u5C06\u62E5\u6709\u8005\u5B9E\u4F53\u7684\u8868\u540D\uFF0C\u4E3B\u952E\u90FD\u4FDD\u5B58\u5230\u591A\u6001\u7C7B\u578B\u7684\u5B57\u6BB5\u4E2D</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ID   </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">	Toys </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">Toy </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;polymorphic:Owner&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Toy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	ID        </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name      </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">	OwnerID   </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	OwnerType </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Create</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Dog</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dog1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Toys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">Toy</span><span style="color:#89DDFF;">{{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toy1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toy2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}}})</span></span>
<span class="line"><span style="color:#676E95;">// INSERT INTO \`dogs\` (\`name\`) VALUES (&quot;dog1&quot;)</span></span>
<span class="line"><span style="color:#676E95;">// INSERT INTO \`toys\` (\`name\`,\`owner_id\`,\`owner_type\`) VALUES (&quot;toy1&quot;,&quot;1&quot;,&quot;dogs&quot;), (&quot;toy2&quot;,&quot;1&quot;,&quot;dogs&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u4F60\u53EF\u4EE5\u4F7F\u7528\u6807\u7B7E<code>polymorphicValue</code>\u6765\u66F4\u6539\u591A\u6001\u7C7B\u578B\u7684\u503C\uFF0C\u4F8B\u5982</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ID   </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">  Name </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toys </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">Toy </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;polymorphic:Owner;polymorphicValue:master&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Toy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ID        </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">  Name      </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  OwnerID   </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">  OwnerType </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Create</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">Dog</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dog1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Toy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">Toy</span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toy1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toy2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}}})</span></span>
<span class="line"><span style="color:#676E95;">// INSERT INTO \`dogs\` (\`name\`) VALUES (&quot;dog1&quot;)</span></span>
<span class="line"><span style="color:#676E95;">// INSERT INTO \`toys\` (\`name\`,\`owner_id\`,\`owner_type\`) VALUES (&quot;toy1&quot;,&quot;1&quot;,&quot;master&quot;), (&quot;toy2&quot;,&quot;1&quot;,&quot;master&quot;)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_5-\u9884\u52A0\u8F7D" tabindex="-1">5.\u9884\u52A0\u8F7D <a class="header-anchor" href="#_5-\u9884\u52A0\u8F7D" aria-hidden="true">#</a></h3><ul><li><code>GORM</code>\u53EF\u4EE5\u901A\u8FC7<code>Preload</code>\u9884\u52A0\u8F7D has many \u5173\u8054\u7684\u8BB0\u5F55</li></ul><h3 id="_6-\u81EA\u5F15\u7528has-many" tabindex="-1">6.\u81EA\u5F15\u7528<code>Has Many</code> <a class="header-anchor" href="#_6-\u81EA\u5F15\u7528has-many" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">	Name      </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">	ManagerID </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">uint</span></span>
<span class="line"><span style="color:#A6ACCD;">	Team      </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">User </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;foreignkey:ManagerID&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_7-\u5916\u952E\u7EA6\u675F" tabindex="-1">7.\u5916\u952E\u7EA6\u675F <a class="header-anchor" href="#_7-\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a></h3><ul><li>\u4F60\u53EF\u4EE5\u901A\u8FC7\u6807\u7B7E<code>constraint</code>\u914D\u7F6E OnUpdate, OnDelete \u5B9E\u73B0\u5916\u952E\u7EA6\u675F\uFF0C\u5728\u4F7F\u7528 GORM \u8FDB\u884C\u8FC1\u79FB\u65F6\u5B83\u4F1A\u88AB\u521B\u5EFA\uFF0C\u4F8B\u5982</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  CreditCards </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">CreditCard </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gorm:&quot;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CreditCard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Model</span></span>
<span class="line"><span style="color:#A6ACCD;">  Number </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  UserID </span><span style="color:#C792EA;">uint</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u4F60\u4E5F\u53EF\u4EE5\u5728\u5220\u9664\u8BB0\u5F55\u65F6\u901A\u8FC7<code>Select</code>\u6765\u5220\u9664 has many \u5173\u8054\u7684\u8BB0\u5F55</li></ul>`,24),o=[e];function r(c,t,D,y,i,C){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};
