'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');
const key = require('./key-1b30c9c3.js');

/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    let matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push(...traverseSlot($child));
        }
        else {
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === `none`
        || $elem.style.opacity === `0`
        || $elem.style.visibility === `hidden`
        || $elem.style.visibility === `collapse`;
    // If offsetParent is null we can assume that the element is hidden
    // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
    //|| $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}

const calciteModalCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101;--calcite-modal-title-padding:12px 16px;--calcite-modal-title-text:20px;--calcite-modal-content-padding:16px;--calcite-modal-content-text:16px;--calcite-modal-close-padding:12px;--calcite-modal-footer-padding:12px}:host([scale=s]){--calcite-modal-title-padding:8px 12px;--calcite-modal-title-text:18px;--calcite-modal-content-padding:12px;--calcite-modal-content-text:14px;--calcite-modal-close-padding:8px;--calcite-modal-footer-padding:8px}:host([scale=l]){--calcite-modal-title-padding:16px 20px;--calcite-modal-title-text:26px;--calcite-modal-content-padding:20px;--calcite-modal-content-text:18px;--calcite-modal-close-padding:16px;--calcite-modal-footer-padding:16px}.scrim{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{-webkit-box-shadow:var(--calcite-shadow-2-press);box-shadow:var(--calcite-shadow-2-press);-webkit-box-sizing:border-box;box-sizing:border-box;z-index:102;float:none;text-align:left;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;opacity:0;visibility:hidden;pointer-events:none;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0);background-color:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);margin:1.5rem;width:100%}.modal__close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.modal__close.modal__close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([is-active]){visibility:visible !important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}:host([is-active]) .modal{pointer-events:auto;visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([dir=rtl]) .modal{text-align:right}.modal__header{background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.modal__close{padding:var(--calcite-modal-close-padding);margin:0;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:300ms;transition-delay:300ms;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-ui-text-1);outline:none;cursor:pointer;border-radius:0 var(--calcite-border-radius) 0 0}.modal__close calcite-icon{pointer-events:none;vertical-align:-2px}.modal__close:hover,.modal__close:focus{background-color:var(--calcite-ui-foreground-2)}.modal__close:active{background-color:var(--calcite-ui-foreground-3)}:host([dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) 0 0 0}.modal__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-modal-title-padding);-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:400;font-size:var(--calcite-modal-title-text);color:var(--calcite-ui-text-1)}.modal__content{position:relative;padding:0;height:100%;overflow:auto;max-height:calc(100vh - 12rem);overflow-y:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.modal__content--spaced{padding:var(--calcite-modal-content-padding)}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text);line-height:1.5}:host([background-color=grey]) .modal__content{background-color:var(--calcite-ui-background)}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:justify;justify-content:space-between;padding:var(--calcite-modal-footer-padding);margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 var(--calcite-border-radius) var(--calcite-border-radius);width:100%;background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);z-index:2}.modal__footer--hide-back .modal__back,.modal__footer--hide-secondary .modal__secondary{display:none}.modal__back{display:block;margin-right:auto}:host([dir=rtl]) .modal__back{margin-left:auto;margin-right:unset}.modal__secondary{display:block;margin:0 0.375rem}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=s]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s]) .modal__header,:host([width=s]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=m]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m]) .modal__header,:host([width=m]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=l]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l]) .modal__header,:host([width=l]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95);height:100%;max-height:100%;width:100%;max-width:100%;margin:0}:host([fullscreen]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:100%}:host([fullscreen]) .modal__header,:host([fullscreen]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([is-active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([is-active][fullscreen]) .modal__header{border-radius:0}:host([is-active][fullscreen]) .modal__footer{border-radius:0}:host([docked]) .modal{height:auto !important}:host([docked]) .modal__content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .modal__close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked][dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-top:4px solid var(--calcite-ui-red-1)}:host([color=blue]) .modal{border-top:4px solid var(--calcite-ui-blue-1)}:host([color=red]) .modal__header,:host([color=blue]) .modal__header{border-radius:var(--calcite-border-radius)}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.2019rem;line-height:1.5}}@media screen and (max-width: 860px) and (max-width: 859px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.1305rem}}@media screen and (max-width: 860px) and (max-width: 479px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.0625rem}}@media screen and (max-width: 860px){.modal__title{padding:0.375rem 1.0125rem}}@media screen and (max-width: 860px){.modal__close{padding:0.75rem}}@media screen and (max-width: 860px){.modal__content--spaced{padding:1.0125rem}}@media screen and (max-width: 860px){.modal__footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.modal__footer{-ms-flex-direction:column;flex-direction:column}.modal__back,.modal__secondary{margin:0;margin-bottom:0.375rem}}";

