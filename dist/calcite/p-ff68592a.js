const e="calcite";let t,n,l,s=!1,o=!1,i=!1,c=!1,r=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},$={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},d=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),h=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=w(e,n),i=y(t,s),c=b(n);$.ael(o,l,i,c),(t.o=t.o||[]).push((()=>$.rel(o,l,i,c)))}))},y=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(l){Se(l)}},w=(e,t)=>4&t?u:8&t?a:16&t?u.body:e,b=e=>0!=(2&e),g="http://www.w3.org/1999/xlink",v=new WeakMap,k=(e,t,n)=>{let l=Le.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Le.set(e,l)},j=(e,t)=>{let n=O(t),l=Le.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,s=v.get(e=e.head||e);s||v.set(e,s=new Set),s.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},O=e=>"sc-"+e.$,x=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),C={},M=e=>"object"==(e=typeof e)||"function"===e,R=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,c=!1,r=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!M(l))&&(l+=""),i&&c?r[r.length-1].h+=l:r.push(i?S(null,l):l),c=i)};if(a(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,E);const f=S(e,null);return f.m=t,r.length>0&&(f.p=r),f.g=s,f.v=o,f},S=(e,t)=>({t:0,k:e,h:t,j:null,p:null,m:null,g:null,v:null}),_={},E={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(N)},L=e=>({vattrs:e.m,vchildren:e.p,vkey:e.g,vname:e.v,vtag:e.k,vtext:e.h}),N=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),R(e.vtag,t,...e.vchildren||[])}const t=S(e.vtag,e.vtext);return t.m=e.vattrs,t.p=e.vchildren,t.g=e.vkey,t.v=e.vname,t},P=(e,t,n,l,s,o)=>{if(n!==l){let c=Re(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=I(n),o=I(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const a=M(l);if((c||a&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(i){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!c||4&o||s)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(g,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Re(a,r)?r.slice(2):r[2]+t.slice(3),n&&$.rel(e,t,n,!1),l&&$.ael(e,t,l,!1)}},T=/\s/,I=e=>e?e.split(T):[],U=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.m||C,i=t.m||C;for(l in o)l in i||P(s,l,o[l],void 0,n,t.t);for(l in i)P(s,l,o[l],i[l],n,t.t)},W=(e,o,r,a)=>{let f,$,d,h=o.p[r],m=0;if(s||(i=!0,"slot"===h.k&&(t&&a.classList.add(t+"-s"),h.t|=h.p?2:1)),null!==h.h)f=h.j=u.createTextNode(h.h);else if(1&h.t)f=h.j=u.createTextNode("");else{if(c||(c="svg"===h.k),f=h.j=u.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&h.t?"slot-fb":h.k),c&&"foreignObject"===h.k&&(c=!1),U(null,h,c),null!=t&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),h.p)for(m=0;m<h.p.length;++m)$=W(e,h,m,f),$&&f.appendChild($);"svg"===h.k?c=!1:"foreignObject"===f.tagName&&(c=!0)}return f["s-hn"]=l,3&h.t&&(f["s-sr"]=!0,f["s-cr"]=n,f["s-sn"]=h.v||"",d=e&&e.p&&e.p[r],d&&d.k===h.k&&e.j&&A(e.j,!1)),f},A=(e,t)=>{$.t|=1;const n=e.childNodes;for(let s=n.length-1;s>=0;s--){const e=n[s];e["s-hn"]!==l&&e["s-ol"]&&(V(e).insertBefore(e,q(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&A(e,t)}$.t&=-2},D=(e,t,n,s,o,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=W(null,n,o,e),c&&(s[o].j=c,r.insertBefore(c,q(t))))},F=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,Q(l),o=!0,s["s-ol"]?s["s-ol"].remove():A(s,!0),s.remove())},H=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.g===t.g),q=e=>e&&e["s-ol"]||e,V=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.j=e.j,l=e.p,s=t.p,o=t.k,i=t.h;let r;null===i?(c="svg"===o||"foreignObject"!==o&&c,"slot"===o||U(e,t,c),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,a=0,f=t.length-1,u=t[0],$=t[f],d=l.length-1,h=l[0],m=l[d];for(;i<=f&&c<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==h)h=l[++c];else if(null==m)m=l[--d];else if(H(u,h))z(u,h),u=t[++i],h=l[++c];else if(H($,m))z($,m),$=t[--f],m=l[--d];else if(H(u,m))"slot"!==u.k&&"slot"!==m.k||A(u.j.parentNode,!1),z(u,m),e.insertBefore(u.j,$.j.nextSibling),u=t[++i],m=l[--d];else if(H($,h))"slot"!==u.k&&"slot"!==m.k||A($.j.parentNode,!1),z($,h),e.insertBefore($.j,u.j),$=t[--f],h=l[++c];else{for(r=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].g&&t[a].g===h.g){r=a;break}r>=0?(o=t[r],o.k!==h.k?s=W(t&&t[c],n,r,e):(z(o,h),t[r]=void 0,s=o.j),h=l[++c]):(s=W(t&&t[c],n,c,e),h=l[++c]),s&&V(u.j).insertBefore(s,q(u.j))}i>f?D(e,null==l[d+1]?null:l[d+1].j,n,l,c,d):c>d&&F(t,i,f)})(n,l,t,s):null!==s?(null!==e.h&&(n.textContent=""),D(n,null,t,s,0,s.length-1)):null!==l&&F(l,0,l.length-1),c&&"svg"===o&&(c=!1)):(r=n["s-cr"])?r.parentNode.textContent=i:e.h!==i&&(n.data=i)},B=e=>{let t,n,l,s,o,i,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(c[s]["s-hn"]!==t["s-hn"])if(i=c[s].nodeType,""!==o){if(1===i&&o===c[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==c[s].textContent.trim()){t.hidden=!0;break}B(t)}},G=[],J=e=>{let t,n,l,s,i,c,r=0,a=e.childNodes,f=a.length;for(;r<f;r++){if(t=a[r],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(K(n,s)?(i=G.find((e=>e.O===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.C=t:G.push({C:t,O:n}),n["s-sr"]&&G.map((e=>{K(e.O,n["s-sn"])&&(i=G.find((e=>e.O===n)),i&&!e.C&&(e.C=i.C))}))):G.some((e=>e.O===n))||G.push({O:n}));1===t.nodeType&&J(t)}},K=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Q=e=>{e.m&&e.m.ref&&e.m.ref(null),e.p&&e.p.map(Q)},X=e=>xe(e).M,Y=(e,t,n)=>{const l=X(e);return{emit:e=>Z(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},Z=(e,t,n)=>{const l=$.ce(t,n);return e.dispatchEvent(l),l},ee=(e,t)=>{t&&!e.R&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.R=t)))},te=(e,t)=>{if(e.t|=16,!(4&e.t))return ee(e,e.S),Ae((()=>ne(e,t)));e.t|=512},ne=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>re(n,e,t))),e.u=null),l=re(n,"componentWillLoad")),l=ae(l,(()=>re(n,"componentWillRender"))),ae(l,(()=>le(e,n,t)))},le=async(e,c,r)=>{const a=e.M,f=a["s-rc"];r&&(e=>{const t=e._,n=e.M,l=t.t,s=j(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(e);((e,c)=>{const r=e.M,a=e._,f=e.L||S(null,null),h=(e=>e&&e.k===_)(c)?c:R(null,null,c);if(l=r.tagName,a.N&&(h.m=h.m||{},a.N.map((([e,t])=>h.m[t]=r[e]))),h.k=null,h.t|=4,e.L=h,h.j=f.j=r.shadowRoot||r,t=r["s-sc"],n=r["s-cr"],s=d&&0!=(1&a.t),o=!1,z(f,h),$.t|=1,i){let e,t,n,l,s,o;J(h.j);let i=0;for(;i<G.length;i++)e=G[i],t=e.O,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<G.length;i++)if(e=G[i],t=e.O,e.C){for(l=e.C.parentNode,s=e.C.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}o&&B(h.j),$.t&=-2,G.length=0})(e,se(e,c)),f&&(f.map((e=>e())),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>oe(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},se=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){Se(n,e.M)}return t},oe=e=>{const t=e.M,n=e.i,l=e.S;re(n,"componentDidRender"),64&e.t?re(n,"componentDidUpdate"):(e.t|=64,fe(t),re(n,"componentDidLoad"),e.P(t),l||ce()),e.T(t),e.R&&(e.R(),e.R=void 0),512&e.t&&We((()=>te(e,!1))),e.t&=-517},ie=e=>{{const t=xe(e),n=t.M.isConnected;return n&&2==(18&t.t)&&te(t,!1),n}},ce=()=>{fe(u.documentElement),We((()=>Z(a,"appload",{detail:{namespace:"calcite"}})))},re=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){Se(l)}},ae=(e,t)=>e&&e.then?e.then(t):t(),fe=e=>e.setAttribute("calcite-hydrated",""),ue=(e,t,n,l,s,o,i)=>{let c,r,a,f;if(1===o.nodeType){for(c=o.getAttribute("c-id"),c&&(r=c.split("."),r[0]!==i&&"0"!==r[0]||(a={t:0,I:r[0],U:r[1],W:r[2],A:r[3],k:o.tagName.toLowerCase(),j:o,m:null,p:null,g:null,v:null,h:null},t.push(a),o.removeAttribute("c-id"),e.p||(e.p=[]),e.p[a.A]=a,e=a,l&&"0"===a.W&&(l[a.A]=a.j))),f=o.childNodes.length-1;f>=0;f--)ue(e,t,n,l,s,o.childNodes[f],i);if(o.shadowRoot)for(f=o.shadowRoot.childNodes.length-1;f>=0;f--)ue(e,t,n,l,s,o.shadowRoot.childNodes[f],i)}else if(8===o.nodeType)r=o.nodeValue.split("."),r[1]!==i&&"0"!==r[1]||(c=r[0],a={t:0,I:r[1],U:r[2],W:r[3],A:r[4],j:o,m:null,p:null,g:null,v:null,k:null,h:null},"t"===c?(a.j=o.nextSibling,a.j&&3===a.j.nodeType&&(a.h=a.j.textContent,t.push(a),o.remove(),e.p||(e.p=[]),e.p[a.A]=a,l&&"0"===a.W&&(l[a.A]=a.j))):a.I===i&&("s"===c?(a.k="slot",o["s-sn"]=r[5]?a.v=r[5]:"",o["s-sr"]=!0,l&&(a.j=u.createElement(a.k),a.v&&a.j.setAttribute("name",a.v),o.parentNode.insertBefore(a.j,o),o.remove(),"0"===a.W&&(l[a.A]=a.j)),n.push(a),e.p||(e.p=[]),e.p[a.A]=a):"r"===c&&(l?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.k){const t=S(null,o.textContent);t.j=o,t.A="0",e.p=[t]}},$e=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)$e(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)$e(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},de=(e,t,n)=>{if(t.D){e.watchers&&(t.F=e.watchers);const l=Object.entries(t.D),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>xe(this).H.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=xe(e),o=s.M,i=s.H.get(t),c=s.t,r=s.i;if(n=((e,t)=>null==e||M(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.D[t][0]),!(8&c&&void 0!==i||n===i)&&(s.H.set(t,n),r)){if(l.F&&128&c){const e=l.F[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(l){Se(l,o)}}))}2==(18&c)&&te(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=xe(this);return n.q.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){$.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.N.push([e,s]),s}))}}return e},he=e=>{re(e,"connectedCallback")},me=e=>{if(0==(1&$.t)){const t=xe(e),n=t._,l=()=>{};if(1&t.t)p(e,t,n.V),he(t.i);else{let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if(d&&1&n.t){const t=j(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const s=e.shadowRoot,o=[],i=s?[]:null,c=l.L=S(t,null);$.B||$e(u.body,$.B=new Map),e["s-id"]=n,e.removeAttribute("s-id"),ue(c,o,[],i,e,e,n),o.map((e=>{const n=e.I+"."+e.U,l=$.B.get(n),o=e.j;l&&d&&""===l["s-en"]&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=t,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),$.B.delete(n)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,n.$,l,t)}l||12&n.t&&pe(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){ee(t,t.S=n);break}}n.D&&Object.entries(n.D).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Ee(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.F=s.watchers,de(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(c){Se(c)}t.t&=-9,t.t|=128,e(),he(t.i)}if(s.style){let e=s.style;const t=O(n);if(!Le.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_calcite("./p-5dca96a3.js").then((n=>n.scopeCss(e,t,!1)))),k(t,e,!!(1&n.t)),l()}}}const o=t.S,i=()=>te(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}},pe=e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ye=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const t=e["s-sn"]=be(e),n=ge(this.childNodes,t);if(n){const l=ve(n,t),s=l[l.length-1];return s.parentNode.insertBefore(e,s.nextSibling)}return this.__appendChild(e)}},we=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.t){const t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map((e=>1===e.nodeType))}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=t.call(this);if(0==(1&$.t)&&2&xe(this).t){const t=new n;for(let n=0;n<e.length;n++){const l=e[n]["s-nr"];l&&t.push(l)}return t}return n.from(e)}})}},be=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",ge=(e,t)=>{let n,l=0;for(;l<e.length;l++){if(n=e[l],n["s-sr"]&&n["s-sn"]===t)return n;if(n=ge(n.childNodes,t),n)return n}return null},ve=(e,t)=>{const n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},ke=(e,t={})=>{const n=[],l=t.exclude||[],s=a.customElements,o=u.head,i=o.querySelector("meta[charset]"),c=u.createElement("style"),r=[],f=u.querySelectorAll("[sty-id]");let h,m=!0,p=0;for(Object.assign($,t),$.l=new URL(t.resourcesUrl||"./",u.baseURI).href,$.t|=2;p<f.length;p++)k(f[p].getAttribute("sty-id"),x(f[p].innerHTML),!0);e.map((e=>e[1].map((t=>{const o={t:t[0],$:t[1],D:t[2],V:t[3]};o.D=t[2],o.V=t[3],o.N=[],o.F={},!d&&1&o.t&&(o.t|=8);const i=o.$,c=class extends HTMLElement{constructor(e){super(e),Me(e=this,o),1&o.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e)),we(e,o)}connectedCallback(){h&&(clearTimeout(h),h=null),m?r.push(this):$.jmp((()=>me(this)))}disconnectedCallback(){$.jmp((()=>(()=>{if(0==(1&$.t)){const e=xe(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),re(t,"disconnectedCallback")}})()))}componentOnReady(){return xe(this).G}};ye(c.prototype),o.J=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,de(c,o,1)))})))),c.innerHTML=n+"{visibility:hidden}[calcite-hydrated]{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,i?i.nextSibling:o.firstChild),m=!1,r.length?r.map((e=>e.connectedCallback())):$.jmp((()=>h=setTimeout(ce,30)))},je=e=>{const t=new URL(e,$.l);return t.origin!==a.location.origin?t.href:t.pathname},Oe=new WeakMap,xe=e=>Oe.get(e),Ce=(e,t)=>Oe.set(t.i=e,t),Me=(e,t)=>{const n={t:0,M:e,_:t,H:new Map};return n.q=new Promise((e=>n.T=e)),n.G=new Promise((e=>n.P=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.V),Oe.set(e,n)},Re=(e,t)=>t in e,Se=(e,t)=>(0,console.error)(e,t),_e=new Map,Ee=e=>{const t=e.$.replace(/-/g,"_"),n=e.J,l=_e.get(n);return l?l[t]:__sc_import_calcite(`./${n}.entry.js`).then((e=>(_e.set(n,e),e[t])),Se)},Le=new Map,Ne=[],Pe=[],Te=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&$.t?We(Ue):$.raf(Ue))},Ie=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){Se(t)}e.length=0},Ue=()=>{Ie(Ne),Ie(Pe),(r=Ne.length>0)&&$.raf(Ue)},We=e=>h().then(e),Ae=Te(Pe,!0);export{f as C,_ as H,e as N,h as a,ke as b,Y as c,u as d,je as e,ie as f,X as g,R as h,$ as p,Ce as r,a as w}