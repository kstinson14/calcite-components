import { h, Host } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
export class CalciteButtonWithDropdown {
    constructor() {
        /** specify the color of the control, defaults to blue */
        this.color = "blue";
        /** select theme (light or dark), defaults to light */
        this.theme = "light";
        /** specify the scale of the control, defaults to m */
        this.scale = "m";
        /** optionally add a calcite-loader component to the control,
          disabling interaction. with the primary button */
        this.loading = false;
        this.primaryButtonClickedHandler = (e) => this.primaryButtonClicked.emit(e);
    }
    validateColor() {
        let color = ["blue", "red", "dark", "light"];
        if (!color.includes(this.color))
            this.color = "blue";
    }
    validateScale() {
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    validateTheme() {
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
    }
    connectedCallback() {
        this.validateColor();
        this.validateScale();
        this.validateTheme();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir },
            h("div", null,
                h("calcite-button", { color: this.color, scale: this.scale, loading: this.loading, icon: this.primaryIcon, iconPosition: dir === "ltr" ? "start" : "end", disabled: this.disabled, theme: this.theme, onClick: this.primaryButtonClickedHandler }, this.primaryText),
                h("div", { class: "button-dropdown__divider-container" },
                    h("div", { class: "button-dropdown__divider" })),
                h("calcite-dropdown", { alignment: "end", dir: dir, theme: this.theme, scale: this.dropdownScale, width: this.dropdownScale },
                    h("calcite-button", { "aria-label": this.dropdownLabel, slot: "dropdown-trigger", scale: this.scale, color: this.color, disabled: this.disabled, theme: this.theme, icon: "caretDown", "use-text-proportions": this.primaryText }),
                    h("slot", null)))));
    }
    get dropdownScale() {
        const scaleLookup = {
            xs: "s",
            s: "s",
            m: "m",
            l: "l",
            xl: "l"
        };
        return scaleLookup[this.scale];
    }
    static get is() { return "calcite-button-with-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-button-with-dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-button-with-dropdown.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"blue\" | \"dark\" | \"light\" | \"red\"",
                "resolved": "\"blue\" | \"dark\" | \"light\" | \"red\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "specify the color of the control, defaults to blue"
            },
            "attribute": "color",
            "reflect": true,
            "defaultValue": "\"blue\""
        },
        "theme": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"light\" | \"dark\"",
                "resolved": "\"dark\" | \"light\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "select theme (light or dark), defaults to light"
            },
            "attribute": "theme",
            "reflect": true,
            "defaultValue": "\"light\""
        },
        "scale": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "Scale",
                "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\"",
                "references": {
                    "Scale": {
                        "location": "import",
                        "path": "../../interfaces/common"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "specify the scale of the control, defaults to m"
            },
            "attribute": "scale",
            "reflect": true,
            "defaultValue": "\"m\""
        },
        "primaryText": {
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
                "text": "text for primary action button"
            },
            "attribute": "primary-text",
            "reflect": true
        },
        "primaryIcon": {
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
                "text": "optionally pass an icon to display on the primary button - accepts Calcite UI icon names"
            },
            "attribute": "primary-icon",
            "reflect": true
        },
        "dropdownLabel": {
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
                "text": "aria label for overflow button"
            },
            "attribute": "dropdown-label",
            "reflect": true
        },
        "loading": {
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
                "text": "optionally add a calcite-loader component to the control,\ndisabling interaction. with the primary button"
            },
            "attribute": "loading",
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
                "text": "is the control disabled"
            },
            "attribute": "disabled",
            "reflect": true
        }
    }; }
    static get events() { return [{
            "method": "primaryButtonClicked",
            "name": "primaryButtonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "fired when the modal begins the open animation"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "color",
            "methodName": "validateColor"
        }, {
            "propName": "scale",
            "methodName": "validateScale"
        }, {
            "propName": "theme",
            "methodName": "validateTheme"
        }]; }
}