function isCalciteFocusable(el) {
  return typeof el.setFocus === "function" || isFocusable(el);
}
function getFocusableElements(el) {
  return queryShadowRoot(el, isHidden, isCalciteFocusable);
}
const CalciteModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteModalOpen = index.createEvent(this, "calciteModalOpen", 7);
    this.calciteModalClose = index.createEvent(this, "calciteModalClose", 7);
    /** Optionally pass a function to run before close */
    this.beforeClose = () => Promise.resolve();
    /** Aria label for the close button */
    this.intlClose = "Close";
    /** specify the scale of modal, defaults to m */
    this.scale = "m";
    /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
    this.width = "m";
    /** Background color of modal content */
    this.backgroundColor = "white";
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.active = false;
        this.isActive = false;
        dom.focusElement(this.previousActiveElement);
        document.documentElement.classList.remove("overflow-hidden");
        setTimeout(() => this.calciteModalClose.emit(), 300);
      });
    };
    this.focusFirstElement = () => {
      dom.focusElement(this.closeButtonEl);
    };
    this.focusLastElement = () => {
      const focusableElements = getFocusableElements(this.el).filter((el) => !el.getAttribute("data-focus-fence"));
      if (focusableElements.length > 0) {
        dom.focusElement(focusableElements[focusableElements.length - 1]);
      }
      else {
        dom.focusElement(this.closeButtonEl);
      }
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.active) {
      this.open();
    }
  }
  render() {
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { "aria-modal": "true", dir: dir, "is-active": this.isActive, role: "dialog" }, index.h("calcite-scrim", { class: "scrim", theme: "dark" }), this.renderStyle(), index.h("div", { class: "modal" }, index.h("div", { "data-focus-fence": "true", onFocus: this.focusLastElement, tabindex: "0" }), index.h("div", { class: "modal__header" }, this.renderCloseButton(), index.h("header", { class: "modal__title" }, index.h("slot", { name: "header" }))), index.h("div", { class: {
        modal__content: true,
        "modal__content--spaced": !this.noPadding
      }, ref: (el) => (this.modalContent = el) }, index.h("slot", { name: "content" })), this.renderFooter(), index.h("div", { "data-focus-fence": "true", onFocus: this.focusFirstElement, tabindex: "0" }))));
  }
  renderFooter() {
    return this.el.querySelector("[slot=back], [slot=secondary], [slot=primary]") ? (index.h("div", { class: "modal__footer" }, index.h("span", { class: "modal__back" }, index.h("slot", { name: "back" })), index.h("span", { class: "modal__secondary" }, index.h("slot", { name: "secondary" })), index.h("span", { class: "modal__primary" }, index.h("slot", { name: "primary" })))) : null;
  }
  renderCloseButton() {
    return !this.disableCloseButton ? (index.h("button", { "aria-label": this.intlClose, class: "modal__close", onClick: this.close, ref: (el) => (this.closeButtonEl = el), title: this.intlClose }, index.h("calcite-icon", { icon: "x", scale: "l" }))) : null;
  }
  renderStyle() {
    const hasCustomWidth = !isNaN(parseInt(`${this.width}`));
    return hasCustomWidth ? (index.h("style", null, `
        .modal {
          max-width: ${this.width}px;
        }
        @media screen and (max-width: ${this.width}px) {
          .modal {
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
            margin: 0;
            border-radius: 0;
          }
          .modal__content {
            flex: 1 1 auto;
            max-height: unset;
          }
          .modal__header,
          .modal__footer {
            flex: inherit;
          }
        }
      `)) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    if (this.active && !this.disableEscape && key.getKey(e.key) === "Escape") {
      this.close();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Focus first interactive element */
  async focusElement(el) {
    if (el) {
      dom.focusElement(el);
      return;
    }
    const focusableElements = getFocusableElements(this.el);
    if (focusableElements.length > 0) {
      dom.focusElement(focusableElements[0]);
    }
    else {
      dom.focusElement(this.closeButtonEl);
    }
  }
  /** Set the scroll top of the modal content */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async toggleModal(value, oldValue) {
    if (value !== oldValue) {
      if (value) {
        this.open();
      }
      else if (!value) {
        this.close();
      }
    }
  }
  /** Open the modal */
  open() {
    this.previousActiveElement = document.activeElement;
    this.isActive = true;
    // wait for the modal to open, then handle focus.
    setTimeout(() => {
      this.focusElement(this.firstFocus);
      this.calciteModalOpen.emit();
    }, 300);
    document.documentElement.classList.add("overflow-hidden");
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["toggleModal"]
  }; }
};
CalciteModal.style = calciteModalCss;

exports.calcite_modal = CalciteModal;
