var __awaiter=this&&this.__awaiter||function(e,t,o,i){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,c){function n(e){try{s(i.next(e))}catch(t){c(t)}}function l(e){try{s(i["throw"](e))}catch(t){c(t)}}function s(e){e.done?o(e.value):a(e.value).then(n,l)}s((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,a,c,n;return n={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function l(e){return function(t){return s([e,t])}}function s(n){if(i)throw new TypeError("Generator is already executing.");while(o)try{if(i=1,a&&(c=n[0]&2?a["return"]:n[0]?a["throw"]||((c=a["return"])&&c.call(a),0):a.next)&&!(c=c.call(a,n[1])).done)return c;if(a=0,c)n=[n[0]&2,c.value];switch(n[0]){case 0:case 1:c=n;break;case 4:o.label++;return{value:n[1],done:false};case 5:o.label++;a=n[1];n=[0];continue;case 7:n=o.ops.pop();o.trys.pop();continue;default:if(!(c=o.trys,c=c.length>0&&c[c.length-1])&&(n[0]===6||n[0]===2)){o=0;continue}if(n[0]===3&&(!c||n[1]>c[0]&&n[1]<c[3])){o.label=n[1];break}if(n[0]===6&&o.label<c[1]){o.label=c[1];c=n;break}if(c&&o.label<c[2]){o.label=c[2];o.ops.push(n);break}if(c[2])o.ops.pop();o.trys.pop();continue}n=t.call(e,o)}catch(l){n=[6,l];a=0}finally{i=c=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-c97dd66b.system.js","./p-466a0799.system.js","./p-46dac740.system.js"],(function(e){"use strict";var t,o,i,a,c,n,l,s;return{setters:[function(e){t=e.r;o=e.c;i=e.h;a=e.H;c=e.g},function(e){n=e.b;l=e.g},function(e){s=e.g}],execute:function(){var r={icon:"combobox-item-icon",label:"combobox-item-label",nested:"combobox-item-nested",parent:"combobox-item-parent",selected:"selected",title:"title",textContainer:"text-container"};var b="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=xs]){font-size:10px;--calcite-combobox-item-spacing-unit-l:8px;--calcite-combobox-item-spacing-unit-s:4px}:host([scale=s]){font-size:12px;--calcite-combobox-item-spacing-unit-l:12px;--calcite-combobox-item-spacing-unit-s:8px}:host([scale=m]){font-size:14px;--calcite-combobox-item-spacing-unit-l:16px;--calcite-combobox-item-spacing-unit-s:12px}:host([scale=l]){font-size:16px;--calcite-combobox-item-spacing-unit-l:20px;--calcite-combobox-item-spacing-unit-s:16px}:host([scale=xl]){font-size:18px;--calcite-combobox-item-spacing-unit-l:24px;--calcite-combobox-item-spacing-unit-s:20px}:host,:host ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:none}:host .combobox-item-label{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .combobox-item-label{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host .combobox-item-label{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:100%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-s);cursor:pointer;text-decoration:none;position:relative}:host .combobox-item-label .combobox-item-icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;margin-right:var(--calcite-combobox-item-spacing-unit-s);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;color:var(--calcite-ui-border-1)}:host([dir=rtl]) .combobox-item-label .combobox-item-icon{margin-left:var(--calcite-combobox-item-spacing-unit-l);margin-right:unset}:host .combobox-item-label.combobox-item-nested{padding-left:var(--calcite-combobox-item-spacing-unit-s)}:host .combobox-item-label.combobox-item-nested .combobox-item-icon{padding-left:var(--calcite-combobox-item-spacing-unit-l)}:host([dir=rtl]) .combobox-item-label.combobox-item-nested{padding-right:var(--calcite-combobox-item-spacing-unit-s);padding-left:unset}:host([dir=rtl]) .combobox-item-label.combobox-item-nested .combobox-item-icon{padding-right:var(--calcite-combobox-item-spacing-unit-l);padding-left:unset}:host(:not([disabled])) .combobox-item-label:hover,:host(:not([disabled])) .combobox-item-label:active{-webkit-box-shadow:none;box-shadow:none;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:not([disabled])) .combobox-item-label:hover .combobox-item-icon,:host(:not([disabled])) .combobox-item-label:active .combobox-item-icon{opacity:1}:host(:focus:not([disabled])) .combobox-item-label{-webkit-box-shadow:none;box-shadow:none;color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus:not([disabled])) .combobox-item-label .combobox-item-icon{opacity:1}:host([disabled]) .combobox-item-label:hover .combobox-item-icon{opacity:1}:host([disabled]) .combobox-item-label:hover{cursor:default}:host(:focus){-webkit-box-shadow:none;box-shadow:none}:host .combobox-item-label.selected{color:var(--calcite-ui-text-1);font-weight:500}:host .combobox-item-label.selected .combobox-item-icon{color:var(--calcite-ui-blue-1);opacity:1}";var m=e("calcite_combobox_item",function(){function e(e){var i=this;t(this,e);this.calciteComboboxItemChange=o(this,"calciteComboboxItemChange",7);this.calciteComboboxItemKeyEvent=o(this,"calciteComboboxItemKeyEvent",7);this.disabled=false;this.selected=false;this.isSelected=this.selected;this.itemClickHandler=function(e){e.preventDefault();if(i.disabled){return}i.isSelected=!i.isSelected;i.calciteComboboxItemChange.emit(i.el)}}e.prototype.selectedWatchHandler=function(e){this.isSelected=e};e.prototype.componentWillLoad=function(){this.isNested=this.getDepth();this.hasDefaultSlot=this.el.querySelector(":not([slot])")!==null};e.prototype.keyDownHandler=function(e){e.stopPropagation();switch(s(e.key)){case" ":case"Enter":this.isSelected=!this.isSelected;this.calciteComboboxItemChange.emit(this.el);e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Tab":case"Escape":this.calciteComboboxItemKeyEvent.emit({event:e,item:this.el});e.preventDefault();break}};e.prototype.toggleSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.disabled){return[2]}this.isSelected=typeof e==="boolean"?e:!this.isSelected;return[2]}))}))};e.prototype.getDepth=function(){var e;return!!((e=this.el.parentElement)===null||e===void 0?void 0:e.closest("calcite-combobox-item"))};e.prototype.renderIcon=function(e){var t=e!=="l"?"s":"m";var o=this.disabled?"circle-disallowed":"check";return i("calcite-icon",{class:r.icon,icon:o,scale:t})};e.prototype.renderChildren=function(){if(!this.hasDefaultSlot){return null}return i("ul",null,i("slot",null))};e.prototype.render=function(){var e;var t=this;var o=(e={},e[r.label]=true,e[r.selected]=this.isSelected,e[r.nested]=this.isNested,e[r.parent]=!this.isNested,e);var c=n(this.el,"scale","m");var s=l(this.el);return i(a,{"aria-selected":this.isSelected.toString(),dir:s,disabled:this.disabled,role:"option",scale:c,tabIndex:this.disabled?null:0},i("div",{class:o,onClick:this.itemClickHandler,ref:function(e){return t.comboboxItemEl=e}},this.renderIcon(c),i("span",{class:r.title},this.textLabel)),this.renderChildren())};Object.defineProperty(e.prototype,"el",{get:function(){return c(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{selected:["selectedWatchHandler"]}},enumerable:false,configurable:true});return e}());m.style=b}}}));