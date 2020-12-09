'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');

const calciteTileSelectCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-shadow:0 0 0 1px var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;max-width:300px;padding:0.75rem;position:relative;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;vertical-align:top;z-index:10}:host(:hover){z-index:20;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-border-1);box-shadow:0 0 0 1px var(--calcite-ui-border-1)}:host([checked]){z-index:30;-webkit-box-shadow:0 0 0 1px var(--calcite-ui-blue-1);box-shadow:0 0 0 1px var(--calcite-ui-blue-1)}:host([focused]){z-index:30}:host([show-input=none]:hover){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-blue-1);box-shadow:0 0 0 1px var(--calcite-ui-blue-1)}:host([show-input=none][focused]){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-blue-1), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-blue-1);box-shadow:0 0 0 1px var(--calcite-ui-blue-1), inset 0 0 0 2px var(--calcite-ui-foreground-1), inset 0 0 0 5px var(--calcite-ui-blue-1)}:host([width=full]){max-width:none;display:block}:host([show-input=none]) ::slotted(calcite-checkbox),:host([show-input=none]) ::slotted(calcite-radio-button){opacity:0;position:absolute}:host([heading]:not([icon]):not([description])){-ms-flex-align:center;align-items:center}:host([show-input=left][icon][heading][description]),:host([show-input=left]:not([icon])[heading]:not([description])){display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([show-input=left][icon][heading][description]) ::slotted(calcite-checkbox),:host([show-input=left][icon][heading][description]) ::slotted(calcite-radio-button),:host([show-input=left]:not([icon])[heading]:not([description])) ::slotted(calcite-checkbox),:host([show-input=left]:not([icon])[heading]:not([description])) ::slotted(calcite-radio-button){-ms-flex-order:0;order:0}:host([show-input=left][icon][heading][description]) calcite-tile,:host([show-input=left]:not([icon])[heading]:not([description])) calcite-tile{-ms-flex-order:1;order:1}:host([show-input=left][icon][heading]:not([description])) ::slotted(calcite-checkbox),:host([show-input=left][icon][heading]:not([description])) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;left:0.75rem}:host([show-input=right][icon][heading]) ::slotted(calcite-checkbox),:host([show-input=right][icon][heading]) ::slotted(calcite-radio-button){position:absolute;top:0.75rem;right:0.75rem}:host([show-input=right][heading]:not([icon]):not([description])){display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host([show-input=right][heading]:not([icon]):not([description])) ::slotted(calcite-checkbox),:host([show-input=right][heading]:not([icon]):not([description])) ::slotted(calcite-radio-button){justify-self:flex-end}:host([hidden]){display:none}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}";

const CalciteTileSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the tile select. */
    this.checked = false;
    /** The disabled state of the tile select. */
    this.disabled = false;
    /** The focused state of the tile select. */
    this.focused = false;
    /** The hidden state of the tile select. */
    this.hidden = false;
    /** The name of the tile select.  This name will appear in form submissions as either a radio or checkbox identifier based on the `type` property. */
    this.name = "";
    /** The side of the tile that the radio or checkbox appears. */
    this.showInput = "left";
    /** The theme of the tile select. */
    this.theme = "light";
    /** The selection mode of the tile select: radio (single) or checkbox (multiple). */
    this.type = "radio";
    /** specify the width of the tile, defaults to auto */
    this.width = "auto";
  }
  checkedChanged(newChecked) {
    this.input.checked = newChecked;
  }
  nameChanged(newName) {
    this.input.name = newName;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteCheckboxChangeEvent(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.checked = checkbox.checked;
    }
  }
  calciteCheckboxFocusedChangeEvent(event) {
    const checkbox = event.target;
    if (checkbox === this.input) {
      this.focused = checkbox.focused;
    }
  }
  calciteRadioButtonCheckedChangeEvent(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.checked = radioButton.checked;
    }
    event.stopPropagation();
  }
  calciteRadioButtonFocusedChangeEvent(event) {
    const radioButton = event.target;
    if (radioButton === this.input) {
      this.focused = radioButton.focused;
    }
  }
  click(event) {
    const target = event.target;
    const targets = ["calcite-tile", "calcite-tile-select"];
    if (targets.includes(target.localName)) {
      this.input.click();
    }
  }
  mouseenter() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = true;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = true;
    }
  }
  mouseleave() {
    if (this.input.localName === "calcite-radio-button") {
      this.input.hovered = false;
    }
    if (this.input.localName === "calcite-checkbox") {
      this.input.hovered = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.renderInput();
  }
  disconnectedCallback() {
    this.input.parentNode.removeChild(this.input);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderInput() {
    this.input = document.createElement(this.type === "radio" ? "calcite-radio-button" : "calcite-checkbox");
    this.input.checked = this.checked;
    this.input.disabled = this.disabled;
    this.input.hidden = this.hidden;
    this.input.id = this.el.id;
    if (this.name) {
      this.input.name = this.name;
    }
    this.input.theme = this.theme;
    if (this.value) {
      this.input.value = this.value;
    }
    this.el.insertAdjacentElement("beforeend", this.input);
  }
  render() {
    return (index.h(index.Host, null, index.h("calcite-tile", { active: this.checked, description: this.description, embed: true, heading: this.heading, icon: this.icon }), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "name": ["nameChanged"]
  }; }
};
CalciteTileSelect.style = calciteTileSelectCss;

exports.calcite_tile_select = CalciteTileSelect;
