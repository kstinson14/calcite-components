import { Component, Element, Event, Listen, Host, h, Prop, Watch } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
export class CalciteLabel {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the status of the label and any child input / input messages */
    this.status = "idle";
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
  }
  disabledWatcher() {
    if (this.disabled)
      this.setDisabledControls();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick({ target }) {
    if (target === this.el || target === this.labelEl || target === this.spanEl) {
      const forAttr = this.el.getAttribute("for");
      this.calciteLabelFocus.emit({
        labelEl: this.el,
        interactedEl: target,
        requestedInput: forAttr
      });
      const inputForThisLabel = forAttr
        ? document.getElementById(forAttr)
        : this.el.querySelector("input");
      if ((inputForThisLabel && inputForThisLabel.nodeName.startsWith("CALCITE-")) ||
        (inputForThisLabel && inputForThisLabel.nodeName === "INPUT" && target === this.el)) {
        inputForThisLabel.click();
      }
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = ["disabled", "id", "layout", "scale", "status", "theme"];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const status = ["invalid", "valid", "idle"];
    if (!status.includes(this.status))
      this.status = "idle";
    const layout = ["inline", "inline-space-between", "default"];
    if (!layout.includes(this.layout))
      this.layout = "default";
    const scale = ["s", "m", "l"];
    if (!scale.includes(this.scale))
      this.scale = "m";
  }
  componentDidLoad() {
    this.labelEl.childNodes.forEach((childNode) => {
      if (childNode.nodeName === "#text" && childNode.textContent.trim().length > 0) {
        this.spanEl = document.createElement("span");
        this.spanEl.classList.add("calcite-label-text");
        this.spanEl.appendChild(document.createTextNode(childNode.textContent.trim()));
        childNode.parentNode.replaceChild(this.spanEl, childNode);
      }
    });
    if (this.disabled)
      this.setDisabledControls();
  }
  render() {
    const attributes = this.getAttributes();
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir },
      h("label", Object.assign({}, attributes, { ref: (el) => (this.labelEl = el) }),
        h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setDisabledControls() {
    var _a;
    (_a = this.labelEl) === null || _a === void 0 ? void 0 : _a.childNodes.forEach((item) => {
      if (item.nodeName.includes("CALCITE")) {
        item.setAttribute("disabled", "");
      }
    });
  }
  static get is() { return "calcite-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-label.css"]
  }; }
  static get properties() { return {
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"invalid\" | \"valid\" | \"idle\"",
        "resolved": "\"idle\" | \"invalid\" | \"valid\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the status of the label and any child input / input messages"
      },
      "attribute": "status",
      "reflect": true,
      "defaultValue": "\"idle\""
    },
    "for": {
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
        "text": "The id of the input associated with the label"
      },
      "attribute": "for",
      "reflect": true
    },
    "scale": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"s\" | \"m\" | \"l\"",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of the input, defaults to m"
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
        "text": "specify theme of the label and its any child input / input messages"
      },
      "attribute": "theme",
      "reflect": true
    },
    "layout": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"inline\" | \"inline-space-between\" | \"default\"",
        "resolved": "\"default\" | \"inline\" | \"inline-space-between\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "is the wrapped element positioned inline with the label slotted text"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"default\""
    },
    "disableSpacing": {
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
        "text": "Turn off spacing around the label"
      },
      "attribute": "disable-spacing",
      "reflect": false
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
        "text": "is the label disabled"
      },
      "attribute": "disabled",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteLabelFocus",
      "name": "calciteLabelFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "FocusRequest",
        "resolved": "FocusRequest",
        "references": {
          "FocusRequest": {
            "location": "import",
            "path": "../../interfaces/Label"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "disabledWatcher"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
