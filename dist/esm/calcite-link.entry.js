import { r as registerInstance, h, H as Host, g as getElement } from './index-8fd57462.js';
import { g as getElementDir, f as focusElement } from './dom-d9ba1da4.js';

const calciteLinkCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline;--calcite-blue-accessible:#00619b;--calcite-link-blue-underline:rgba(0, 97, 155, 0.4)}:host([theme=dark]){--calcite-blue-accessible:#00A0FF;--calcite-link-blue-underline:rgba(0, 160, 255, 0.4)}:host a,:host span{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-decoration:none;border-radius:0;border:none;line-height:inherit;font-size:inherit;font-family:inherit;-webkit-appearance:none;cursor:pointer;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-link--icon{-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.4}:host .calcite-link--icon.icon-start{margin-right:0.5rem}:host([dir=rtl]) .calcite-link--icon.icon-start{margin-right:0;margin-left:0.5rem}:host .calcite-link--icon.icon-end{margin-left:0.5rem}:host([dir=rtl]) .calcite-link--icon.icon-end{margin-left:0;margin-right:0.5rem}:host([user-select]) span,:host([user-select]) a{-webkit-user-select:text;-ms-user-select:text;-moz-user-select:text;user-select:text}:host span,:host a{display:inline;padding:0;border:none;color:var(--calcite-blue-accessible);line-height:inherit;white-space:initial;background-color:transparent;position:relative;background-image:-webkit-gradient(linear, left top, left bottom, from(currentColor), to(currentColor)), -webkit-gradient(linear, left top, left bottom, from(var(--calcite-link-blue-underline)), to(var(--calcite-link-blue-underline)));background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position:0% 100%, 100% 100%;background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px;-webkit-transition:all 0.15s ease-in-out, background-size 0.3s ease-in-out;transition:all 0.15s ease-in-out, background-size 0.3s ease-in-out}:host span:hover,:host span:focus,:host a:hover,:host a:focus{color:var(--calcite-ui-blue-1);background-size:100% 1px, 100% 1px}:host span:hover .calcite-link--icon,:host span:focus .calcite-link--icon,:host a:hover .calcite-link--icon,:host a:focus .calcite-link--icon{fill:var(--calcite-ui-blue-1)}:host span:active,:host a:active{color:var(--calcite-blue-accessible);background-size:100% 2px, 100% 2px}:host([dir=rtl]) span,:host([dir=rtl]) a{background-position:100% 100%, 100% 100%}";

const CalciteLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Allows the text to be selectable */
    this.userSelect = true;
    /** the node type of the rendered child element */
    this.childElType = "span";
    this.storeTagRef = (el) => {
      this.childEl = el;
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.childElType = this.href ? "a" : "span";
  }
  render() {
    const dir = getElementDir(this.el);
    const iconStartEl = (h("calcite-icon", { class: "calcite-link--icon icon-start", dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: "calcite-link--icon icon-end", dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const attributes = this.getAttributes();
    const Tag = this.childElType;
    const role = this.childElType === "span" ? "link" : null;
    const tabIndex = this.disabled ? -1 : this.childElType === "span" ? 0 : null;
    return (h(Host, { dir: dir, role: "presentation" }, h(Tag, Object.assign({}, attributes, { href: Tag === "a" && this.href, ref: this.storeTagRef, role: role, tabIndex: tabIndex }), this.iconStart ? iconStartEl : null, h("slot", null), this.iconEnd ? iconEndEl : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    focusElement(this.childEl);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = ["dir", "icon-end", "icon-start", "id", "theme", "user-select"];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  get el() { return getElement(this); }
};
CalciteLink.style = calciteLinkCss;

export { CalciteLink as calcite_link };
