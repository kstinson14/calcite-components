import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-30c05663.js';
import { E as ENTER, S as SPACE } from './keys-2ed3d0b9.js';
var CSS = {
    container: "container",
    header: "header",
    footer: "footer",
    title: "title",
    subtitle: "subtitle",
    thumbnailWrapper: "thumbnail-wrapper"
};
var CalciteCard = /** @class */ (function () {
    function CalciteCard(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
        this.loading = false;
        /** Indicates whether the card is selected. */
        this.selected = false;
        /** Indicates whether the card is selectable. */
        this.selectable = false;
        this.calciteCardSelected = createEvent(this, "calciteCardSelected", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    CalciteCard.prototype.connectedCallback = function () {
    };
    CalciteCard.prototype.render = function () {
        var _a;
        return (h(Host, null, h("div", { class: "calcite-card-container" }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { class: "calcite-card-loader", "is-active": true }))) : null, h("section", { class: (_a = {}, _a[CSS.container] = true, _a), "aria-busy": this.loading }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteCard.prototype.cardSelectClick = function () {
        this.selectCard();
    };
    CalciteCard.prototype.cardSelectKeyDown = function (e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.selectCard();
                e.preventDefault();
                break;
        }
    };
    CalciteCard.prototype.selectCard = function () {
        this.selected = !this.selected;
        this.calciteCardSelected.emit({
            element: this.el,
            selected: this.selected
        });
    };
    CalciteCard.prototype.renderThumbnail = function () {
        var hasThumbnail = this.el.querySelector("[slot=" + "thumbnail" /* thumbnail */ + "]");
        return hasThumbnail ? (h("div", { class: CSS.thumbnailWrapper }, h("slot", { name: "thumbnail" /* thumbnail */ }))) : null;
    };
    CalciteCard.prototype.renderCheckbox = function () {
        var _this = this;
        return (h("div", { class: "card-checkbox-wrapper", onClick: function () { return _this.cardSelectClick(); }, onKeyDown: function (e) { return _this.cardSelectKeyDown(e); } }, h("calcite-checkbox", { checked: this.selected })));
    };
    CalciteCard.prototype.renderHeader = function () {
        var title = this.el.querySelector("[slot=" + "title" /* title */ + "]");
        var subtitle = this.el.querySelector("[slot=" + "subtitle" /* subtitle */ + "]");
        var hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS.header }, h("slot", { name: "title" /* title */ }), h("slot", { name: "subtitle" /* subtitle */ }))) : null;
    };
    CalciteCard.prototype.renderFooter = function () {
        var leadingFooter = this.el.querySelector("[slot=" + "footer-leading" /* footerLeading */ + "]");
        var trailingFooter = this.el.querySelector("[slot=" + "footer-trailing" /* footerTrailing */ + "]");
        var hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS.footer }, h("slot", { name: "footer-leading" /* footerLeading */ }), h("slot", { name: "footer-trailing" /* footerTrailing */ }))) : null;
    };
    Object.defineProperty(CalciteCard.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteCard, "style", {
        get: function () { return ":host([hidden]){display:none}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent}:host .calcite-card-container:hover{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16);z-index:1}:host([loading]) .calcite-card-container :not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host([loading]) .calcite-card-loader{position:absolute;left:0;right:0;z-index:9}:host .footer,:host .header{padding:.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:.75rem;-ms-flex-direction:row;flex-direction:row}:host .card-content{padding:0 .75rem;color:var(--calcite-ui-text-3);font-size:.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue)}::slotted([slot=title]),slot[name=title]::slotted(*){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:.9375rem;line-height:1.5}::slotted([slot=subtitle]),slot[name=subtitle]::slotted(*){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:.375rem;font-size:.875rem;line-height:1.5}img::slotted([slot=thumbnail]),slot[name=thumbnail]::slotted(img){max-width:100%;min-width:100%}::slotted([slot=footer-leading]),slot[name=footer-leading]::slotted(*){-webkit-margin-end:auto;margin-inline-end:auto}::slotted([slot=footer-leading]),::slotted([slot=footer-trailing]),slot[name=footer-leading]::slotted(*),slot[name=footer-trailing]::slotted(*){-ms-flex-item-align:center;align-self:center;font-size:.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .card-checkbox-wrapper{position:absolute;top:.375rem;right:.375rem;margin:0;padding:0}:host-context([dir=rtl]) .card-checkbox-wrapper{left:.375rem;right:auto}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteCard;
}());
export { CalciteCard as calcite_card };
