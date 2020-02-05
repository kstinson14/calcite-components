System.register(["./p-c2c99970.system.js","./p-1527e794.system.js","./p-2977e6f6.system.js","./p-ee3d2281.system.js"],(function(t){"use strict";var e,i,a,s,r,n,l,h,u,o,c,d,p,m,v,f;return{setters:[function(t){e=t.r;i=t.c;a=t.h;s=t.H;r=t.g},function(t){n=t.U;l=t.R;h=t.D;u=t.L;o=t.P;c=t.a;d=t.H;p=t.b},function(t){m=t.g;v=t.a},function(t){f=t.g}],execute:function(){var g=t("calcite_slider",function(){function t(t){e(this,t);this.theme="light";this.disabled=false;this.min=0;this.max=100;this.value=null;this.snap=true;this.step=1;this.guid="calcite-loader-"+f();this.isRange=false;this.tickValues=[];this.activeProp="value";this.calciteSliderUpdate=i(this,"calciteSliderUpdate",7)}t.prototype.componentWillLoad=function(){this.isRange=!!(this.maxValue||this.maxValue===0);this.tickValues=this.generateTickValues();this.value=this.bound(this.value);if(this.snap){this.value=this.getClosestStep(this.value)}this.calciteSliderUpdate.emit()};t.prototype.render=function(){var t=this;var e=this.el.id||this.guid;var i=m(this.el);var r=v(this.el);var n=this.minValue||this.min;var l=this.maxValue||this.value;var h=this.isRange?"maxValue":"value";return a(s,{dir:i,theme:r,id:e,"is-range":this.isRange,style:{"--calcite-slider-range-max":100-this.getUnitInterval(l)*100+"%","--calcite-slider-range-min":this.getUnitInterval(n)*100+"%"}},a("div",{class:"slider__track"},a("div",{class:"slider__track__range"}),a("div",{class:"slider__ticks"},this.tickValues.map((function(e){return a("span",{class:{slider__tick:true,"slider__tick--active":e>=n&&e<=l},style:{"--calcite-slider-tick-offset":t.getUnitInterval(e)*100+"%"}},t.labelTicks?a("span",{class:{slider__tick__label:true,"slider__tick__label--min":e===t.min,"slider__tick__label--max":e===t.max}},e):"")})))),this.isRange?a("button",{ref:function(e){return t.minHandle=e},onFocus:function(){return t.activeProp="minValue"},onBlur:function(){return t.activeProp=null},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},role:"slider","aria-orientation":"horizontal","aria-label":this.minLabel,"aria-valuenow":this.minValue,"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,class:{slider__thumb:true,"slider__thumb--min":true,"slider__thumb--active":this.dragProp==="minValue","slider__thumb--precise":this.precise}},a("span",{class:"slider__handle"}),this.labelHandles?a("span",{class:"slider__handle__label","aria-hidden":"true"},this.minValue):""):"",a("button",{ref:function(e){return t.maxHandle=e},onFocus:function(){return t.activeProp=h},onBlur:function(){return t.activeProp=null},onMouseDown:function(){return t.dragStart(h)},onTouchStart:function(e){return t.dragStart(h,e)},role:"slider","aria-orientation":"horizontal","aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-valuenow":this[h],"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,class:{slider__thumb:true,"slider__thumb--max":true,"slider__thumb--active":this.dragProp===h,"slider__thumb--precise":this.precise}},a("span",{class:"slider__handle"}),this.labelHandles?a("span",{class:"slider__handle__label","aria-hidden":"true"},this[h]):""))};t.prototype.keyDownHandler=function(t){var e=this[this.activeProp];switch(t.keyCode){case n:case l:t.preventDefault();this[this.activeProp]=this.bound(e+this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case h:case u:t.preventDefault();this[this.activeProp]=this.bound(e-this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case o:if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e+this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case c:if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e-this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case d:t.preventDefault();this[this.activeProp]=this.bound(this.min,this.activeProp);this.calciteSliderUpdate.emit();break;case p:t.preventDefault();this[this.activeProp]=this.bound(this.max,this.activeProp);this.calciteSliderUpdate.emit();break}};t.prototype.clickHandler=function(t){var e=t.clientX||t.pageX;var i=this.translate(e);var a="value";if(this.isRange){var s=Math.abs(this.maxValue-i)<Math.abs(this.minValue-i);a=s?"maxValue":"minValue"}this[a]=this.bound(i,a);this.calciteSliderUpdate.emit();var r=a==="minValue"?this.minHandle:this.maxHandle;r.focus()};t.prototype.generateTickValues=function(){var t=[];var e=this.min;while(this.ticks&&e<this.max+this.ticks){t.push(e);e=e+this.ticks}return t};t.prototype.dragStart=function(t,e){if(e){e.preventDefault()}if(this.dragListener){this.dragEnd()}this.dragProp=t;this.activeProp=t;this.dragListener=this.dragListener||this.dragUpdate.bind(this);document.addEventListener("mousemove",this.dragListener);document.addEventListener("touchmove",this.dragListener,{capture:false});document.addEventListener("mouseup",this.dragEnd.bind(this));document.addEventListener("touchend",this.dragEnd.bind(this),false);document.addEventListener("touchcancel",this.dragEnd.bind(this))};t.prototype.dragUpdate=function(t){t.preventDefault();t.stopPropagation();if(this.dragProp){var e=this.translate(t.clientX||t.pageX);this[this.dragProp]=this.bound(e,this.dragProp);this.calciteSliderUpdate.emit()}};t.prototype.dragEnd=function(){this.dragProp=null;document.removeEventListener("mousemove",this.dragListener);document.removeEventListener("touchmove",this.dragListener)};t.prototype.bound=function(t,e){t=Math.min(t,this.max);t=Math.max(t,this.min);if(e==="maxValue"){t=Math.max(t,this.minValue)}if(e==="minValue"){t=Math.min(t,this.maxValue)}return t};t.prototype.translate=function(t){var e=this.max-this.min;var i=this.el.getBoundingClientRect(),a=i.left,s=i.width;var r=(t-a)/s;var n=this.bound(this.min+e*r);if(this.snap&&this.step){n=this.getClosestStep(n)}return n};t.prototype.getClosestStep=function(t){t=this.bound(t);if(this.step){var e=Math.round(t/this.step)*this.step;t=this.bound(e)}return t};t.prototype.getUnitInterval=function(t){t=this.bound(t);var e=this.max-this.min;return(t-this.min)/e};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-slider-tick:#959595;--calcite-slider-label:#6a6a6a;--calcite-slider-track:#d4d4d4;--calcite-slider-handle:#fff;--calcite-slider-handle-border:#6a6a6a;display:block;padding:7px 0;margin:7px 0;position:relative}:host([theme=dark]){--calcite-slider-tick:#6a6a6a;--calcite-slider-label:#9f9f9f;--calcite-slider-track:#4a4a4a;--calcite-slider-handle:#2b2b2b;--calcite-slider-handle-border:#9f9f9f}:host([disabled]){opacity:.5;pointer-events:none}:host([label-handles]),:host([precise]){margin-top:21px}:host([label-ticks]),:host([precise][is-range]){margin-bottom:21px}:host([precise][label-handles]){margin-top:35px}:host([precise][label-handles][is-range]){margin-bottom:35px}.slider__thumb{position:absolute;right:var(--calcite-slider-range-max);height:28px;width:28px;margin:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:3}.slider__thumb--min{right:auto;left:var(--calcite-slider-range-min)}.slider__handle{position:absolute;top:0;left:0;height:14px;width:14px;margin:7px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-slider-handle);border:2px solid var(--calcite-slider-handle-border);-webkit-transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease,-webkit-box-shadow .25s ease}.slider__handle__label{position:absolute;left:0;bottom:28px;width:28px;height:.75em;font-size:.8125rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-slider-label);text-align:center}.slider__thumb:hover .slider__handle{border-width:3px;border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08)}.slider__thumb--active,.slider__thumb:focus{outline:none;z-index:4}.slider__thumb--active .slider__handle,.slider__thumb:focus .slider__handle{background-color:var(--calcite-ui-blue);border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}.slider__thumb--precise{margin-top:-28px}.slider__thumb--precise:after{content:\"\";display:block;position:absolute;top:14px;left:50%;width:2px;height:7px;background-color:var(--calcite-slider-handle-border);margin-left:-1px;margin-top:7px;z-index:2}.slider__thumb--active.slider__thumb--precise:after,.slider__thumb:focus.slider__thumb--precise:after,.slider__thumb:hover.slider__thumb--precise:after{background-color:var(--calcite-ui-blue)}.slider__thumb--precise.slider__thumb--min{margin-top:-2px}.slider__thumb--precise.slider__thumb--min .slider__handle__label{bottom:unset;top:28px}.slider__thumb--precise.slider__thumb--min:after{top:0;margin-top:0}.slider__track{height:2px;border-radius:0;z-index:2;background-color:var(--calcite-slider-track);-webkit-transition:all .25s ease-in;transition:all .25s ease-in;position:relative}.slider__track__range{position:absolute;top:0;right:var(--calcite-slider-range-max);left:var(--calcite-slider-range-min);height:2px;background-color:var(--calcite-ui-blue)}.slider__tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-slider-tick-offset);margin-left:-3px;border:1px solid var(--calcite-slider-handle);border-right-width:2px;border-left-width:2px;background-color:var(--calcite-slider-tick)}.slider__tick--active{background-color:var(--calcite-ui-blue)}.slider__tick__label{position:absolute;font-size:.8125rem;line-height:1.5;font-weight:500;color:var(--calcite-slider-label);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.slider__tick__label--min{left:0;margin:14px -3px;text-align:left}.slider__tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right}"},enumerable:true,configurable:true});return t}())}}}));