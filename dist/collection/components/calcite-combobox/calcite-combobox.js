import { Component, h, Host, Prop, State, Listen, Event, Element, Build, Method, Watch } from "@stencil/core";
import { filter } from "../../utils/filter";
import { getElementDir } from "../../utils/dom";
import { debounce } from "lodash-es";
import { getKey } from "../../utils/key";
import { createPopper, updatePopper, CSS as PopperCSS } from "../../utils/popper";
const COMBO_BOX_ITEM = "calcite-combobox-item";
const DEFAULT_PLACEMENT = "bottom-start";
export class CalciteCombobox {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    this.active = false;
    this.disabled = false;
    /** specify the maximum number of combobox items (including nested children) to display before showing the scroller */
    this.maxItems = 0;
    /** specify the scale of the combobox, defaults to m */
    this.scale = "m";
    this.items = [];
    this.selectedItems = [];
    this.visibleItems = [];
    this.textInput = null;
    this.observer = null;
    /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
    this.maxScrollerHeight = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setInactiveIfNotContained = (target) => {
      if (!this.active || this.el.contains(target)) {
        return;
      }
      this.active = false;
    };
    this.setMenuEl = (el) => {
      this.menuEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
    };
    this.inputHandler = (event) => {
      const target = event.target;
      this.filterItems(target.value);
    };
    this.handleInputKeyDown = (event) => {
      if (event.target === this.textInput) {
        const key = getKey(event.key);
        if (event.shiftKey && key === "Tab") {
          return;
        }
        else if (key === "Escape") {
          this.active = false;
        }
        else if (key === "ArrowDown") {
          this.focusFirstItem();
        }
        else if (key === "ArrowUp") {
          this.focusLastItem();
        }
        else {
          this.active = true;
          this.textInput.focus();
        }
      }
    };
    this.filterItems = debounce((value) => {
      const filteredData = filter(this.data, value);
      const values = filteredData.map((item) => item.value);
      this.items.forEach((item) => {
        item.hidden = values.indexOf(item.value) === -1;
        // If item is nested inside another item...
        const { parentItem } = item;
        if (parentItem) {
          // If the parent item is a match, show me.
          if (values.indexOf(parentItem.value) !== -1) {
            item.hidden = false;
          }
          // If I am a match, show my parent.
          if (values.indexOf(item.value) !== -1) {
            parentItem.hidden = false;
          }
        }
      });
      this.visibleItems = this.getVisibleItems();
    }, 100);
    this.comboboxFocusHandler = () => {
      this.active = true;
    };
    this.comboboxBlurHandler = (event) => {
      const relatedTarget = event.relatedTarget;
      this.setInactiveIfNotContained(relatedTarget);
    };
  }
  activeHandler() {
    this.reposition();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    if (Build.isBrowser) {
      this.observer = new MutationObserver(this.updateItems);
    }
    this.createPopper();
  }
  componentWillLoad() {
    this.updateItems();
  }
  componentDidLoad() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.maxScrollerHeight = this.getMaxScrollerHeight(this.items);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyPopper();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper, menuEl } = this;
    const modifiers = this.getModifiers();
    popper
      ? updatePopper({
        el: menuEl,
        modifiers,
        placement: DEFAULT_PLACEMENT,
        popper
      })
      : this.createPopper();
  }
  documentClickHandler(event) {
    const target = event.target;
    this.setInactiveIfNotContained(target);
  }
  calciteComboboxItemChangeHandler(event) {
    this.toggleSelection(event.detail);
  }
  calciteChipDismissHandler(event) {
    var _a;
    this.active = false;
    const value = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
    const comboboxItem = this.items.find((item) => item.value === value);
    if (comboboxItem) {
      this.toggleSelection(comboboxItem, false);
    }
    this.calciteComboboxChipDismiss.emit(event.detail);
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el: menuEl,
      modifiers,
      placement: DEFAULT_PLACEMENT,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  getMaxScrollerHeight(items) {
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    items.forEach((item) => {
      if (itemsToProcess < maxItems && maxItems > 0) {
        maxScrollerHeight += item.offsetHeight;
        itemsToProcess += 1;
        // if item has children items, don't count their height twice
        const children = item.querySelectorAll("calcite-combobox-item");
        children.forEach((child) => {
          maxScrollerHeight -= child.offsetHeight;
        });
      }
    });
    return maxScrollerHeight;
  }
  toggleSelection(item, value = !item.selected) {
    item.selected = value;
    this.selectedItems = this.getSelectedItems();
    this.calciteLookupChange.emit(this.selectedItems);
  }
  getVisibleItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    return this.items.filter((item) => item.selected);
  }
  updateItems() {
    this.items = this.getItems();
    this.data = this.getData();
    this.selectedItems = this.getSelectedItems();
    this.visibleItems = this.getVisibleItems();
  }
  getData() {
    return this.items.map((item) => ({
      value: item.value,
      label: item.textLabel
    }));
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(COMBO_BOX_ITEM));
    return items
      .filter((item) => !item.disabled)
      .map((item) => {
      const { parentElement } = item;
      item.parentItem = parentElement.matches(COMBO_BOX_ITEM)
        ? parentElement
        : null;
      return item;
    });
  }
  calciteComboboxItemKeyEventHandler(event) {
    const { item, event: keyboardEvent } = event.detail;
    const isFirstItem = this.itemIndex(item) === 0;
    const isLastItem = this.itemIndex(item) === this.items.length - 1;
    const shiftKey = keyboardEvent.shiftKey;
    const keyCode = getKey(keyboardEvent.key);
    switch (keyCode) {
      case "Tab":
        if (isFirstItem && shiftKey)
          this.closeCalciteCombobox();
        if (isLastItem && !shiftKey)
          this.closeCalciteCombobox();
        else if (isFirstItem && shiftKey)
          this.textInput.focus();
        else if (shiftKey)
          this.focusPrevItem(item);
        else
          this.focusNextItem(item);
        break;
      case "ArrowDown":
        this.focusNextItem(item);
        break;
      case "ArrowUp":
        this.focusPrevItem(item);
        break;
      case "Home":
        this.focusFirstItem();
        break;
      case "End":
        this.focusLastItem();
        break;
      case "Escape":
        this.closeCalciteCombobox();
        break;
    }
  }
  closeCalciteCombobox() {
    this.textInput.focus();
    this.active = false;
  }
  focusFirstItem() {
    const firstItem = this.items[0];
    firstItem.focus();
  }
  focusLastItem() {
    const lastItem = this.items[this.items.length - 1];
    lastItem.focus();
  }
  focusNextItem(item) {
    const index = this.itemIndex(item);
    const nextItem = this.items[index + 1] || this.items[0];
    nextItem.focus();
  }
  focusPrevItem(item) {
    const index = this.itemIndex(item);
    const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
    prevItem.focus();
  }
  itemIndex(item) {
    return this.items.indexOf(item);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const { active, disabled, el, label, placeholder, scale, selectedItems, maxScrollerHeight } = this;
    const dir = getElementDir(el);
    const listBoxId = "listbox";
    return (h(Host, { active: active, dir: dir },
      h("div", { class: "selections" }, selectedItems.map((item) => {
        return (h("calcite-chip", { dir: dir, dismissible: true, key: item.value, scale: scale, value: item.value }, item.textLabel));
      })),
      h("div", { "aria-expanded": active.toString(), "aria-haspopup": "listbox", "aria-owns": listBoxId, ref: this.setReferenceEl, role: "combobox" },
        h("input", { "aria-autocomplete": "list", "aria-controls": listBoxId, "aria-label": label, disabled: disabled, onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, onKeyDown: this.handleInputKeyDown, placeholder: placeholder, ref: (el) => (this.textInput = el), type: "text" })),
      h("div", { "aria-hidden": (!active).toString(), class: "list-container", ref: this.setMenuEl },
        h("ul", { "aria-label": label, "aria-multiselectable": "true", class: {
            list: true,
            [PopperCSS.animation]: true,
            [PopperCSS.animationActive]: active
          }, id: listBoxId, role: "listbox", style: {
            maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : ""
          } },
          h("slot", null)))));
  }
  static get is() { return "calcite-combobox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-combobox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-combobox.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "maxItems": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the maximum number of combobox items (including nested children) to display before showing the scroller"
      },
      "attribute": "max-items",
      "reflect": false,
      "defaultValue": "0"
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"s\" | \"m\" | \"l\"",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of the combobox, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"light\" | \"dark\"",
        "resolved": "\"dark\" | \"light\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Select theme (light or dark)"
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get states() { return {
    "items": {},
    "selectedItems": {},
    "visibleItems": {}
  }; }
  static get events() { return [{
      "method": "calciteLookupChange",
      "name": "calciteLookupChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteComboboxChipDismiss",
      "name": "calciteComboboxChipDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "reposition": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "documentClickHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "calciteComboboxItemChange",
      "method": "calciteComboboxItemChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteChipDismiss",
      "method": "calciteChipDismissHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteComboboxItemKeyEvent",
      "method": "calciteComboboxItemKeyEventHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
