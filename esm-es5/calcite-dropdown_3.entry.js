import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './core-b5a9209a.js';
import { S as SPACE, E as ENTER, c as ESCAPE, T as TAB, D as DOWN, U as UP, H as HOME, b as END } from './keys-d0494fa5.js';
import { g as getElementDir, a as getElementTheme, b as getElementProp } from './dom-e9ddd61f.js';
import { g as guid } from './guid-cb609d41.js';
var CalciteDropdown = /** @class */ (function () {
    function CalciteDropdown(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdrown, defaults to left */
        this.alignment = "left";
        /** specify the theme of the dropdown, defaults to light */
        this.theme = "light";
        /** specify the scale of dropdrown, defaults to m */
        this.scale = "m";
        /** specify whether the dropdown is opened by hover or click of the trigger element */
        this.type = "click";
        /** created list of dropdown items */
        this.items = [];
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        /** unique id for dropdown */
        /** @internal */
        this.dropdownId = "calcite-dropdown-" + guid();
        this.sortItems = function (items) { return items
            .sort(function (a, b) { return a.position - b.position; })
            .concat.apply([], _this.items.map(function (item) { return item.items; })); };
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDropdown.prototype.connectedCallback = function () {
        // validate props
        var alignment = ["left", "right", "center"];
        if (!alignment.includes(this.alignment))
            this.alignment = "left";
        var theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        var type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    };
    CalciteDropdown.prototype.componentDidLoad = function () {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    };
    CalciteDropdown.prototype.render = function () {
        var dir = getElementDir(this.el);
        var expanded = this.active.toString();
        return (h(Host, { dir: dir, active: this.active, id: this.dropdownId }, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": expanded }), h("div", { class: "calcite-dropdown-wrapper", role: "menu" }, h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDropdown.prototype.openDropdown = function (e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            this.openCalciteDropdown(e);
            e.preventDefault();
        }
    };
    CalciteDropdown.prototype.closeCalciteDropdownOnClick = function (e) {
        if (this.active && e.target.offsetParent.id !== this.dropdownId)
            this.closeCalciteDropdown();
    };
    CalciteDropdown.prototype.closeCalciteDropdownOnEvent = function () {
        this.closeCalciteDropdown();
    };
    CalciteDropdown.prototype.keyDownHandler = function (e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (e.keyCode) {
                    case SPACE:
                    case ENTER:
                        this.openCalciteDropdown(e);
                        break;
                    case ESCAPE:
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (e.keyCode === ESCAPE || (e.shiftKey && e.keyCode === TAB)) {
                this.closeCalciteDropdown();
            }
        }
    };
    CalciteDropdown.prototype.mouseoverHandler = function (e) {
        if (this.type === "hover") {
            this.openCalciteDropdown(e);
        }
    };
    CalciteDropdown.prototype.mouseoffHandler = function () {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    };
    CalciteDropdown.prototype.calciteDropdownItemKeyEvent = function (item) {
        var e = item.detail.item;
        // handle edge
        var itemToFocus = e.target.nodeName !== "A" ? e.target : e.target.parentNode;
        var isFirstItem = this.itemIndex(itemToFocus) === 0;
        var isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (e.keyCode) {
            case TAB:
                if (isLastItem && !e.shiftKey)
                    this.closeCalciteDropdown();
                else if (isFirstItem && e.shiftKey)
                    this.closeCalciteDropdown();
                else if (e.shiftKey)
                    this.focusPrevItem(itemToFocus);
                else
                    this.focusNextItem(itemToFocus);
                break;
            case DOWN:
                this.focusNextItem(itemToFocus);
                break;
            case UP:
                this.focusPrevItem(itemToFocus);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
        }
    };
    CalciteDropdown.prototype.calciteDropdownMouseover = function (item) {
        var itemToFocus = item.detail.target;
        itemToFocus.focus();
    };
    CalciteDropdown.prototype.registerCalciteDropdownGroup = function (e) {
        var items = {
            items: e.detail.items,
            position: e.detail.position
        };
        this.items.push(items);
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteDropdown.prototype.closeCalciteDropdown = function () {
        this.active = false;
        this.trigger.focus();
    };
    CalciteDropdown.prototype.focusFirstItem = function () {
        var firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    };
    CalciteDropdown.prototype.focusLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    };
    CalciteDropdown.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    };
    CalciteDropdown.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    };
    CalciteDropdown.prototype.itemIndex = function (e) {
        return this.items.indexOf(e);
    };
    CalciteDropdown.prototype.getFocusableElement = function (item) {
        var target = item && item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        target.focus();
    };
    CalciteDropdown.prototype.openCalciteDropdown = function (e) {
        var _this = this;
        this.active = !this.active;
        // if invoked by key, focus item, and accomodate animation time
        if (!e.detail && e.type !== "mouseenter") {
            setTimeout(function () { return _this.focusFirstItem(); }, 50);
        }
    };
    Object.defineProperty(CalciteDropdown.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteDropdown, "style", {
        get: function () { return ":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;max-height:100vh;visibility:visible;pointer-events:auto}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:12.5rem;background:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);pointer-events:none}:host([alignment=right]) .calcite-dropdown-wrapper,:host([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=right]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:0;margin-right:auto;margin-left:auto}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteDropdown;
}());
var CalciteDropdownGroup = /** @class */ (function () {
    function CalciteDropdownGroup(hostRef) {
        registerInstance(this, hostRef);
        /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
         none (no active items), defaults to single */
        this.selectionMode = "single";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** unique id for dropdown group */
        this.dropdownGroupId = "calcite-dropdown-group-" + guid();
        this.sortItems = function (items) { return items.sort(function (a, b) { return a.position - b.position; }).map(function (a) { return a.item; }); };
        this.calciteDropdownItemHasChanged = createEvent(this, "calciteDropdownItemHasChanged", 7);
        this.registerCalciteDropdownGroup = createEvent(this, "registerCalciteDropdownGroup", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.connectedCallback = function () {
        // validate props
        var selectionMode = ["multi", "single", "none"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "single";
    };
    CalciteDropdownGroup.prototype.componentDidLoad = function () {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.registerCalciteDropdownGroup.emit({
            items: this.items,
            position: this.groupPosition,
            groupId: this.dropdownGroupId
        });
    };
    CalciteDropdownGroup.prototype.render = function () {
        var theme = getElementTheme(this.el);
        var scale = getElementProp(this.el, "scale", "m");
        var groupTitle = this.groupTitle ? (h("span", { class: "dropdown-title" }, this.groupTitle)) : null;
        return (h(Host, { theme: theme, scale: scale }, groupTitle, h("slot", null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.registerCalciteDropdownItem = function (event) {
        var item = {
            item: event.target,
            position: event.detail.position
        };
        this.items.push(item);
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
    };
    CalciteDropdownGroup.prototype.updateActiveItemOnChange = function (event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemHasChanged.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.getGroupPosition = function () {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    };
    Object.defineProperty(CalciteDropdownGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteDropdownGroup, "style", {
        get: function () { return ":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:.875rem;line-height:1.5}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteDropdownGroup;
}());
var CalciteDropdownItem = /** @class */ (function () {
    function CalciteDropdownItem(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.dropdownItemId = "calcite-dropdown-item-" + guid();
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "single");
        this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.calciteDropdownItemMouseover = createEvent(this, "calciteDropdownItemMouseover", 7);
        this.calciteDropdownItemSelected = createEvent(this, "calciteDropdownItemSelected", 7);
        this.closeCalciteDropdown = createEvent(this, "closeCalciteDropdown", 7);
        this.registerCalciteDropdownItem = createEvent(this, "registerCalciteDropdownItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDropdownItem.prototype.componentDidLoad = function () {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition
        });
    };
    CalciteDropdownItem.prototype.render = function () {
        var dir = getElementDir(this.el);
        var theme = getElementTheme(this.el);
        var scale = getElementProp(this.el, "scale", "m");
        if (!this.href) {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active.toString() }, h("slot", null)));
        }
        else {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active.toString(), isLink: true }, h("a", { href: this.href, title: this.linkTitle }, h("slot", null))));
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDropdownItem.prototype.onClick = function () {
        this.emitRequestedItem();
    };
    CalciteDropdownItem.prototype.onMouseover = function (e) {
        this.calciteDropdownItemMouseover.emit(e);
    };
    CalciteDropdownItem.prototype.keyDownHandler = function (e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem();
                if (e.path && e.path[0].nodeName === "A")
                    e.click();
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
        e.preventDefault();
    };
    CalciteDropdownItem.prototype.registerCalciteDropdownGroup = function (event) {
        this.currentDropdownGroup = event.detail.groupId;
    };
    CalciteDropdownItem.prototype.updateActiveItemOnChange = function (event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.determineActiveItem();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteDropdownItem.prototype.determineActiveItem = function () {
        switch (this.selectionMode) {
            case "multi":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    };
    CalciteDropdownItem.prototype.emitRequestedItem = function () {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup
        });
        this.closeCalciteDropdown.emit();
    };
    CalciteDropdownItem.prototype.getItemPosition = function () {
        var group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    };
    Object.defineProperty(CalciteDropdownItem.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteDropdownItem, "style", {
        get: function () { return "\@charset \"UTF-8\";:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host([scale=s]){--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{display:block;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host(:active),:host(:focus),:host(:hover){background-color:var(--calcite-ui-foreground-hover);color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-press)}:host:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host(:active):before,:host(:focus):before,:host(:hover):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]){color:var(--calcite-ui-text-1);font-weight:500}:host([active]):before{opacity:1;color:var(--calcite-ui-blue)}:host([islink]){padding:0}:host([islink]):before{display:none}:host([islink]) a{display:block;position:relative;padding:var(--calcite-dropdown-item-padding);color:var(--calcite-ui-text-3);text-decoration:none;outline:none}:host([islink]) a:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host([islink]) a:active,:host([islink]) a:focus,:host([islink]) a:hover{background-color:var(--calcite-ui-foreground-hover);text-decoration:none}:host([islink]) a:active:before,:host([islink]) a:focus:before,:host([islink]) a:hover:before{opacity:1}:host([islink]) a:active{background-color:var(--calcite-ui-foreground-press)}:host([islink][active]) a{color:var(--calcite-ui-text-1);font-weight:500}:host([islink][active]) a:before{opacity:1;color:var(--calcite-ui-blue)}:host([islink][dir=rtl]) a{padding:var(--calcite-dropdown-item-padding)}:host([islink][dir=rtl]) a:before{left:unset;right:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteDropdownItem;
}());
export { CalciteDropdown as calcite_dropdown, CalciteDropdownGroup as calcite_dropdown_group, CalciteDropdownItem as calcite_dropdown_item };
