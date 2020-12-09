import{r as e,c as l,h as a,H as t,g as c}from"./p-ff68592a.js";import{g as i}from"./p-fbd3d700.js";const s=class{constructor(a){e(this,a),this.calciteLabelFocus=l(this,"calciteLabelFocus",7),this.status="idle",this.scale="m",this.layout="default"}disabledWatcher(){this.disabled&&this.setDisabledControls()}onClick({target:e}){if(e===this.el||e===this.labelEl||e===this.spanEl){const l=this.el.getAttribute("for");this.calciteLabelFocus.emit({labelEl:this.el,interactedEl:e,requestedInput:l});const a=l?document.getElementById(l):this.el.querySelector("input");(a&&a.nodeName.startsWith("CALCITE-")||a&&"INPUT"===a.nodeName&&e===this.el)&&a.click()}}getAttributes(){const e=["disabled","id","layout","scale","status","theme"];return Array.from(this.el.attributes).filter((l=>l&&!e.includes(l.name))).reduce(((e,{name:l,value:a})=>Object.assign(Object.assign({},e),{[l]:a})),{})}connectedCallback(){["invalid","valid","idle"].includes(this.status)||(this.status="idle"),["inline","inline-space-between","default"].includes(this.layout)||(this.layout="default"),["s","m","l"].includes(this.scale)||(this.scale="m")}componentDidLoad(){this.labelEl.childNodes.forEach((e=>{"#text"===e.nodeName&&e.textContent.trim().length>0&&(this.spanEl=document.createElement("span"),this.spanEl.classList.add("calcite-label-text"),this.spanEl.appendChild(document.createTextNode(e.textContent.trim())),e.parentNode.replaceChild(this.spanEl,e))})),this.disabled&&this.setDisabledControls()}render(){const e=this.getAttributes(),l=i(this.el);return a(t,{dir:l},a("label",Object.assign({},e,{ref:e=>this.labelEl=e}),a("slot",null)))}setDisabledControls(){var e;null===(e=this.labelEl)||void 0===e||e.childNodes.forEach((e=>{e.nodeName.includes("CALCITE")&&e.setAttribute("disabled","")}))}get el(){return c(this)}static get watchers(){return{disabled:["disabledWatcher"]}}};s.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}[dir=rtl].sc-calcite-label-h{text-align:right}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom) 0;line-height:1.3}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:0.75rem}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:0.875rem}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:1.125rem}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}.sc-calcite-label-h[layout=default]>.sc-calcite-label-s>.calcite-label-text{margin-bottom:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text{margin-left:0.75rem;margin-right:0.75rem}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text:first-child,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text:first-child{margin-left:0;margin-right:0.75rem}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text:last-child,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text:last-child{margin-left:0.75rem;margin-right:0}.sc-calcite-label-h[dir=rtl][layout=inline] .sc-calcite-label-s>.calcite-label-text:first-child,.sc-calcite-label-h[dir=rtl][layout=inline-space-between] .sc-calcite-label-s>.calcite-label-text:first-child{margin-left:0.75rem;margin-right:0}.sc-calcite-label-h[dir=rtl][layout=inline] .sc-calcite-label-s>.calcite-label-text:last-child,.sc-calcite-label-h[dir=rtl][layout=inline-space-between] .sc-calcite-label-s>.calcite-label-text:last-child{margin-left:0;margin-right:0.75rem}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:0.4}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-red-1)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label,.sc-calcite-label-h[disable-spacing] .sc-calcite-label-s>.calcite-label-text{margin:0}";export{s as calcite_label}