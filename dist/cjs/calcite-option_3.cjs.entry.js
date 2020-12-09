'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');

const CalciteOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteOptionChange = index.createEvent(this, "calciteOptionChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents the option from being selected.
     */
    this.disabled = false;
    this.mutationObserver = new MutationObserver(() => {
      this.ensureTextContentDependentProps();
      this.calciteOptionChange.emit();
    });
  }
  handlePropChange(_newValue, _oldValue, propName) {
    if (propName === "label" || propName === "value") {
      this.ensureTextContentDependentProps();
    }
    this.calciteOptionChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  ensureTextContentDependentProps() {
    const { el: { textContent } } = this;
    if (!this.label || this.label === this.internallySetLabel) {
      this.label = textContent;
      this.internallySetLabel = textContent;
    }
    if (!this.value || this.value === this.internallySetValue) {
      this.value = textContent;
      this.internallySetValue = textContent;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.ensureTextContentDependentProps();
    this.mutationObserver.observe(this.el, {
      characterData: true,
      subtree: true,
      attributeFilter: ["label", "value"]
    });
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, null, index.h("slot", null, this.label)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["handlePropChange"],
    "label": ["handlePropChange"],
    "selected": ["handlePropChange"],
    "value": ["handlePropChange"]
  }; }
};

const CalciteOptionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteOptionGroupChange = index.createEvent(this, "calciteOptionGroupChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents selection from any of its associated options.
     */
    this.disabled = false;
  }
  handlePropChange() {
    this.calciteOptionGroupChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, null, index.h("div", null, this.label), index.h("slot", null)));
  }
  static get watchers() { return {
    "disabled": ["handlePropChange"],
    "label": ["handlePropChange"]
  }; }
};

const CSS = {
  icon: "icon",
  iconContainer: "icon-container",
  select: "select"
};

const calciteSelectCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;position:relative;width:var(--select-width);--calcite-select-spacing-end:2rem}:host([scale=s]){--calcite-select-font-size:0.75rem;--calcite-select-spacing:0.5rem}:host([scale=m]){--calcite-select-font-size:0.875rem;--calcite-select-spacing:0.75rem}:host([scale=l]){--calcite-select-font-size:1.125rem;--calcite-select-spacing:1rem}:host([width=auto]){--select-width:auto}:host([width=half]){--select-width:50%}:host([width=full]){--select-width:100%}.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--calcite-ui-foreground-1);border:solid 1px var(--calcite-ui-border-1);border-right:none;border-radius:0;color:var(--calcite-ui-text-2);cursor:pointer;font-family:inherit;font-size:var(--calcite-select-font-size);margin:0;padding:var(--calcite-select-spacing);padding-right:var(--calcite-select-spacing-end);width:100%;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.select:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}:host([dir=rtl]) .select{padding-left:var(--calcite-select-spacing-end);padding-right:var(--calcite-select-spacing);border-right:solid 1px var(--calcite-ui-border-1);border-left:none}.icon-container{-ms-flex-align:center;align-items:center;background-color:transparent;border:solid 1px var(--calcite-ui-border-1);border-left:none;color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;padding:0 var(--calcite-spacing-half);pointer-events:none;position:absolute;right:0;bottom:0;top:0}:host([dir=rtl]) .icon-container{border-left:solid 1px var(--calcite-ui-border-1);border-right:none;right:unset;left:0}.select:focus~.icon-container{border-color:transparent}";

