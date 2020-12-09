System.register(["./p-c97dd66b.system.js","./p-466a0799.system.js"],(function(e){"use strict";var t,a,i,r,n,o;return{setters:[function(e){t=e.r;a=e.h;i=e.H;r=e.g;n=e.c},function(e){o=e.c}],execute:function(){var l={main:"main",mainReversed:"main--reversed",content:"content",footer:"footer"};var s={centerRow:"center-row",primaryPanel:"primary-panel",contextualPanel:"contextual-panel",header:"shell-header",footer:"shell-footer"};var c="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(.header .heading){font-weight:var(--calcite-ui-text-weight);font-size:0.875rem;line-height:1.5}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-tip-manager){-webkit-animation:calcite-fade-in-up 150ms ease-in-out;animation:calcite-fade-in-up 150ms ease-in-out;border-radius:var(--calcite-border-radius);bottom:var(--calcite-spacing-plus-half);-webkit-box-shadow:var(--calcite-shadow-2);box-shadow:var(--calcite-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-shell-tip-spacing);position:absolute;right:var(--calcite-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-spacing-half) var(--calcite-spacing)}";var d=e("calcite_shell",function(){function e(e){t(this,e)}e.prototype.renderHeader=function(){var e=!!o(this.el,s.header);return e?a("slot",{name:s.header}):null};e.prototype.renderContent=function(){return a("div",{class:l.content},a("slot",null))};e.prototype.renderFooter=function(){var e=!!o(this.el,s.footer);return e?a("div",{class:l.footer},a("slot",{name:s.footer})):null};e.prototype.renderMain=function(){var e;var t=o(this.el,s.primaryPanel);var i=(e={},e[l.main]=true,e[l.mainReversed]=(t===null||t===void 0?void 0:t.position)==="end",e);return a("div",{class:i},a("slot",{name:s.primaryPanel}),this.renderContent(),a("slot",{name:s.centerRow}),a("slot",{name:s.contextualPanel}))};e.prototype.render=function(){return a(i,null,this.renderHeader(),this.renderMain(),this.renderFooter())};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());d.style=c;var h={content:"content",contentDetached:"content--detached"};var p={actionBar:"action-bar"};var f="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;pointer-events:none;--calcite-shell-panel-detached-max-height:unset}::slotted(calcite-panel),::slotted(calcite-flow){height:100%;max-height:unset;max-width:unset;width:100%}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-background);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;padding:0;pointer-events:auto;width:var(--calcite-shell-panel-width);max-width:var(--calcite-shell-panel-max-width);min-width:var(--calcite-shell-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out;transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out}:host([width-scale=s]) .content{--calcite-shell-panel-width:12vw;--calcite-shell-panel-max-width:300px;--calcite-shell-panel-min-width:150px}:host([width-scale=m]) .content{--calcite-shell-panel-width:20vw;--calcite-shell-panel-max-width:420px;--calcite-shell-panel-min-width:240px}:host([width-scale=l]) .content{--calcite-shell-panel-width:45vw;--calcite-shell-panel-max-width:680px;--calcite-shell-panel-min-width:340px}:host([detached-height-scale=s]) .content--detached{--calcite-shell-panel-detached-max-height:40vh}:host([detached-height-scale=m]) .content--detached{--calcite-shell-panel-detached-max-height:60vh}:host([detached-height-scale=l]) .content--detached{--calcite-shell-panel-detached-max-height:80vh}.content--detached{border-radius:var(--calcite-border-radius);-webkit-box-shadow:var(--calcite-shadow-0);box-shadow:var(--calcite-shadow-0);height:auto;margin:var(--calcite-spacing-half) var(--calcite-spacing-half) auto;max-height:var(--calcite-shell-panel-detached-max-height);overflow:hidden}.content--detached ::slotted(calcite-panel),.content--detached ::slotted(calcite-flow){max-height:unset}.content[hidden]{display:none}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-ui-border-3)}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-ui-border-3)}";var m=e("calcite_shell_panel",function(){function e(e){t(this,e);this.calciteShellPanelToggle=n(this,"calciteShellPanelToggle",7);this.collapsed=false;this.detached=false;this.detachedHeightScale="l";this.widthScale="m"}e.prototype.watchHandler=function(){this.calciteShellPanelToggle.emit()};e.prototype.render=function(){var e;var t=this,r=t.collapsed,n=t.detached,o=t.position;var l=a("div",{class:(e={},e[h.content]=true,e[h.contentDetached]=n,e),hidden:r},a("slot",null));var s=a("slot",{name:p.actionBar});var c=[s,l];if(o==="end"){c.reverse()}return a(i,null,c)};Object.defineProperty(e,"watchers",{get:function(){return{collapsed:["watchHandler"]}},enumerable:false,configurable:true});return e}());m.style=f}}}));