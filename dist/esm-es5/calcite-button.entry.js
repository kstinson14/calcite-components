var __awaiter=this&&this.__awaiter||function(t,a,e,o){function r(t){return t instanceof e?t:new e((function(a){a(t)}))}return new(e||(e=Promise))((function(e,c){function n(t){try{l(o.next(t))}catch(a){c(a)}}function i(t){try{l(o["throw"](t))}catch(a){c(a)}}function l(t){t.done?e(t.value):r(t.value).then(n,i)}l((o=o.apply(t,a||[])).next())}))};var __generator=this&&this.__generator||function(t,a){var e={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},o,r,c,n;return n={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function i(t){return function(a){return l([t,a])}}function l(n){if(o)throw new TypeError("Generator is already executing.");while(e)try{if(o=1,r&&(c=n[0]&2?r["return"]:n[0]?r["throw"]||((c=r["return"])&&c.call(r),0):r.next)&&!(c=c.call(r,n[1])).done)return c;if(r=0,c)n=[n[0]&2,c.value];switch(n[0]){case 0:case 1:c=n;break;case 4:e.label++;return{value:n[1],done:false};case 5:e.label++;r=n[1];n=[0];continue;case 7:n=e.ops.pop();e.trys.pop();continue;default:if(!(c=e.trys,c=c.length>0&&c[c.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!c||n[1]>c[0]&&n[1]<c[3])){e.label=n[1];break}if(n[0]===6&&e.label<c[1]){e.label=c[1];c=n;break}if(c&&e.label<c[2]){e.label=c[2];e.ops.push(n);break}if(c[2])e.ops.pop();e.trys.pop();continue}n=a.call(t,e)}catch(i){n=[6,i];r=0}finally{o=c=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};import{r as registerInstance,h,H as Host,g as getElement}from"./index-8fd57462.js";import{g as getElementDir}from"./dom-d9ba1da4.js";var CSS={buttonLoader:"calcite-button--loader",content:"content",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end"};var TEXT={loading:"Loading"};var calciteButtonCss="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:inline-block;width:auto;vertical-align:middle;--calcite-button-dark:#404040;--calcite-button-dark-hover:#4a4a4a;--calcite-button-dark-press:#353535;--calcite-button-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-button-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-button-dark:#404040;--calcite-button-dark-hover:#353535;--calcite-button-dark-press:#4a4a4a;--calcite-button-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-button-transparent-press:rgba(255, 255, 255, 0.08)}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host button,:host a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{margin-left:0.5rem;margin-right:0.5rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start][dir=rtl]:not([icon-end])) .content{margin-left:unset;margin-right:0.5rem}:host([icon-end][dir=rtl]:not([icon-start])) .content{margin-right:unset;margin-left:0.5rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([dir=rtl][alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:unset;margin-left:auto}:host([dir=rtl][alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:0.5rem}:host([dir=rtl][alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:unset;margin-right:0.5rem}.icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:0.4}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button,:host([loading]) a{color:transparent !important;pointer-events:none}:host([loading]) button .calcite-button--icon,:host([loading]) a .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-blue-1);border:1px solid transparent}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-blue-2)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-blue-1)}:host([appearance=solid][color=blue]) button .calcite-button--icon,:host([appearance=solid][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-red-1);border:1px solid transparent}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-red-2)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-red-1)}:host([appearance=solid][color=red]) button .calcite-button--icon,:host([appearance=solid][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=light]) button,:host([appearance=solid][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3);border:1px solid transparent}:host([appearance=solid][color=light]) button:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=light]) button:active,:host([appearance=solid][color=light]) a:active{background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=light]) button .calcite-button--icon,:host([appearance=solid][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=solid][color=light]) button calcite-loader,:host([appearance=solid][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=dark]) button,:host([appearance=solid][color=dark]) a{color:#ffffff;background-color:var(--calcite-button-dark);border:1px solid transparent}:host([appearance=solid][color=dark]) button:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) a:focus{background-color:var(--calcite-button-dark-hover)}:host([appearance=solid][color=dark]) button:active,:host([appearance=solid][color=dark]) a:active{background-color:var(--calcite-button-dark)}:host([appearance=solid][color=dark]) button .calcite-button--icon,:host([appearance=solid][color=dark]) a .calcite-button--icon{fill:#ffffff}:host([appearance=solid][color=dark]) button calcite-loader,:host([appearance=solid][color=dark]) a calcite-loader{color:#ffffff}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon,:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button .calcite-button--icon,:host([appearance=outline][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{color:var(--calcite-ui-red-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon,:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button .calcite-button--icon,:host([appearance=outline][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=outline][color=light]) button,:host([appearance=outline][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) button:hover,:host([appearance=outline][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus,:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon,:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button .calcite-button--icon,:host([appearance=outline][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button calcite-loader,:host([appearance=outline][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button,:host([appearance=outline][color=dark]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) button:hover,:host([appearance=outline][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus,:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon,:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button .calcite-button--icon,:host([appearance=outline][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button calcite-loader,:host([appearance=outline][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent;border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon,:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button .calcite-button--icon,:host([appearance=clear][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent;border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon,:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button .calcite-button--icon,:host([appearance=clear][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=clear][color=light]) button,:host([appearance=clear][color=light]) a{color:var(--calcite-ui-background);background-color:transparent;border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) button:hover,:host([appearance=clear][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus,:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus{color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon,:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=clear][color=light]) button .calcite-button--icon,:host([appearance=clear][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-background)}:host([appearance=clear][color=light]) button calcite-loader,:host([appearance=clear][color=light]) a calcite-loader{color:var(--calcite-ui-background)}:host([appearance=clear][color=dark]) button,:host([appearance=clear][color=dark]) a{color:#151515;background-color:transparent;border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) button:hover,:host([appearance=clear][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus,:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus{color:#151515;border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) a .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button calcite-loader,:host([appearance=clear][color=dark]) a calcite-loader{color:#151515}:host([dir=ltr][appearance=outline][split-child=primary]) button,:host([dir=rtl][appearance=outline][split-child=secondary]) button,:host([dir=ltr][appearance=clear][split-child=primary]) button,:host([dir=rtl][appearance=clear][split-child=secondary]) button{border-right:0}:host([dir=ltr][appearance=outline][split-child=secondary]) button,:host([dir=rtl][appearance=outline][split-child=primary]) button,:host([dir=ltr][appearance=clear][split-child=secondary]) button,:host([dir=rtl][appearance=clear][split-child=primary]) button{border-left:0}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=transparent][color=light]) button,:host([appearance=transparent][color=light]) a{color:var(--calcite-ui-foreground-1);background-color:transparent}:host([appearance=transparent][color=light]) button:hover,:host([appearance=transparent][color=light]) button:focus,:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=light]) button calcite-loader,:host([appearance=transparent][color=light]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=transparent][color=dark]) button,:host([appearance=transparent][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent}:host([appearance=transparent][color=dark]) button:hover,:host([appearance=transparent][color=dark]) button:focus,:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=dark]) button calcite-loader,:host([appearance=transparent][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([scale=s][hastext]:not([appearance=transparent])) button,:host([scale=s][hastext]:not([appearance=transparent])) a{padding:7px 12px;font-size:12px;line-height:1.33}:host([scale=s][hastext][appearance=transparent]) button,:host([scale=s][hastext][appearance=transparent]) a{padding:8px 12px;font-size:12px;line-height:1.33}:host([scale=m][hastext]:not([appearance=transparent])) button,:host([scale=m][hastext]:not([appearance=transparent])) a{padding:13px 20px;font-size:14px;line-height:1.15}:host([scale=m][hastext][appearance=transparent]) button,:host([scale=m][hastext][appearance=transparent]) a{padding:14px 20px;font-size:14px;line-height:1.15}:host([scale=l][hastext]:not([appearance=transparent])) button,:host([scale=l][hastext]:not([appearance=transparent])) a{padding:15px 24px;font-size:18px;line-height:1.2}:host([scale=l][hastext][appearance=transparent]) button,:host([scale=l][hastext][appearance=transparent]) a{padding:16px 24px;font-size:18px;line-height:1.2}:host([scale=s]:not([hastext])) button,:host([scale=s]:not([hastext])) a{height:32px;width:32px;font-size:12px}:host([scale=m]:not([hastext])) button,:host([scale=m]:not([hastext])) a{height:44px;width:44px;font-size:14px}:host([scale=l]:not([hastext])) button,:host([scale=l]:not([hastext])) a{height:56px;width:56px;font-size:18px}:host([scale=s][icon-start][icon-end]:not([hastext])) button,:host([scale=s][icon-start][icon-end]:not([hastext])) a{height:32px;width:48px;font-size:12px}:host([scale=m][icon-start][icon-end]:not([hastext])) button,:host([scale=m][icon-start][icon-end]:not([hastext])) a{height:44px;width:66px;font-size:14px}:host([scale=l][icon-start][icon-end]:not([hastext])) button,:host([scale=l][icon-start][icon-end]:not([hastext])) a{height:56px;width:84px;font-size:18px}";var CalciteButton=function(){function t(t){var a=this;registerInstance(this,t);this.appearance="solid";this.color="blue";this.intlLoading=TEXT.loading;this.alignment="center";this.loading=false;this.round=false;this.scale="m";this.splitChild=false;this.width="auto";this.childElType="button";this.hasText=false;this.handleClick=function(t){if(a.childElType==="button"&&a.type!=="button"){var e=a.el.getAttribute("form");var o=e?document.getElementsByName(""+e)[0]:a.el.closest("form");if(o){var r=o.onsubmit;switch(a.type){case"submit":if(r)r();else if(o.checkValidity())o.submit();else o.reportValidity();break;case"reset":o.reset();break}}t.preventDefault()}}}t.prototype.connectedCallback=function(){this.childElType=this.href?"a":"button";this.setupTextContentObserver()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillLoad=function(){{this.updateHasText();var t=this.el.getAttribute("type");this.type=this.childElType==="button"&&t?t:"submit"}};t.prototype.render=function(){var t,a;var e=this;var o=getElementDir(this.el);var r=this.getAttributes();var c=this.childElType;var n=h("div",{class:CSS.buttonLoader},h("calcite-loader",{active:true,inline:true,label:this.intlLoading}));var i=this.scale==="l"?"m":"s";var l=h("calcite-icon",{class:(t={},t[CSS.icon]=true,t[CSS.iconStart]=true,t),dir:o,flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:i});var s=h("calcite-icon",{class:(a={},a[CSS.icon]=true,a[CSS.iconEnd]=true,a),dir:o,flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:i});var u=h("span",{class:CSS.content},h("slot",null));return h(Host,{dir:o,hasText:this.hasText},h(c,Object.assign({},r,{disabled:this.disabled,onClick:this.handleClick,ref:function(t){return e.childEl=t},tabIndex:this.disabled?-1:null}),this.loading?n:null,this.iconStart?l:null,this.hasText?u:null,this.iconEnd?s:null))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.childEl.focus();return[2]}))}))};t.prototype.updateHasText=function(){this.hasText=this.el.textContent.trim().length>0};t.prototype.setupTextContentObserver=function(){var t=this;{this.observer=new MutationObserver((function(){t.updateHasText()}));this.observer.observe(this.el,{childList:true,subtree:true})}};t.prototype.getAttributes=function(){var t=["appearance","color","dir","hasText","icon-start","icon-end","id","splitChild","loading","scale","slot","width","theme"];return Array.from(this.el.attributes).filter((function(a){return a&&!t.includes(a.name)})).reduce((function(t,a){var e;var o=a.name,r=a.value;return Object.assign(Object.assign({},t),(e={},e[o]=r,e))}),{})};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();CalciteButton.style=calciteButtonCss;export{CalciteButton as calcite_button};