function isOption(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION";
}
function isOptionGroup(optionOrGroup) {
  return optionOrGroup.tagName === "CALCITE-OPTION-GROUP";
}
const CalciteSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteSelectChange = index.createEvent(this, "calciteSelectChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When true, it prevents the option from being selected.
     */
    this.disabled = false;
    /**
     * The component scale.
     */
    this.scale = "m";
    /**
     * The component theme.
     */
    this.theme = "light";
    /**
     * The component width.
     */
    this.width = "auto";
    this.componentToNativeEl = new Map();
    this.mutationObserver = new MutationObserver(() => this.populateInternalSelect());
    this.handleInternalSelectChange = () => {
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
      requestAnimationFrame(() => this.emitChangeEvent());
    };
    this.populateInternalSelect = () => {
      const optionsAndGroups = Array.from(this.el.children);
      this.clearInternalSelect();
      optionsAndGroups.forEach((optionOrGroup) => this.selectEl.append(this.toNativeElement(optionOrGroup)));
    };
    this.storeSelectRef = (node) => {
      this.selectEl = node;
      this.populateInternalSelect();
      const selected = this.selectEl.selectedOptions[0];
      this.selectFromNativeOption(selected);
    };
    this.emitChangeEvent = () => {
      this.calciteSelectChange.emit();
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { el } = this;
    this.mutationObserver.observe(el, {
      subtree: true,
      childList: true
    });
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    dom.focusElement(this.selectEl);
  }
  handleOptionOrGroupChange(event) {
    event.stopPropagation();
    const optionOrGroup = event.target;
    const nativeEl = this.componentToNativeEl.get(optionOrGroup);
    if (!nativeEl) {
      return;
    }
    this.updateNativeElements(optionOrGroup, nativeEl);
    if (isOption(optionOrGroup) && optionOrGroup.selected) {
      this.deselectAllExcept(optionOrGroup);
    }
  }
  handleLabelFocus(event) {
    const { requestedInput, labelEl } = event.detail;
    const { el } = this;
    if (labelEl.contains(el) || (requestedInput && requestedInput === el.getAttribute("id"))) {
      this.setFocus();
      event.stopImmediatePropagation();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateNativeElements(optionOrGroup, nativeOptionOrGroup) {
    nativeOptionOrGroup.disabled = optionOrGroup.disabled;
    nativeOptionOrGroup.label = optionOrGroup.label;
    if (isOption(optionOrGroup)) {
      const option = nativeOptionOrGroup;
      option.selected = optionOrGroup.selected;
      option.value = optionOrGroup.value;
    }
  }
  clearInternalSelect() {
    this.componentToNativeEl.forEach((value) => value.remove());
    this.componentToNativeEl.clear();
  }
  selectFromNativeOption(nativeOption) {
    if (!nativeOption) {
      return;
    }
    let futureSelected;
    this.componentToNativeEl.forEach((nativeOptionOrGroup, optionOrGroup) => {
      if (isOption(optionOrGroup) && nativeOptionOrGroup === nativeOption) {
        optionOrGroup.selected = true;
        futureSelected = optionOrGroup;
        this.deselectAllExcept(optionOrGroup);
      }
    });
    if (futureSelected) {
      requestAnimationFrame(() => (this.selectedOption = futureSelected));
    }
  }
  toNativeElement(optionOrGroup) {
    if (isOption(optionOrGroup)) {
      const option = document.createElement("option");
      option.disabled = optionOrGroup.disabled;
      option.label = optionOrGroup.label;
      option.selected = optionOrGroup.selected;
      option.value = optionOrGroup.value;
      this.componentToNativeEl.set(optionOrGroup, option);
      return option;
    }
    if (isOptionGroup(optionOrGroup)) {
      const group = document.createElement("optgroup");
      group.disabled = optionOrGroup.disabled;
      group.label = optionOrGroup.label;
      Array.from(optionOrGroup.children).forEach((option) => {
        const nativeOption = this.toNativeElement(option);
        group.append(nativeOption);
        this.componentToNativeEl.set(optionOrGroup, nativeOption);
      });
      this.componentToNativeEl.set(optionOrGroup, group);
      return group;
    }
    throw new Error("unsupported element child provided");
  }
  deselectAllExcept(except) {
    this.el.querySelectorAll("calcite-option").forEach((option) => {
      if (option === except) {
        return;
      }
      option.selected = false;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChevron() {
    return (index.h("div", { class: { [CSS.iconContainer]: true } }, index.h("calcite-icon", { class: CSS.icon, icon: "chevron-down", scale: "s" })));
  }
  render() {
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir }, index.h("select", { "aria-label": this.label, class: { [CSS.select]: true }, disabled: this.disabled, onChange: this.handleInternalSelectChange, ref: this.storeSelectRef }, index.h("slot", null)), this.renderChevron()));
  }
  get el() { return index.getElement(this); }
};
CalciteSelect.style = calciteSelectCss;

exports.calcite_option = CalciteOption;
exports.calcite_option_group = CalciteOptionGroup;
exports.calcite_select = CalciteSelect;
