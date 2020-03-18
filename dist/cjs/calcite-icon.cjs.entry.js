'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-67746296.js');
const dom = require('./dom-801460f3.js');

const CSS = {
    icon: "icon",
    mirrored: "mirrored"
};

/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */
const requestCache = {};
const scaleToPx = {
    s: 16,
    m: 24,
    l: 32
};
async function fetchIcon({ icon, scale, filled }) {
    const size = scaleToPx[scale];
    const id = `${normalizeIconName(icon)}${size}${filled ? "F" : ""}`;
    return new Promise(resolve => {
        if (requestCache[id]) {
            return resolve(requestCache[id]);
        }
        fetch(core.getAssetPath(`./assets/${id}.json`))
            .then(resp => resp.json())
            .then(path => {
            resolve(path);
        })
            .catch(_ => {
            console.error(`"${id}" is not a valid calcite-ui-icon name`);
            resolve("");
        });
    });
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */
function normalizeIconName(name) {
    const numberLeadingName = !isNaN(Number(name.charAt(0)));
    const parts = name.split("-");
    if (parts.length === 1) {
        return numberLeadingName ? `i${name}` : name;
    }
    return parts
        .map((part, index) => {
        if (index === 0) {
            return numberLeadingName ? `i${part.toUpperCase()}` : part;
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
    })
        .join("");
}

const CalciteIcon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * When true, the icon will be filled.
         */
        this.filled = false;
        /**
         * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
         */
        this.icon = null;
        /**
         * When true, the icon will be mirrored when the element direction is 'rtl'.
         */
        this.mirrored = false;
        /**
         * Icon scale. Can be "s" | "m" | "l".
         */
        this.scale = "m";
        this.visible = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.waitUntilVisible(() => {
            this.visible = true;
            this.loadIconPathData();
        });
    }
    disconnectedCallback() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
        }
    }
    async componentWillLoad() {
        this.loadIconPathData();
    }
    render() {
        const { el, mirrored, pathData, scale, textLabel } = this;
        const dir = dom.getElementDir(el);
        const size = scaleToPx[scale];
        const semantic = !!textLabel;
        return (core.h(core.Host, { "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, core.h("svg", { class: {
                [CSS.mirrored]: dir === "rtl" && mirrored,
                "svg": true
            }, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", height: size, width: size, viewBox: `0 0 ${size} ${size}` }, core.h("path", { d: pathData }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    async loadIconPathData() {
        const { filled, icon, scale, visible } = this;
        if ( !icon || !visible) {
            return;
        }
        this.pathData = await fetchIcon({ icon, scale, filled });
    }
    waitUntilVisible(callback) {
        if (
            typeof window === "undefined" ||
            !window.IntersectionObserver) {
            callback();
            return;
        }
        this.intersectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.intersectionObserver.disconnect();
                    this.intersectionObserver = null;
                    callback();
                }
            });
        }, { rootMargin: "50px" });
        this.intersectionObserver.observe(this.el);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "icon": ["loadIconPathData"],
        "filled": ["loadIconPathData"],
        "size": ["loadIconPathData"]
    }; }
    static get style() { return ":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([mirror]){-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"; }
};

exports.calcite_icon = CalciteIcon;
