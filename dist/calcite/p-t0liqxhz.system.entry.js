System.register(["./p-701843af.system.js"],(function(e){"use strict";var t,r,s,i;return{setters:[function(e){t=e.r;r=e.h;s=e.H;i=e.g}],execute:function(){var n=e("calcite_progress",function(){function e(e){t(this,e);this.type="determinate";this.value=0;this.text=null;this.reversed=false}e.prototype.render=function(){var e=this.type==="determinate";var t=e?{width:this.value*100+"%"}:{};return r(s,{class:"calcite-progress"},r("div",{class:"track"}),r("div",{class:{bar:true,indeterminate:this.type==="indeterminate",reversed:this.reversed},style:t}),this.text?r("div",{class:"text"},this.text):null)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host([hidden]){display:none}:host{position:relative;display:block;height:2px;width:100%;overflow:hidden}.bar,.track{position:absolute;top:0;height:2px}.track{background:var(--calcite-ui-border-3);z-index:0;width:100%}.bar{background-color:var(--calcite-ui-blue);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2.2s linear infinite;animation:looping-progress-bar-ani 2.2s linear infinite}.reversed{right:0}.text{padding:1.5rem 0 0 0}\@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}50%{width:40%}to{-webkit-transform:translate3d(600%,0,0);transform:translate3d(600%,0,0)}}\@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}50%{width:40%}to{-webkit-transform:translate3d(600%,0,0);transform:translate3d(600%,0,0)}}"},enumerable:true,configurable:true});return e}())}}}));