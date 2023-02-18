import{_ as s,c as n,o as a,a as l}from"./app.78cd51cb.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.worker pool(goroutine\u6C60)","slug":"_1-worker-pool-goroutine\u6C60","link":"#_1-worker-pool-goroutine\u6C60","children":[]}],"relativePath":"go/43goroutine\u6C60.md"}'),p={name:"go/43goroutine\u6C60.md"},o=l(`<h3 id="_1-worker-pool-goroutine\u6C60" tabindex="-1">1.worker pool(goroutine\u6C60) <a class="header-anchor" href="#_1-worker-pool-goroutine\u6C60" aria-hidden="true">#</a></h3><ul><li>\u672C\u8D28\u4E0A\u662F\u751F\u4EA7\u8005\uFF0C\u6D88\u8D39\u8005\u6A21\u578B</li><li>\u53EF\u4EE5\u6709\u6548\u63A7\u5236goroutine\u6570\u91CF\uFF0C\u9632\u6B62\u66B4\u6DA8</li><li>\u9700\u6C42 \u8BA1\u7B97\u4E00\u4E2A\u6570\u7EC4\u7684\u5404\u4E2A\u4F4D\u6570\u4E4B\u548C\uFF0C\u4F8B\u5982\u6570\u7EC4123\uFF0C\u7ED3\u679C\u4E3A1+2+3=6 \u968F\u673A\u751F\u6210\u6570\u5B57\u8FDB\u884C\u8BA1\u7B97</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math/rand</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Job</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Id </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	RandNum </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	job </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Job</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u6C42\u548C</span></span>
<span class="line"><span style="color:#A6ACCD;">	sum </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u9700\u8981\u4E24\u4E2A\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 1.job\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	jobChan </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Job</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 2.\u7ED3\u679C\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">	resultChan </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 3.\u521B\u5EFA\u5DE5\u4F5C\u6C60</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">createPool</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">64</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> jobChan</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> resultChan</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 4.\u5F00\u4E2A\u6253\u5370\u7684\u534F\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">resultChan </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u904D\u5386\u7ED3\u679C\uFF0C\u7BA1\u9053\u6253\u5370</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> resultChan</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">job id: %v, random: %v, result: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RandNum</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}(</span><span style="color:#A6ACCD;">resultChan</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// id\u7684\u521D\u59CB\u503C\u662F0</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> id </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u5FAA\u73AF\u521B\u5EFAjob\uFF0C\u8F93\u5165\u5230\u7BA1\u9053</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		id </span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">// \u751F\u6210\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">		r_num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> rand</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Int</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">		job </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Job</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			Id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			RandNum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> r_num</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		jobChan </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> job</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u5DE5\u4F5C\u6C60</span></span>
<span class="line"><span style="color:#676E95;">// \u53C2\u65701\uFF1A\u5F00\u591A\u5C11\u4E2A\u534F\u7A0B</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createPool</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> jobChan </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Job</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> resultChan </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Result</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u6839\u636E\u534F\u7A0B\u4E2A\u6570\uFF0C\u53BB\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">jobChan </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Job</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> resultChan </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// \u6267\u884C\u8FD0\u7B97</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// \u904D\u5386job\u7BA1\u9053\u6240\u6709\u6570\u636E\uFF0C\u8FDB\u884C\u76F8\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> job </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">range</span><span style="color:#A6ACCD;"> jobChan</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u968F\u673A\u6570\u3002\u63A5\u8FC7\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">				r_num </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> job</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RandNum</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u968F\u673A\u6570\u6BCF\u4E00\u4F4D\u76F8\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u5B9A\u4E49\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> sum </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> r_num </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					tmp </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> r_num </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">					sum </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> tmp</span></span>
<span class="line"><span style="color:#A6ACCD;">					r_num </span><span style="color:#89DDFF;">/=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u56E0\u4E3A\u4E0D\u662F\u6D6E\u70B9\u6570\uFF0C\u6240\u4EE5\u9664\u540E\u662F\u6574\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u60F3\u8981\u7684\u7ED3\u679C\u662FResult</span></span>
<span class="line"><span style="color:#A6ACCD;">				r </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Result</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					job</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">					sum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u8FD0\u7B97\u7ED3\u679C\u6254\u5230\u901A\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">				resultChan </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> r</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}(</span><span style="color:#A6ACCD;">jobChan</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> resultChan</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div>`,3),e=[o];function r(t,c,D,C,y,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
