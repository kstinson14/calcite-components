var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,c){function r(t){try{l(n.next(t))}catch(e){c(e)}}function s(t){try{l(n["throw"](t))}catch(e){c(e)}}function l(t){t.done?i(t.value):o(t.value).then(r,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,o,c,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(c=r[0]&2?o["return"]:r[0]?o["throw"]||((c=o["return"])&&c.call(o),0):o.next)&&!(c=c.call(o,r[1])).done)return c;if(o=0,c)r=[r[0]&2,c.value];switch(r[0]){case 0:case 1:c=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(c=i.trys,c=c.length>0&&c[c.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!c||r[1]>c[0]&&r[1]<c[3])){i.label=r[1];break}if(r[0]===6&&i.label<c[1]){i.label=c[1];c=r;break}if(c&&i.label<c[2]){i.label=c[2];i.ops.push(r);break}if(c[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(s){r=[6,s];o=0}finally{n=c=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-701843af.system.js"],(function(t){"use strict";var e,i,n,o,c;return{setters:[function(t){e=t.r;i=t.c;n=t.h;o=t.H;c=t.g}],execute:function(){var r=t("calcite_notice",function(){function t(t){e(this,t);this.active=false;this.color="blue";this.scale="m";this.width="auto";this.dismissible=false;this.icon=false;this.noticeId=this.el.id;this.iconDefaults={green:"checkCircle",yellow:"exclamationMarkTriangle",red:"exclamationMarkTriangle",blue:"lightbulb"};this.calciteNoticeClose=i(this,"calciteNoticeClose",7);this.calciteNoticeOpen=i(this,"calciteNoticeOpen",7)}t.prototype.connectedCallback=function(){var t=["blue","red","green","yellow"];if(!t.includes(this.color))this.color="blue";var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m";var i=["auto","half","full"];if(!i.includes(this.width))this.width="auto"};t.prototype.componentDidLoad=function(){this.noticeLinkEl=this.el.querySelectorAll("calcite-button")[0]};t.prototype.render=function(){var t=this;var e=n("button",{class:"notice-close","aria-label":"close",onClick:function(){return t.close()},ref:function(e){return t.closeButton=e}},n("calcite-icon",{icon:"x",scale:"s"}));return n(o,{active:this.active},this.icon?this.setIcon():null,n("div",{class:"notice-content"},n("slot",{name:"notice-title"}),n("slot",{name:"notice-message"}),n("slot",{name:"notice-link"})),this.dismissible?e:null)};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=false;this.calciteNoticeClose.emit({requestedNotice:this.noticeId});return[2]}))}))};t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=true;this.calciteNoticeOpen.emit({requestedNotice:this.noticeId});return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(!this.closeButton&&!this.noticeLinkEl){return[2]}if(this.noticeLinkEl)this.noticeLinkEl.setFocus();else if(this.closeButton){this.closeButton.focus()}return[2]}))}))};t.prototype.setIcon=function(){var t=this.iconDefaults[this.color];return n("div",{class:"notice-icon"},n("calcite-icon",{icon:t,filled:true,scale:"s"}))};Object.defineProperty(t.prototype,"el",{get:function(){return c(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=s]) div::slotted([slot=notice-title]),:host([scale=s]) slot[name=notice-title]::slotted(div){font-size:.875rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-button),:host([scale=s]) div::slotted([slot=notice-message]),:host([scale=s]) slot[name=notice-message]::slotted(div){font-size:.8125rem;line-height:1.5}:host([scale=m]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.5rem}:host([scale=m]) div::slotted([slot=notice-title]),:host([scale=m]) slot[name=notice-title]::slotted(div){font-size:.9375rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-button),:host([scale=m]) div::slotted([slot=notice-message]),:host([scale=m]) slot[name=notice-message]::slotted(div){font-size:.875rem;line-height:1.5}:host([scale=l]){--calcite-notice-spacing-token-small:1.2rem;--calcite-notice-spacing-token-large:1.875rem}:host([scale=l]) div::slotted([slot=notice-title]),:host([scale=l]) slot[name=notice-title]::slotted(div){font-size:1rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-button),:host([scale=l]) div::slotted([slot=notice-message]),:host([scale=l]) slot[name=notice-message]::slotted(div){font-size:.9375rem;line-height:1.5}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;text-align:left;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--calcite-notice-width);max-height:0;background-color:var(--calcite-ui-foreground);opacity:0;pointer-events:none;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;border-left:0 solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}:host-context([dir=rtl]){text-align:right;border-left:none;border-right:0 solid}:host([active]){display:-ms-inline-flexbox;display:inline-flex;opacity:1;max-height:100%;pointer-events:auto;border-width:3px;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08)}div::slotted([slot=notice-title]),slot[name=notice-title]::slotted(div){color:var(--calcite-ui-text-1);font-weight:500}div::slotted([slot=notice-message]),slot[name=notice-message]::slotted(div){display:inline;margin-right:var(--calcite-notice-spacing-token-small);color:var(--calcite-ui-text-2)}:host-context([dir=rtl]) div::slotted([slot=notice-message]),:host-context([dir=rtl]) slot[name=notice-message]::slotted(div){margin-right:unset;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-child{padding:var(--calcite-notice-spacing-token-small)}:host-context([dir=rtl]) .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}:host-context([dir=rtl]) .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.notice-icon{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.notice-close,.notice-icon{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.notice-close{-ms-flex:0 0 auto;flex:0 0 auto;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3)}.notice-close:focus,.notice-close:hover{background-color:var(--calcite-ui-foreground-hover)}.notice-close:active{background-color:var(--calcite-ui-foreground-press)}:host([color=blue]){border-color:var(--calcite-ui-blue)}:host([color=blue]) .notice-icon{color:var(--calcite-ui-blue)}:host([color=red]){border-color:var(--calcite-ui-red)}:host([color=red]) .notice-icon{color:var(--calcite-ui-red)}:host([color=yellow]){border-color:var(--calcite-ui-yellow)}:host([color=yellow]) .notice-icon{color:var(--calcite-ui-yellow)}:host([color=green]){border-color:var(--calcite-ui-green)}:host([color=green]) .notice-icon{color:var(--calcite-ui-green)}"},enumerable:true,configurable:true});return t}())}}}));