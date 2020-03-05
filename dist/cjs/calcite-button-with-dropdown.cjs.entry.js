'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-67746296.js');
const dom = require('./dom-801460f3.js');

const CalciteButtonWithDropdown = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.primaryButtonClicked = core.createEvent(this, "primaryButtonClicked", 7);
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
        const dir = dom.getElementDir(this.el);
        return (core.h(core.Host, { dir: dir }, core.h("div", null, core.h("calcite-button", { color: this.color, scale: this.scale, loading: this.loading, icon: this.primaryIcon, iconPosition: dir === "ltr" ? "start" : "end", disabled: this.disabled, theme: this.theme, onClick: this.primaryButtonClickedHandler }, this.primaryText), core.h("div", { class: "button-dropdown__divider-container" }, core.h("div", { class: "button-dropdown__divider" })), core.h("calcite-dropdown", { alignment: "end", dir: dir, theme: this.theme, scale: this.dropdownScale, width: this.dropdownScale }, core.h("calcite-button", { "aria-label": this.dropdownLabel, slot: "dropdown-trigger", scale: this.scale, color: this.color, disabled: this.disabled, theme: this.theme, icon: "caretDown", "use-text-proportions": this.primaryText }), core.h("slot", null)))));
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
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "color": ["validateColor"],
        "scale": ["validateScale"],
        "theme": ["validateTheme"]
    }; }
    static get style() { return ":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{--calcite-button-light:#f3f3f3;--calcite-button-light-text:#151515;--calcite-button-dark:#353535;--calcite-button-dark-text:#0b0b0b}:host>div{display:-ms-flexbox;display:flex}:host>div>calcite-dropdown>calcite-button{height:100%}:host([color=blue]) .button-dropdown__divider-container{background-color:var(--calcite-ui-blue)}:host([color=blue]):host([theme=dark]) .button-dropdown__divider{background-color:var(--calcite-button-dark-text)}:host([color=red]) .button-dropdown__divider-container{background-color:var(--calcite-ui-red)}:host([color=red]):host([theme=dark]) .button-dropdown__divider{background-color:var(--calcite-button-dark-text)}:host([color=light]) .button-dropdown__divider-container{background-color:var(--calcite-button-light)}:host([color=light]) .button-dropdown__divider{background-color:var(--calcite-button-light-text)}:host([color=dark]) .button-dropdown__divider-container{background-color:var(--calcite-button-dark)}:host([disabled]) .button-dropdown__divider-container{opacity:.4}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}.button-dropdown__divider-container{width:1px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.button-dropdown__divider{width:1px;height:66.666%;display:inline-block;background-color:#fff}"; }
};

exports.calcite_button_with_dropdown = CalciteButtonWithDropdown;
