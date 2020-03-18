System.register(["./p-701843af.system.js","./p-ee3d2281.system.js"],(function(e){"use strict";var t,r,s,a,i;return{setters:[function(e){t=e.r;r=e.h;s=e.H;a=e.g},function(e){i=e.g}],execute:function(){var l=e("calcite_loader",function(){function e(e){t(this,e);this.isActive=false;this.inline=false;this.value=0;this.text="";this.guid="calcite-loader-"+i()}e.prototype.render=function(){var e=this.el.id||this.guid;var t=this.inline?20:56;var a=this.inline?9:25;var i="0 0 "+t+" "+t;var l=this.type==="determinate";var n=2*a*Math.PI;var c=this.value/100*n;var o=n-c;var v=Math.floor(this.value);var u={"aria-valuenow":v,"aria-valuemin":0,"aria-valuemax":100,complete:v===100};var g={r:a,cx:t/2,cy:t/2};var d={"stroke-dasharray":c+" "+o};return r(s,Object.assign({id:e,role:"progressbar"},l?u:{}),r("div",{class:"loader__svgs"},r("svg",{viewBox:i,class:"loader__svg loader__svg--1"},r("circle",Object.assign({},g))),r("svg",{viewBox:i,class:"loader__svg loader__svg--2"},r("circle",Object.assign({},g))),r("svg",Object.assign({viewBox:i,class:"loader__svg loader__svg--3"},l?{style:d}:{}),r("circle",Object.assign({},g)))),this.text&&r("div",{class:"loader__text"},this.text),l&&r("div",{class:"loader__percentage"},v))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"\@charset \"UTF-8\";:host,:host([hidden]){display:none}:host{position:relative;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:56px;stroke:var(--calcite-ui-blue);stroke-width:3;fill:none;opacity:1;-webkit-transform:scale(1);transform:scale(1);animation:loader-color-shift 6s linear infinite alternate-reverse}:host([no-padding]){padding-top:0;padding-bottom:0}:host([is-active]){display:block}.loader__text{margin-top:5rem;line-height:1.5}.loader__percentage,.loader__text{display:block;text-align:center;font-size:.875rem}.loader__percentage{margin-top:28px;color:var(--calcite-ui-text-1);line-height:.25}.loader__percentage,.loader__svgs{width:56px;position:absolute;top:4rem;left:50%;margin-left:-28px;-webkit-transform:scale(1);transform:scale(1)}.loader__svgs{opacity:1}.loader__svg,.loader__svgs{height:56px;overflow:visible}.loader__svg{width:56px;position:absolute;top:0;left:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}\@supports (display:grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){stroke:var(--calcite-ui-border-3);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__svg--3{stroke:var(--calcite-ui-blue);stroke-dasharray:157.0795;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none;-webkit-transition:all .1s linear;transition:all .1s linear}:host([inline]){stroke:currentColor;stroke-width:2;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:20px;min-height:20px;width:20px;margin-right:10px;vertical-align:-4px}:host([inline][dir=rtl]){margin-left:10px;margin-right:0}:host([is-active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:20px;height:20px}:host([inline]) .loader__svg{width:20px;height:20px}:host([complete]){-webkit-transition:opacity .2s linear 1s,-webkit-transform .2s linear 1s;transition:opacity .2s linear 1s,-webkit-transform .2s linear 1s;transition:opacity .2s linear 1s,transform .2s linear 1s;transition:opacity .2s linear 1s,transform .2s linear 1s,-webkit-transform .2s linear 1s}:host([complete]),:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:center;transform-origin:center}:host([complete]) .loader__svgs{-webkit-transition:opacity .18s linear .8s,-webkit-transform .18s linear .8s;transition:opacity .18s linear .8s,-webkit-transform .18s linear .8s;transition:opacity .18s linear .8s,transform .18s linear .8s;transition:opacity .18s linear .8s,transform .18s linear .8s,-webkit-transform .18s linear .8s}:host([complete]) .loader__percentage{color:var(--calcite-ui-blue);-webkit-transform:scale(1.075);transform:scale(1.075);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color .2s linear,-webkit-transform .2s linear;transition:color .2s linear,-webkit-transform .2s linear;transition:color .2s linear,transform .2s linear;transition:color .2s linear,transform .2s linear,-webkit-transform .2s linear}.loader__svg--1{stroke-dasharray:28.0499107143% 140.2495535714%;-webkit-animation-duration:.72s;animation-duration:.72s}\@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}to{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}to{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}.loader__svg--2{stroke-dasharray:56.0998214286% 140.2495535714%;-webkit-animation-duration:.96s;animation-duration:.96s}\@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}to{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}to{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}.loader__svg--3{stroke-dasharray:14.0249553571% 140.2495535714%;-webkit-animation-duration:1.16s;animation-duration:1.16s}\@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}to{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}to{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue)}33%{stroke:var(--calcite-ui-blue-press)}66%{stroke:var(--calcite-ui-blue-hover)}to{stroke:var(--calcite-ui-blue)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue)}33%{stroke:var(--calcite-ui-blue-press)}66%{stroke:var(--calcite-ui-blue-hover)}to{stroke:var(--calcite-ui-blue)}}\@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"},enumerable:true,configurable:true});return e}())}}}));