import { r as registerInstance, h, H as Host, g as getElement } from './core-30c05663.js';
import { g as guid } from './guid-cb609d41.js';
import { H as HOST_CSS } from './dom-d48df009.js';
import { d as defaultOffsetDistance, u as updatePopper, c as createPopper } from './popper-6b6d56a3.js';

const CSS = {
    container: "container",
    arrow: "arrow"
};

const CalciteTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Offset the position of the popover away from the reference element.
         */
        this.offsetDistance = defaultOffsetDistance;
        /**
         * Offset the position of the popover along the reference element.
         */
        this.offsetSkidding = 0;
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        this._referenceElement = this.getReferenceElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-tooltip-${guid()}`;
        };
        this.addReferenceAria = () => {
            const { _referenceElement } = this;
            if (_referenceElement &&
                !_referenceElement.hasAttribute("aria-describedby")) {
                _referenceElement.setAttribute("aria-describedby", this.getId());
            }
        };
        this.addReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.addEventListener("mouseenter", this.show);
            _referenceElement.addEventListener("mouseleave", this.hide);
            _referenceElement.addEventListener("focus", this.show);
            _referenceElement.addEventListener("blur", this.hide);
        };
        this.removeReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeEventListener("mouseenter", this.show);
            _referenceElement.removeEventListener("mouseleave", this.hide);
            _referenceElement.removeEventListener("focus", this.show);
            _referenceElement.removeEventListener("blur", this.hide);
        };
        this.show = () => {
            this.open = true;
        };
        this.hide = () => {
            this.open = false;
        };
    }
    offsetDistanceOffsetHandler() {
        this.reposition();
    }
    offsetSkiddingHandler() {
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.createPopper();
        }
        else {
            this.destroyPopper();
        }
    }
    placementHandler() {
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferenceListeners();
        this._referenceElement = this.getReferenceElement();
        this.addReferenceListeners();
        this.addReferenceAria();
        this.createPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.addReferenceListeners();
        this.addReferenceAria();
        this.createPopper();
    }
    componentDidUnload() {
        this.removeReferenceListeners();
        this.destroyPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async reposition() {
        const { popper, el, placement } = this;
        const modifiers = this.getModifiers();
        popper
            ? updatePopper({
                el,
                modifiers,
                placement,
                popper
            })
            : this.createPopper();
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getModifiers() {
        const { arrowEl, offsetDistance, offsetSkidding } = this;
        const arrowModifier = {
            name: "arrow",
            enabled: true,
            options: {
                element: arrowEl
            }
        };
        const offsetModifier = {
            name: "offset",
            enabled: true,
            options: {
                offset: [offsetSkidding, offsetDistance]
            }
        };
        return [arrowModifier, offsetModifier];
    }
    createPopper() {
        this.destroyPopper();
        const { el, open, placement, _referenceElement: referenceEl } = this;
        const modifiers = this.getModifiers();
        this.popper = createPopper({
            el,
            modifiers,
            open,
            placement,
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
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { _referenceElement, open } = this;
        const displayed = _referenceElement && open;
        return (h(Host, { role: "tooltip", class: {
                [HOST_CSS.hydratedInvisible]: !displayed
            }, "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, h("div", { class: CSS.arrow, ref: arrowEl => (this.arrowEl = arrowEl) }), h("div", { class: CSS.container }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get style() { return ":host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.arrow,.arrow:before{position:absolute;width:8px;height:8px;z-index:-1}.arrow:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:.8125rem;line-height:1.5}"; }
};

export { CalciteTooltip as calcite_tooltip };
