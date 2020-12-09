import{r as e,h as t,H as i}from"./p-ff68592a.js";const a=class{constructor(t){e(this,t),this.embed=!1,this.focused=!1,this.hidden=!1,this.theme="light"}renderTile(){const e=this.heading&&this.icon&&!this.description;return t("div",{class:{"large-visual":e,tile:!0}},this.icon&&t("div",{class:"icon"},t("calcite-icon",{icon:this.icon,scale:"l",style:e?{height:"64px",width:"64px"}:void 0})),this.heading&&t("div",{class:"heading"},this.heading),this.description&&t("div",{class:"description"},this.description))}render(){return t(i,null,this.href?t("calcite-link",{href:this.href,theme:this.theme,"user-select":"false"},this.renderTile()):this.renderTile())}};a.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-3);display:inline-block;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}:host(:not([embed])){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);max-width:300px;padding:0.75rem}:host(:not([embed])[href]:hover){-webkit-box-shadow:0 0 0 2px var(--calcite-ui-blue-1);box-shadow:0 0 0 2px var(--calcite-ui-blue-1);cursor:pointer}:host(:not([embed])[href]:active){-webkit-box-shadow:0 0 0 3px var(--calcite-ui-blue-1);box-shadow:0 0 0 3px var(--calcite-ui-blue-1)}:host([icon][heading]:not([description]):not([embed])){padding:unset}.tile{display:grid;grid-template-columns:1fr;grid-gap:0.75rem;pointer-events:none}.heading{font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-2);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;font-weight:500;pointer-events:none}.large-visual{justify-items:center;min-height:200px}.large-visual .icon{-ms-flex-item-align:self-end;align-self:self-end}.large-visual .heading{-ms-flex-item-align:center;align-self:center}.description{font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}";export{a as calcite_tile}