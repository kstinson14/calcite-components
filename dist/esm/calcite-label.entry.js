import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd57462.js';
import { g as getElementDir } from './dom-d9ba1da4.js';

const calciteLabelCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}[dir=rtl].sc-calcite-label-h{text-align:right}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom) 0;line-height:1.3}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:0.75rem}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:0.875rem}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:1.125rem}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}.sc-calcite-label-h[layout=default]>.sc-calcite-label-s>.calcite-label-text{margin-bottom:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text{margin-left:0.75rem;margin-right:0.75rem}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text:first-child,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text:first-child{margin-left:0;margin-right:0.75rem}.sc-calcite-label-h[layout=inline]>.sc-calcite-label-s>.calcite-label-text:last-child,.sc-calcite-label-h[layout=inline-space-between]>.sc-calcite-label-s>.calcite-label-text:last-child{margin-left:0.75rem;margin-right:0}.sc-calcite-label-h[dir=rtl][layout=inline] .sc-calcite-label-s>.calcite-label-text:first-child,.sc-calcite-label-h[dir=rtl][layout=inline-space-between] .sc-calcite-label-s>.calcite-label-text:first-child{margin-left:0.75rem;margin-right:0}.sc-calcite-label-h[dir=rtl][layout=inline] .sc-calcite-label-s>.calcite-label-text:last-child,.sc-calcite-label-h[dir=rtl][layout=inline-space-between] .sc-calcite-label-s>.calcite-label-text:last-child{margin-left:0;margin-right:0.75rem}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:0.4}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-red-1)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label,.sc-calcite-label-h[disable-spacing] .sc-calcite-label-s>.calcite-label-text{margin:0}";

const CalciteLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteLabelFocus = createEvent(this, "calciteLabelFocus", 7);
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
    return (h(Host, { dir: dir }, h("label", Object.assign({}, attributes, { ref: (el) => (this.labelEl = el) }), h("slot", null))));
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
CalciteLabel.style = calciteLabelCss;

export { CalciteLabel as calcite_label };
