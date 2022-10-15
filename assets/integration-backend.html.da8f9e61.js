import{_ as c,r as p,o as i,c as l,a as n,b as s,d as a,w as o,e as r}from"./app.9d4afa98.js";const u={},d=n("h1",{id:"\u540E\u7AEF\u96C6\u6210-bit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u540E\u7AEF\u96C6\u6210-bit","aria-hidden":"true"},"#"),s(" \u540E\u7AEF\u96C6\u6210 .bit")],-1),k={id:"das-account-indexer",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#das-account-indexer","aria-hidden":"true"},"#",-1),h={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/dotbitHQ/das-account-indexer",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"\u5B83\u901A\u8FC7 CKB \u8282\u70B9\u6301\u7EED\u4ECE CKB \u94FE\u4E0A\u8BFB\u53D6\u6570\u636E\uFF0C\u89E3\u6790\u4E4B\u540E\u5B58\u50A8\u5728\u672C\u5730\u6570\u636E\u5E93\uFF08RocksDB\uFF09\u4E2D\uFF0C\u5E76\u63D0\u4F9B\u4E86\u9AD8\u6027\u80FD\u7684 JSON-RPC \u670D\u52A1\uFF0C\u4F9B\u4E1A\u52A1\u8BFB\u53D6 .bit \u7684\u89E3\u6790\u6570\u636E\u3002",-1),m=n("blockquote",null,[n("p",null,[s("\u90E8\u7F72 Indexer \u9700\u8981\u4F9D\u8D56 CKB \u8282\u70B9\uFF0C\u89C1 "),n("a",{href:"#ckb-%E8%8A%82%E7%82%B9%E5%92%8C-ckb-indexer"},"CKB \u8282\u70B9\u548C CKB Indexer")])],-1),g={href:"https://github.com/dotbitHQ/das-account-indexer/blob/main/API.md",target:"_blank",rel:"noopener noreferrer"},f=r(`<h4 id="\u4F7F\u7528\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3E\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u4E3E\u4F8B</h4><p>\u4E0B\u9762\u4EE5\u83B7\u53D6\u7528\u6237\u57FA\u672C\u4FE1\u606F\u4E3A\u4F8B\uFF0C\u8BF4\u660E\u4E00\u4E0B .bit Indexer \u7684\u7528\u6CD5\u3002</p><p><strong>\u8BF7\u6C42</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://indexer-basic.did.id -d<span class="token string">&#39;{&quot;jsonrpc&quot;: &quot;2.0&quot;,&quot;id&quot;: 1,&quot;method&quot;: &quot;das_accountInfo&quot;,&quot;params&quot;: [{&quot;account&quot;:&quot;phone.bit&quot;}]}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u54CD\u5E94</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errno&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errmsg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;out_point&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tx_hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xabb6b2f502e9d992d00737a260e6cde53ad3f402894b078f60a52e0392a17ec8&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;account_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone.bit&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;account_id_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x5f560ec1edc638d7dab7c7a1ca8c3b0f6ed1848b&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;next_account_id_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x5f5c20  f6cd95388378771ca957ce665f084fe23b&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;create_at_unix&quot;</span><span class="token operator">:</span> <span class="token number">1626955542</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expired_at_unix&quot;</span><span class="token operator">:</span> <span class="token number">1658491542</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;das_lock_arg_hex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x0559724739940777947c56c4f2f2c9211cd5130fef0559724739940777947c56c4f2f2c9211cd5130fef&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;owner_algorithm_id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 3: eth personal sign, 4: tron sign, 5: eip-712</span>
      <span class="token property">&quot;owner_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x59724739940777947c56c4f2f2c9211cd5130fef&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;manager_algorithm_id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;manager_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x59724739940777947c56c4f2f2c9211cd5130fef&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B98\u65B9-indexer-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9-indexer-\u670D\u52A1" aria-hidden="true">#</a> \u5B98\u65B9 Indexer \u670D\u52A1</h3><p>\u8003\u8651\u5230\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u548C\u4E1A\u52A1\u4E2A\u6027\u5316\u9700\u6C42\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u81EA\u5EFA indexer \u670D\u52A1\u5E76\u8DDF\u8FDB .bit \u5B98\u65B9\u7684\u8FED\u4EE3\u66F4\u65B0\u3002\uFF08\u662F\u7684\uFF01\u53BB\u4E2D\u5FC3\u5316\uFF01\uFF09\u3002</p><p>\u4F46\u540C\u65F6\uFF0C.bit \u56E2\u961F\u63D0\u4F9B\u4E86\u6709\u9650\u529F\u80FD\u7684\u516C\u5F00 Indexer \u4F9B\u5F00\u53D1\u8005\u5728\u65E9\u671F\u9636\u6BB5\u8FDB\u884C\u5F00\u53D1\u3001\u8C03\u8BD5\u3002</p><h4 id="\u5168\u529F\u80FD-indexer" tabindex="-1"><a class="header-anchor" href="#\u5168\u529F\u80FD-indexer" aria-hidden="true">#</a> \u5168\u529F\u80FD Indexer</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-v1.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u670D\u52A1\u53EF\u4EE5\u67E5\u8BE2\u6240\u6709\u6570\u636E\u3002\u4F46\u662F\u4E00\u5982\u65E2\u5F80\uFF0C\u6211\u4EEC\u63A8\u8350\u5F00\u53D1\u8005\u81EA\u5EFA Indexer\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-not-use-in-production-env.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u670D\u52A1\u53EF\u4EE5\u67E5\u8BE2\u6240\u6709\u6570\u636E\uFF0C\u4F46\u5982\u5176\u57DF\u540D\u6240\u63CF\u8FF0\u7684\uFF0C\u4E0D\u63A8\u8350\u5F00\u53D1\u8005\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u8BE5 Indexer</p><h4 id="\u57FA\u672C-indexer" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C-indexer" aria-hidden="true">#</a> \u57FA\u672C Indexer</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://indexer-basic.did.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u670D\u52A1\u4EC5\u53EF\u67E5\u8BE2\u8D26\u6237\u4FE1\u606F\u548C\u53CD\u5411\u89E3\u6790\u8BB0\u5F55\u3002\u5177\u4F53\u63A5\u53E3\u5982\u4E0B\uFF1A</p><ul><li>das_serverInfo</li><li>das_reverseRecord</li><li>das_accountInfo</li><li>das_accountList</li><li><s>das_accountRecords</s></li></ul><h4 id="\u9891\u7387\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9891\u7387\u9650\u5236" aria-hidden="true">#</a> \u9891\u7387\u9650\u5236</h4><p>\u76EE\u524D\u4E24\u4E2A\u516C\u5F00 Indexer \u90FD\u6CA1\u6709\u8FDB\u884C\u9891\u7387\u9650\u5236\uFF0C\u8BF7\u6309\u9700\u4F7F\u7528\u3002\u4F46\u5982\u679C\u9891\u7387\u8D85\u51FA\u670D\u52A1\u627F\u8F7D\u80FD\u529B\uFF0C\u8C03\u7528\u65B9\u4F1A\u9762\u4E34\u5C01\u7981 ip \u7684\u53EF\u80FD\u3002</p><h3 id="ckb-\u8282\u70B9\u548C-ckb-indexer" tabindex="-1"><a class="header-anchor" href="#ckb-\u8282\u70B9\u548C-ckb-indexer" aria-hidden="true">#</a> CKB \u8282\u70B9\u548C CKB Indexer</h3>`,21),_={href:"https://github.com/nervosnetwork/ckb",target:"_blank",rel:"noopener noreferrer"},x=n("h4",{id:"\u90E8\u7F72\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u90E8\u7F72\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" \u90E8\u7F72\u65B9\u5F0F")],-1),y=n("p",null,"\u5177\u4F53\u90E8\u7F72\u65B9\u5F0F\u8BF7\u67E5\u770B CKB \u5B98\u65B9\u6307\u5357\uFF1A",-1),B={href:"https://docs.nervos.org/docs/basics/guides/mainnet",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),I={href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md",target:"_blank",rel:"noopener noreferrer"},K=n("br",null,null,-1),j={href:"https://github.com/nervosnetwork/ckb-indexer",target:"_blank",rel:"noopener noreferrer"},R=n("br",null,null,-1),w={href:"https://github.com/nervosnetwork/ckb-indexer#rpc",target:"_blank",rel:"noopener noreferrer"},E=r(`<h4 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h4><h5 id="ckb-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#ckb-\u8282\u70B9" aria-hidden="true">#</a> CKB \u8282\u70B9</h5><p><strong>\u8BF7\u6C42</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://mainnet.ckb.dev/rpc <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json&#39;</span> -d<span class="token string">&#39;{&quot;id&quot;:42,&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;method&quot;:&quot;get_tip_header&quot;,&quot;params&quot;:[]}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u54CD\u5E94</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;compact_target&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x190a0088&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;dao&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xac8ffb215ff346419e9af198c38b26000e53d3ad69969403002bdb8b29d71a07&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x41c03f40014bb&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;extra_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x13251222fc73918701aafc8edbb08057dde7ca95d9709990616fb8802b73af9d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x990fa3bc251b0000000000086019030c&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x6a37e1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;parent_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x4ea3a7a40877471c9a6b98306fbe453007a5306887ff8a05ab5393166f7d0f86&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;proposals_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x91cea8c15a4b9b0324561f629ff13aff4522f8a925671dfb8650256f7e68692d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x180509c0e87&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;transactions_root&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xf908c0afd0650812557edf3c346ad0f5ae9a44c24cc6cd58db4e6171631f7bbb&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="ckb-indexer" tabindex="-1"><a class="header-anchor" href="#ckb-indexer" aria-hidden="true">#</a> CKB Indexer</h5><p><strong>\u8BF7\u6C42</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://mainnet.ckb.dev/indexer <span class="token number">7</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json&#39;</span> -d<span class="token string">&#39;{&quot;id&quot;:42,&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;method&quot;:&quot;get_tip&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u54CD\u5E94</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">{</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;block_hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xc1d86e3986679d32090240f3e6abb641fe9d898976f8adb204b77d34ce11f3ec&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;block_number&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x6a37db&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793E\u533A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u793E\u533A\u8282\u70B9" aria-hidden="true">#</a> \u793E\u533A\u8282\u70B9</h4><p>\u5982\u679C\u4E0D\u60F3\u81EA\u5DF1\u90E8\u7F72 CKB \u8282\u70B9\u6216\u8005\u5904\u4E8E\u6D4B\u8BD5\u9636\u6BB5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u793E\u533A\u63D0\u4F9B\u7684\u516C\u5F00\u8282\u70B9\uFF08\u4E0D\u63A8\u8350\u957F\u671F\u4F7F\u7528\uFF09\uFF1A</p>`,13),N={href:"https://talk.nervos.org/t/free-node-rpc-and-indexer-rpc-for-ckb-developers/4948",target:"_blank",rel:"noopener noreferrer"},P=n("h4",{id:"\u4E0B\u4E00\u6B65",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E0B\u4E00\u6B65","aria-hidden":"true"},"#"),s(" \u4E0B\u4E00\u6B65")],-1);function S(O,H){const e=p("ExternalLinkIcon"),t=p("RouterLink");return i(),l("div",null,[d,n("h2",k,[b,s(),n("a",h,[s("das-account-indexer"),a(e)])]),n("p",null,[s("\u5982\u679C\u5F00\u53D1\u8005\u9700\u8981\u5728\u540E\u7AEF\u63A5\u5165 .bit\uFF0C\u90A3 "),n("a",q,[s("das-account-indexer"),a(e)]),s(" \u5C06\u662F\u60A8\u7684\u4E0D\u4E8C\u9009\u62E9\u3002")]),v,n("blockquote",null,[n("p",null,[s("\u540C\u65F6\u5B83\u4E5F\u662F "),a(t,{to:"/zh/developers/integration-frontend.html#das-sdk-js"},{default:o(()=>[s("das-sdk-js")]),_:1}),s(" \u6240\u4F9D\u8D56\u7684\u540E\u7AEF\u670D\u52A1\u3002")])]),m,n("blockquote",null,[n("p",null,[n("a",g,[s("das-account-indexer API \u6587\u6863"),a(e)])])]),f,n("p",null,[s(".bit \u7684\u6570\u636E\u5B58\u50A8\u4E8E "),n("a",_,[s("Nervos CKB"),a(e)]),s(" \u94FE\u4E0A\uFF0C\u56E0\u6B64\u81EA\u5EFA .bit Indexer \u7684\u5F00\u53D1\u8005\u9700\u8981\u90E8\u7F72\u76F8\u5E94\u7684 CKB \u8282\u70B9\u548C CKB Indexer\u3002")]),x,y,n("blockquote",null,[n("p",null,[n("a",B,[s("CKB \u8282\u70B9\u8FD0\u884C\u6307\u5F15"),a(e)]),C,n("a",I,[s("CKB \u8282\u70B9 JSON-RPC \u534F\u8BAE"),a(e)]),K,n("a",j,[s("CKB Indexer \u8FD0\u884C\u6307\u5F15"),a(e)]),R,n("a",w,[s("CKB Indexer JSON-RPC \u534F\u8BAE"),a(e)])])]),E,n("blockquote",null,[n("p",null,[n("a",N,[s("\u514D\u8D39 CKB \u8282\u70B9"),a(e)])])]),P,n("ul",null,[n("li",null,[s("\u5982\u679C\u9700\u8981\u524D\u7AEF\u63A5\u5165 .bit\uFF0C\u8BF7\u9605\u8BFB "),a(t,{to:"/zh/developers/integration-frontend.html"},{default:o(()=>[s("\u524D\u7AEF\u63A5\u5165")]),_:1})]),n("li",null,[s("\u5982\u679C\u9700\u8981\u67E5\u770B\u8BBE\u8BA1\u6307\u5357\uFF0C\u8BF7\u67E5\u770B "),a(t,{to:"/zh/developers/design-guide.html"},{default:o(()=>[s("\u8BBE\u8BA1\u3001\u4EA4\u4E92\u6307\u5357")]),_:1})])])])}const A=c(u,[["render",S],["__file","integration-backend.html.vue"]]);export{A as default};
