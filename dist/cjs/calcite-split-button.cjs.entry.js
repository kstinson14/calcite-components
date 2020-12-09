'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');

const calciteSplitButtonCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host .split-button__container{display:-ms-flexbox;display:flex}:host .split-button__container>calcite-dropdown>calcite-button{height:100%}.split-button__divider-container{width:1px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.split-button__divider{width:1px;height:66.666%;display:inline-block}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([disabled]) .split-button__divider-container{opacity:0.4}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([appearance=solid]){--border-color:transparent;--seperator-color:var(--calcite-ui-foreground-1)}:host([appearance=solid]):host([color=blue]){--bg-color:var(--calcite-ui-blue-1)}:host([appearance=solid]):host([color=red]){--bg-color:var(--calcite-ui-red-1)}:host([appearance=solid]):host([color=light]){--bg-color:var(--calcite-ui-foreground-3);--seperator-color:var(--calcite-ui-text-1)}:host([appearance=solid]):host([color=dark]){--bg-color:#404040;--seperator-color:#ffffff}:host([appearance=outline]),:host([appearance=clear]),:host([appearance=transparent]){--bg-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([color=blue]),:host([appearance=clear]):host([color=blue]),:host([appearance=transparent]):host([color=blue]){--border-color:var(--calcite-ui-blue-3);--seperator-color:var(--calcite-ui-blue-3)}:host([appearance=outline]):host([color=red]),:host([appearance=clear]):host([color=red]),:host([appearance=transparent]):host([color=red]){--border-color:var(--calcite-ui-red-3);--seperator-color:var(--calcite-ui-red-3)}:host([appearance=outline]):host([color=light]),:host([appearance=clear]):host([color=light]),:host([appearance=transparent]):host([color=light]){--border-color:var(--calcite-ui-foreground-3);--seperator-color:var(--calcite-ui-text-1)}:host([appearance=outline]):host([color=dark]),:host([appearance=clear]):host([color=dark]),:host([appearance=transparent]):host([color=dark]){--border-color:#404040;--seperator-color:var(--calcite-ui-text-1)}:host([appearance=clear]),:host([appearance=transparent]){--bg-color:transparent}:host([appearance=clear]):host([color=light]),:host([appearance=transparent]):host([color=light]){--seperator-color:var(--calcite-ui-background)}:host([appearance=clear]):host([color=dark]),:host([appearance=transparent]):host([color=dark]){--seperator-color:#151515}:host([appearance=transparent]){--border-color:transparent}.split-button__divider-container{background-color:var(--bg-color);border-color:var(--border-color)}.split-button__divider{background-color:var(--seperator-color)}:host(:hover[appearance=outline]) .split-button__divider-container,:host(:hover[appearance=clear]) .split-button__divider-container{background-color:var(--border-color)}:host([appearance=outline]) .split-button__divider-container,:host([appearance=clear]) .split-button__divider-container{border-width:1px;border-left:0;border-right:0;border-style:solid}:host([appearance=transparent]) .split-button__divider-container{border-width:0}";

const CalciteSplitButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteSplitButtonPrimaryClick = index.createEvent(this, "calciteSplitButtonPrimaryClick", 7);
    this.calciteSplitButtonSecondaryClick = index.createEvent(this, "calciteSplitButtonSecondaryClick", 7);
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the control, defaults to blue */
    this.color = "blue";
    /** specify the icon used for the dropdown menu, defaults to chevron */
    this.dropdownIconType = "chevron";
    /** optionally add a calcite-loader component to the control,
     disabling interaction. with the primary button */
    this.loading = false;
    /** specify the scale of the control, defaults to m */
    this.scale = "m";
    this.calciteSplitButtonPrimaryClickHandler = (e) => this.calciteSplitButtonPrimaryClick.emit(e);
    this.calciteSplitButtonSecondaryClickHandler = (e) => this.calciteSplitButtonSecondaryClick.emit(e);
  }
  render() {
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir }, index.h("div", { class: "split-button__container" }, index.h("calcite-button", { appearance: this.appearance, "aria-label": this.primaryLabel, color: this.color, dir: dir, disabled: this.disabled, "icon-end": this.primaryIconEnd ? this.primaryIconEnd : null, "icon-start": this.primaryIconStart ? this.primaryIconStart : null, iconFlipRtl: this.primaryIconFlipRtl ? this.primaryIconFlipRtl : null, loading: this.loading, onClick: this.calciteSplitButtonPrimaryClickHandler, scale: this.scale, splitChild: "primary", theme: this.theme }, this.primaryText), index.h("div", { class: "split-button__divider-container" }, index.h("div", { class: "split-button__divider" })), index.h("calcite-dropdown", { alignment: "end", dir: dir, onClick: this.calciteSplitButtonSecondaryClickHandler, scale: this.scale, theme: this.theme, width: this.scale }, index.h("calcite-button", { appearance: this.appearance, "aria-label": this.dropdownLabel, color: this.color, dir: dir, disabled: this.disabled, "icon-start": this.dropdownIcon, scale: this.scale, slot: "dropdown-trigger", splitChild: "secondary", theme: this.theme }), index.h("slot", null)))));
  }
  get dropdownIcon() {
    return this.dropdownIconType === "chevron"
      ? "chevronDown"
      : this.dropdownIconType === "caret"
        ? "caretDown"
        : this.dropdownIconType === "ellipsis"
          ? "ellipsis"
          : "handle-vertical";
  }
  get el() { return index.getElement(this); }
};
CalciteSplitButton.style = calciteSplitButtonCss;

exports.calcite_split_button = CalciteSplitButton;
