System.register(["./p-701843af.system.js","./p-c5bab80f.system.js"],(function(e){"use strict";var t,r,s,i,n;return{setters:[function(e){t=e.r;r=e.h;s=e.H;i=e.g},function(e){n=e.a}],execute:function(){var c=e("calcite_progress",function(){function e(e){t(this,e);this.type="determinate";this.value=0;this.text=null;this.reversed=false}e.prototype.render=function(){var e=n(this.el);return r(s,{class:"calcite-progress",type:this.type,reversed:this.reversed,style:{"--percentage-value":this.value*100+"%"},theme:e},r("div",{class:"calcite-progress--track"}),r("div",{class:{"calcite-progress--bar":true,"--indeterminate":this.type==="indeterminate","--determinate":this.type==="determinate"}}),this.text?r("div",{class:"calcite-progress--text"},this.text):null)};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host([hidden]){display:none}:host{--calcite-track-color:#eaeaea;position:relative;display:block}:host-context([theme=dark]){--calcite-track-color:#353535}.calcite-progress--bar,.calcite-progress--track{content:\"\";opacity:1;position:absolute;height:2px;top:0;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.calcite-progress--track{background:var(--calcite-track-color);z-index:0;width:100%}.calcite-progress--bar{background-color:var(--calcite-ui-blue);z-index:0}.--indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 1.5s linear infinite;animation:looping-progress-bar-ani 1.5s linear infinite}.--determinate{width:var(--percentage-value)}.calcite-progress--text{padding:20px 0 0 0}\@-webkit-keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}\@keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}"},enumerable:true,configurable:true});return e}())}}}));