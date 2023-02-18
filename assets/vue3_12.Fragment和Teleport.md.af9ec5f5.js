import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.Fragment(\u7247\u6BB5)  Teleport(\u77AC\u79FB)","slug":"_1-fragment-\u7247\u6BB5-teleport-\u77AC\u79FB","link":"#_1-fragment-\u7247\u6BB5-teleport-\u77AC\u79FB","children":[]},{"level":3,"title":"2.Fragment","slug":"_2-fragment","link":"#_2-fragment","children":[]},{"level":3,"title":"3.Teleport","slug":"_3-teleport","link":"#_3-teleport","children":[]},{"level":3,"title":"4.Teleport\u793A\u4F8B","slug":"_4-teleport\u793A\u4F8B","link":"#_4-teleport\u793A\u4F8B","children":[]}],"relativePath":"vue3/12.Fragment\u548CTeleport.md"}'),p={name:"vue3/12.Fragment\u548CTeleport.md"},e=l(`<h3 id="_1-fragment-\u7247\u6BB5-teleport-\u77AC\u79FB" tabindex="-1">1.Fragment(\u7247\u6BB5) Teleport(\u77AC\u79FB) <a class="header-anchor" href="#_1-fragment-\u7247\u6BB5-teleport-\u77AC\u79FB" aria-hidden="true">#</a></h3><h3 id="_2-fragment" tabindex="-1">2.Fragment <a class="header-anchor" href="#_2-fragment" aria-hidden="true">#</a></h3><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#A6ACCD;">vue3\u4E2D\u7EC4\u4EF6\u53EF\u4EE5\u4E0D\u9700\u8981\u6839\u6807\u7B7E\uFF0C\u5185\u90E8\u4F1A\u5C06\u591A\u4E2A\u6807\u7B7E\u5305\u542B\u5728\u4E00\u4E2AFragment\u865A\u62DF\u5143\u7D20\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">Fragment\u4E0D\u9700\u8981\u6211\u4EEC\u5199\u4EE3\u7801</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-teleport" tabindex="-1">3.Teleport <a class="header-anchor" href="#_3-teleport" aria-hidden="true">#</a></h3><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#A6ACCD;">Teleport\u63D0\u4F9B\u4E86\u4E00\u79CD\u5E72\u51C0\u7684\u65B9\u6CD5\uFF0C</span><span style="color:#82AAFF;">\u8BA9\u7EC4\u4EF6\u7684html\u5728\u7236\u7EC4\u4EF6\u754C\u9762\u5916\u7279\u5B9A\u7684\u6807\u7B7E</span><span style="color:#A6ACCD;">(\u5F88\u53EF\u80FD\u662Fbody)\u4E0B\u63D2\u5165\u663E\u793AModalButton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="_4-teleport\u793A\u4F8B" tabindex="-1">4.Teleport\u793A\u4F8B <a class="header-anchor" href="#_4-teleport\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-jsx line-numbers-mode"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#676E95;">// 1.src/components/ModalButton.vue</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;!-- \u6253\u5F00\u5BF9\u8BDD\u6846\u6309\u94AE --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;modalOpen = true&quot;&gt;\u6253\u5F00\u5BF9\u8BDD\u6846&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;!-- \u5BF9\u8BDD\u6846\u4EE3\u7801,\u901A\u8FC7Teleport\u6807\u7B7E\u8BA9\u5BF9\u8BDD\u6846\u6302\u8F7D\u5230body\u6807\u7B7E\u4E0B --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;Teleport </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modalOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8FD9\u662F\u5BF9\u8BDD\u6846</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;modalOpen = false&quot;&gt;\u5173\u95ED\u5BF9\u8BDD\u6846&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/Teleport&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> defineComponent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ModalButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const modalOpen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      modalOpen</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 2.App.vue,\u53EA\u8D1F\u8D23\u5F15\u5165\u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">App \u7236\u7EA7\u7EC4\u4EF6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">modal-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">modal-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> defineComponent </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ModalButton from &quot;./components/ModalButton.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ModalButton </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">setUp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#F07178;">  },</span></span>
<span class="line"><span style="color:#F07178;">});</span></span>
<span class="line"><span style="color:#F07178;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,7),o=[e];function t(r,c,D,F,i,y){return a(),n("div",null,o)}const C=s(p,[["render",t]]);export{b as __pageData,C as default};
