import{r as registerInstance,h,g as getElement,H as Host}from"./index-8fd57462.js";import{g as getElementDir,a as getElementTheme}from"./dom-d9ba1da4.js";import{h as hexToRGB,i as isValidHex}from"./utils-f2b09093.js";function stringToHex(e){var t=0;for(var a=0;a<e.length;a++){t=e.charCodeAt(a)+((t<<5)-t)}var r="#";for(var i=0;i<3;i++){var n=t>>i*8&255;r+=("00"+n.toString(16)).substr(-2)}return r}function rgbToHue(e){var t=e.r,a=e.g,r=e.b;t/=255;a/=255;r/=255;var i=Math.max(t,a,r);var n=Math.min(t,a,r);var s=i-n;if(i===n){return 0}var c=(i+n)/2;switch(i){case t:c=(a-r)/s+(a<r?6:0);break;case a:c=(r-t)/s+2;break;case r:c=(t-a)/s+4;break}return Math.round(c*60)}function hexToHue(e){return rgbToHue(hexToRGB(e))}var calciteAvatarCss="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:0.625rem}:host([scale=m]){width:2rem;height:2rem;font-size:0.75rem}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:0.875rem}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:700;text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";var CalciteAvatar=function(){function e(e){registerInstance(this,e);this.scale="m";this.error=false}e.prototype.connectedCallback=function(){var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m"};e.prototype.render=function(){var e=getElementDir(this.el);var t=this.determineContent();return h(Host,{dir:e},t)};e.prototype.determineContent=function(){var e=this;if(this.thumbnail&&!this.error){return h("img",{alt:"",class:"thumbnail",onError:function(){return e.error=true},src:this.thumbnail})}var t=this.generateInitials();var a=this.generateFillColor();return h("span",{class:"background",style:{backgroundColor:a}},t?h("span",{"aria-hidden":"true",class:"initials"},t):h("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))};e.prototype.generateFillColor=function(){var e=this,t=e.userId,a=e.username,r=e.fullName;var i=getElementTheme(this.el);var n=t&&"#"+t.substr(t.length-6);var s=a||r||"";var c=n&&isValidHex(n)?n:stringToHex(s);if(!t&&!s||!isValidHex(c)){return"var(--calcite-ui-foreground-2)"}var l=hexToHue(c);var o=i==="dark"?20:90;return"hsl("+l+", 60%, "+o+"%)"};e.prototype.generateInitials=function(){var e=this,t=e.fullName,a=e.username;if(t){return t.trim().split(" ").map((function(e){return e.substring(0,1)})).join("")}else if(a){return a.substring(0,2)}return false};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();CalciteAvatar.style=calciteAvatarCss;export{CalciteAvatar as calcite_avatar};