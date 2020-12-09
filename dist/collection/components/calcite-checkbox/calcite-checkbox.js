import { Component, h, Prop, Event, Element, Host, Listen, Watch } from "@stencil/core";
import { guid } from "../../utils/guid";
import { getElementDir } from "../../utils/dom";
export class CalciteCheckbox {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the checkbox. */
    this.checked = false;
    /** True if the checkbox is disabled */
    this.disabled = false;
    /** The focused state of the checkbox. */
    this.focused = false;
    /** The hovered state of the checkbox. */
    this.hovered = false;
    /**
     * True if the checkbox is initially indeterminate,
     * which is independent from its checked state
     * https://css-tricks.com/indeterminate-checkboxes/
     * */
    this.indeterminate = false;
    /** The name of the checkbox input */
    this.name = "";
    /** specify the scale of the checkbox, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private Properties
    //
    //--------------------------------------------------------------------------
    this.checkedPath = "M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";
    this.indeterminatePath = "M4 7h8v2H4z";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.focused = true;
        this.indeterminate = false;
        this.calciteCheckboxChange.emit();
      }
    };
    this.formResetHandler = () => {
      this.checked = this.initialChecked;
    };
    this.nativeLabelClickHandler = (event) => {
      if (!this.el.closest("calcite-label") && event.target.nodeName === "LABEL") {
        const target = event.target;
        if (this.el.id && target.htmlFor === this.el.id) {
          this.toggle();
        }
      }
    };
  }
  checkedWatcher(newChecked) {
    this.input.checked = newChecked;
  }
  disabledChanged(disabled) {
    this.input.disabled = disabled;
  }
  focusedChanged(focused) {
    if (focused && !this.el.hasAttribute("hidden")) {
      this.input.focus();
    }
    else {
      this.input.blur();
    }
  }
  nameChanged(newName) {
    this.input.name = newName;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(event) {
    // This line prevents double-triggering when wrapped inside either a <label> or a <calcite-label>
    // by preventing the browser default behavior, which is to click the label's first input child element
    if (event.target === this.el) {
      event.preventDefault();
    }
    this.toggle();
  }
  mouseenter() {
    this.hovered = true;
  }
  mouseleave() {
    this.hovered = false;
  }
  onInputBlur() {
    this.focused = false;
    this.calciteCheckboxFocusedChange.emit();
  }
  onInputFocus() {
    this.focused = true;
    this.calciteCheckboxFocusedChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.guid = this.el.id || `calcite-checkbox-${guid()}`;
    this.initialChecked = this.checked;
    this.renderHiddenCheckboxInput();
    const form = this.el.closest("form");
    if (form) {
      form.addEventListener("reset", this.formResetHandler);
    }
    document.addEventListener("click", this.nativeLabelClickHandler);
  }
  disconnectedCallback() {
    this.input.parentNode.removeChild(this.input);
    const form = this.el.closest("form");
    if (form) {
      form.removeEventListener("reset", this.formResetHandler);
    }
    document.removeEventListener("click", this.nativeLabelClickHandler);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHiddenCheckboxInput() {
    this.input = document.createElement("input");
    this.checked && this.input.setAttribute("checked", "");
    this.input.disabled = this.disabled;
    this.input.id = `${this.guid}-input`;
    this.input.name = this.name;
    this.input.onblur = this.onInputBlur.bind(this);
    this.input.onfocus = this.onInputFocus.bind(this);
    this.input.style.opacity = "0";
    this.input.style.position = "absolute";
    this.input.style.zIndex = "-1";
    this.input.type = "checkbox";
    if (this.value) {
      this.input.value = this.value;
    }
    this.el.appendChild(this.input);
  }
  render() {
    if (this.el.textContent) {
      return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" },
        h("div", { class: "hasLabel" },
          h("svg", { class: "check-svg", viewBox: "0 0 16 16" },
            h("path", { d: this.getPath() })),
          h("calcite-label", { dir: getElementDir(this.el), "disable-spacing": true, scale: this.scale },
            h("slot", null)))));
    }
    return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" },
      h("svg", { class: "check-svg", viewBox: "0 0 16 16" },
        h("path", { d: this.getPath() })),
      h("slot", null)));
  }
  static get is() { return "calcite-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-checkbox.css"]
  }; }
  static get properties() { return {
    "checked": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The checked state of the checkbox."
      },
      "attribute": "checked",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "True if the checkbox is disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "focused": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The focused state of the checkbox."
      },
      "attribute": "focused",
      "reflect": true,
      "defaultValue": "false"
    },
    "guid": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The id attribute of the checkbox.  When omitted, a globally unique identifier is used."
      },
      "attribute": "guid",
      "reflect": true
    },
    "hovered": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The hovered state of the checkbox."
      },
      "attribute": "hovered",
      "reflect": true,
      "defaultValue": "false"
    },
    "indeterminate": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "True if the checkbox is initially indeterminate,\nwhich is independent from its checked state\nhttps://css-tricks.com/indeterminate-checkboxes/"
      },
      "attribute": "indeterminate",
      "reflect": true,
      "defaultValue": "false"
    },
    "name": {
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
        "text": "The name of the checkbox input"
      },
      "attribute": "name",
      "reflect": true,
      "defaultValue": "\"\""
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
        "text": "specify the scale of the checkbox, defaults to m"
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
        "text": "Determines what theme to use"
      },
      "attribute": "theme",
      "reflect": true
    },
    "value": {
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
        "text": "The value of the checkbox input"
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteCheckboxChange",
      "name": "calciteCheckboxChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the checkbox checked status changes"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteCheckboxFocusedChange",
      "name": "calciteCheckboxFocusedChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the checkbox focused state changes"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "checkedWatcher"
    }, {
      "propName": "disabled",
      "methodName": "disabledChanged"
    }, {
      "propName": "focused",
      "methodName": "focusedChanged"
    }, {
      "propName": "name",
      "methodName": "nameChanged"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "mouseenter",
      "method": "mouseenter",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "mouseleave",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
