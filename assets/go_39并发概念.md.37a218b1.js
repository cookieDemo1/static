import{_ as s,c as n,o as a,a as e}from"./app.78cd51cb.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u8FDB\u7A0B\u548C\u7EBF\u7A0B","slug":"_1-\u8FDB\u7A0B\u548C\u7EBF\u7A0B","link":"#_1-\u8FDB\u7A0B\u548C\u7EBF\u7A0B","children":[]},{"level":3,"title":"2.\u5E76\u53D1\u548C\u5E76\u884C","slug":"_2-\u5E76\u53D1\u548C\u5E76\u884C","link":"#_2-\u5E76\u53D1\u548C\u5E76\u884C","children":[]},{"level":3,"title":"3.\u534F\u7A0B\u548C\u7EBF\u7A0B","slug":"_3-\u534F\u7A0B\u548C\u7EBF\u7A0B","link":"#_3-\u534F\u7A0B\u548C\u7EBF\u7A0B","children":[]},{"level":3,"title":"4.goroutine","slug":"_4-goroutine","link":"#_4-goroutine","children":[]},{"level":3,"title":"5.\u5E76\u53D1\u4E0D\u662F\u5E76\u884C","slug":"_5-\u5E76\u53D1\u4E0D\u662F\u5E76\u884C","link":"#_5-\u5E76\u53D1\u4E0D\u662F\u5E76\u884C","children":[]},{"level":3,"title":"6.goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002","slug":"_6-goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002","link":"#_6-goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002","children":[]}],"relativePath":"go/39\u5E76\u53D1\u6982\u5FF5.md"}'),l={name:"go/39\u5E76\u53D1\u6982\u5FF5.md"},r=e(`<h3 id="_1-\u8FDB\u7A0B\u548C\u7EBF\u7A0B" tabindex="-1">1.\u8FDB\u7A0B\u548C\u7EBF\u7A0B <a class="header-anchor" href="#_1-\u8FDB\u7A0B\u548C\u7EBF\u7A0B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">A. \u8FDB\u7A0B\u662F\u7A0B\u5E8F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u4E00\u6B21\u6267\u884C\u8FC7\u7A0B\uFF0C\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u4E00\u4E2A\u72EC\u7ACB\u5355\u4F4D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">B. \u7EBF\u7A0B\u662F\u8FDB\u7A0B\u7684\u4E00\u4E2A\u6267\u884C\u5B9E\u4F53,\u662FCPU\u8C03\u5EA6\u548C\u5206\u6D3E\u7684\u57FA\u672C\u5355\u4F4D,\u5B83\u662F\u6BD4\u8FDB\u7A0B\u66F4\u5C0F\u7684\u80FD\u72EC\u7ACB\u8FD0\u884C\u7684\u57FA\u672C\u5355\u4F4D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">C. \u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u521B\u5EFA\u548C\u64A4\u9500\u591A\u4E2A\u7EBF\u7A0B;\u540C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u5E76\u53D1\u6267\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u5E76\u53D1\u548C\u5E76\u884C" tabindex="-1">2.\u5E76\u53D1\u548C\u5E76\u884C <a class="header-anchor" href="#_2-\u5E76\u53D1\u548C\u5E76\u884C" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">A. \u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u4E00\u4E2A\u6838\u7684cpu\u4E0A\u8FD0\u884C\uFF0C\u5C31\u662F\u5E76\u53D1\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">B. \u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u591A\u4E2A\u6838\u7684cpu\u4E0A\u8FD0\u884C\uFF0C\u5C31\u662F\u5E76\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-\u534F\u7A0B\u548C\u7EBF\u7A0B" tabindex="-1">3.\u534F\u7A0B\u548C\u7EBF\u7A0B <a class="header-anchor" href="#_3-\u534F\u7A0B\u548C\u7EBF\u7A0B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u534F\u7A0B\uFF1A\u72EC\u7ACB\u7684\u6808\u7A7A\u95F4\uFF0C\u5171\u4EAB\u5806\u7A7A\u95F4\uFF0C\u8C03\u5EA6\u7531\u7528\u6237\u81EA\u5DF1\u63A7\u5236\uFF0C\u672C\u8D28\u4E0A\u6709\u70B9\u7C7B\u4F3C\u4E8E\u7528\u6237\u7EA7\u7EBF\u7A0B\uFF0C\u8FD9\u4E9B\u7528\u6237\u7EA7\u7EBF\u7A0B\u7684\u8C03\u5EA6\u4E5F\u662F\u81EA\u5DF1\u5B9E\u73B0\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7EBF\u7A0B\uFF1A\u4E00\u4E2A\u7EBF\u7A0B\u4E0A\u53EF\u4EE5\u8DD1\u591A\u4E2A\u534F\u7A0B\uFF0C\u534F\u7A0B\u662F\u8F7B\u91CF\u7EA7\u7684\u7EBF\u7A0B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-goroutine" tabindex="-1">4.goroutine <a class="header-anchor" href="#_4-goroutine" aria-hidden="true">#</a></h3><ul><li>goroutine \u53EA\u662F\u7531\u5B98\u65B9\u5B9E\u73B0\u7684\u8D85\u7EA7&quot;\u7EBF\u7A0B\u6C60&quot;</li><li>\u6BCF\u4E2A\u5B9E\u529B4~5KB\u7684\u6808\u5185\u5B58\u5360\u7528\u548C\u7531\u4E8E\u5B9E\u73B0\u673A\u5236\u800C\u5927\u5E45\u51CF\u5C11\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u5F00\u9500\u662Fgo\u9AD8\u5E76\u53D1\u7684\u6839\u672C\u539F\u56E0\u3002</li></ul><h3 id="_5-\u5E76\u53D1\u4E0D\u662F\u5E76\u884C" tabindex="-1">5.\u5E76\u53D1\u4E0D\u662F\u5E76\u884C <a class="header-anchor" href="#_5-\u5E76\u53D1\u4E0D\u662F\u5E76\u884C" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5E76\u53D1\u4E3B\u8981\u7531\u5207\u6362\u65F6\u95F4\u7247\u6765\u5B9E\u73B0&quot;\u540C\u65F6&quot;\u8FD0\u884C\uFF0C\u5E76\u884C\u5219\u662F\u76F4\u63A5\u5229\u7528\u591A\u6838\u5B9E\u73B0\u591A\u7EBF\u7A0B\u7684\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">go\u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528\u6838\u6570\uFF0C\u4EE5\u53D1\u6325\u591A\u6838\u8BA1\u7B97\u673A\u7684\u80FD\u529B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_6-goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002" tabindex="-1">6.goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002 <a class="header-anchor" href="#_6-goroutine\u5949\u884C\u901A\u8FC7\u901A\u4FE1\u6765\u5171\u5B58\u5185\u5B58\uFF0C\u800C\u4E0D\u662F\u5171\u4EAB\u5185\u5B58\u6765\u901A\u4FE1\u3002" aria-hidden="true">#</a></h3>`,11),i=[r];function o(p,c,t,d,u,_){return a(),n("div",null,i)}const g=s(l,[["render",o]]);export{b as __pageData,g as default};
