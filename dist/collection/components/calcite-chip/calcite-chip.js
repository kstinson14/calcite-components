import { Component, h, Host, Prop, Event, Element } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { CSS, TEXT } from "./resources";
export class CalciteChip {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "grey";
    /** Optionally show a button the user can click to dismiss the chip */
    this.dismissible = false;
    /** specify the scale of the chip, defaults to m */
    this.scale = "m";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = (event) => {
      event.preventDefault();
      this.calciteChipDismiss.emit(this.el);
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    const iconScale = this.scale !== "l" ? "s" : "m";
    const iconEl = (h("calcite-icon", { class: "calcite-chip--icon", dir: dir, flipRtl: this.iconFlipRtl, icon: this.icon, scale: iconScale }));
    const closeButton = (h("button", { class: CSS.close, onClick: this.closeClickHandler, title: TEXT.close },
      h("calcite-icon", { icon: "x", scale: iconScale })));
    return (h(Host, { dir: dir },
      h("slot", { name: "chip-image" }),
      this.icon ? iconEl : null,
      h("span", null,
        h("slot", null)),
      this.dismissible ? closeButton : null));
  }
  static get is() { return "calcite-chip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-chip.css"]
  }; }
  static get properties() { return {
    "appearance": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"solid\" | \"clear\"",
        "resolved": "\"clear\" | \"solid\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance style of the button, defaults to solid."
      },
      "attribute": "appearance",
      "reflect": true,
      "defaultValue": "\"solid\""
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"blue\" | \"red\" | \"yellow\" | \"green\" | \"grey\"",
        "resolved": "\"blue\" | \"green\" | \"grey\" | \"red\" | \"yellow\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the color of the button, defaults to blue"
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "\"grey\""
    },
    "dismissible": {
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
        "text": "Optionally show a button the user can click to dismiss the chip"
      },
      "attribute": "dismissible",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "optionally pass an icon to display - accepts Calcite UI icon names"
      },
      "attribute": "icon",
      "reflect": true
    },
    "iconFlipRtl": {
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
        "text": "flip the icon in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true
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
        "text": "specify the scale of the chip, defaults to m"
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
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "calciteChipDismiss",
      "name": "calciteChipDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the dismiss button is clicked"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
