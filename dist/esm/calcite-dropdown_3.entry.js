import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './core-30c05663.js';
import { g as guid } from './guid-cb609d41.js';
import { c as ESCAPE, E as ENTER, S as SPACE, T as TAB, a as END, H as HOME, U as UP, D as DOWN } from './keys-2ed3d0b9.js';
import { b as getElementProp } from './dom-0361c8d2.js';

const CalciteDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdown, defaults to start */
        this.alignment = "start";
        /** specify the scale of dropdown, defaults to m */
        this.scale = "m";
        /** specify the width of dropdown, defaults to m */
        this.width = "m";
        /** specify whether the dropdown is opened by hover or click of the trigger element */
        this.type = "click";
        /** created list of dropdown items */
        this.items = [];
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        /** unique id for dropdown */
        /** @internal */
        this.dropdownId = `calcite-dropdown-${guid()}`;
        this.sortItems = (items) => items
            .sort((a, b) => a.position - b.position)
            .concat.apply([], this.items.map(item => item.items));
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let alignment = ["start", "center", "end"];
        if (!alignment.includes(this.alignment))
            this.alignment = "start";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["s", "m", "l"];
        if (!width.includes(this.width))
            this.width = "m";
        let type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    }
    componentDidLoad() {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    }
    render() {
        const expanded = this.active.toString();
        return (h(Host, { active: this.active, id: this.dropdownId }, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": expanded }), h("div", { class: "calcite-dropdown-wrapper", role: "menu" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    openDropdown(e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            this.openCalciteDropdown(e);
            e.preventDefault();
        }
    }
    closeCalciteDropdownOnClick(e) {
        if (this.active && e.target.offsetParent.id !== this.dropdownId)
            this.closeCalciteDropdown();
    }
    closeCalciteDropdownOnEvent() {
        this.closeCalciteDropdown();
    }
    keyDownHandler(e) {
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
    }
    mouseoverHandler(e) {
        if (this.type === "hover") {
            this.openCalciteDropdown(e);
        }
    }
    mouseoffHandler() {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    }
    calciteDropdownItemKeyEvent(item) {
        let e = item.detail.item;
        // handle edge
        let itemToFocus = e.target.nodeName !== "A" ? e.target : e.target.parentNode;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
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
    }
    calciteDropdownMouseover(item) {
        const itemToFocus = item.detail.target;
        itemToFocus.focus();
    }
    registerCalciteDropdownGroup(e) {
        const items = {
            items: e.detail.items,
            position: e.detail.position
        };
        this.items.push(items);
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    closeCalciteDropdown() {
        this.active = false;
        this.trigger.focus();
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    getFocusableElement(item) {
        const target = item && item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        target.focus();
    }
    openCalciteDropdown(e) {
        this.active = !this.active;
        // if invoked by key, focus item, and accomodate animation time
        if (!e.detail && e.type !== "mouseenter") {
            setTimeout(() => this.focusFirstItem(), 50);
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]){display:none}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;max-height:100vh;visibility:visible;pointer-events:auto}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);pointer-events:none}:host([alignment=end]) .calcite-dropdown-wrapper,:host-context([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper{right:50%;left:0;-webkit-transform:translateX(50%);transform:translateX(50%)}"; }
};

const CalciteDropdownGroup = class {
    constructor(hostRef) {
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
        this.dropdownGroupId = `calcite-dropdown-group-${guid()}`;
        this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map(a => a.item);
        this.calciteDropdownItemHasChanged = createEvent(this, "calciteDropdownItemHasChanged", 7);
        this.registerCalciteDropdownGroup = createEvent(this, "registerCalciteDropdownGroup", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let selectionMode = ["multi", "single", "none"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "single";
    }
    componentDidLoad() {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.registerCalciteDropdownGroup.emit({
            items: this.items,
            position: this.groupPosition,
            groupId: this.dropdownGroupId
        });
    }
    render() {
        const groupTitle = this.groupTitle ? (h("span", { class: "dropdown-title" }, this.groupTitle)) : null;
        return (h(Host, null, groupTitle, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    registerCalciteDropdownItem(event) {
        const item = {
            item: event.target,
            position: event.detail.position
        };
        this.items.push(item);
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemHasChanged.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getGroupPosition() {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]){display:none}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:.875rem;line-height:1.5}"; }
};

const CalciteDropdownItem = class {
    constructor(hostRef) {
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
        this.dropdownItemId = `calcite-dropdown-item-${guid()}`;
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
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const attributes = this.getAttributes();
        const scale = getElementProp(this.el, "scale", "m");
        const iconScale = scale === "s" || scale === "m" ? "s" : "m";
        const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", icon: this.iconStart, scale: iconScale }));
        const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", icon: this.iconEnd, scale: iconScale }));
        const slottedContent = this.iconStart && this.iconEnd ? ([iconStartEl, h("slot", null), iconEndEl]) : this.iconStart ? ([iconStartEl, h("slot", null)]) : this.iconEnd ? ([h("slot", null), iconEndEl]) : (h("slot", null));
        const contentEl = !this.href ? (slottedContent) : (h("a", Object.assign({}, attributes), slottedContent));
        return (h(Host, { tabindex: "0", role: "menuitem", "selection-mode": this.selectionMode, "aria-selected": this.active.toString(), isLink: this.href }, this.selectionMode === "multi" ? (h("calcite-icon", { class: "dropdown-item-check-icon", scale: "s", icon: "check" })) : null, contentEl));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    onMouseover(e) {
        this.calciteDropdownItemMouseover.emit(e);
    }
    keyDownHandler(e) {
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
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
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
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup
        });
        this.closeCalciteDropdown.emit();
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = [
            "icon-start",
            "icon-end",
            "active",
            "hasText",
            "isLink",
            "dir",
            "id",
            "theme"
        ];
        return Array.from(this.el.attributes)
            .filter(a => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host,:host:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a,:host([islink]) a:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host([islink]) a:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}:host(:active),:host(:focus),:host(:hover){background-color:var(--calcite-ui-foreground-hover);color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-press)}:host(:active):before,:host(:focus):before,:host(:hover):before{opacity:1}:host-context([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-blue)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-blue)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([selection-mode=none]:not([islink])),:host([selection-mode=none][isLink]) a{padding-left:1rem}:host([dir=rtl][selection-mode=none]:not([islink])),:host([dir=rtl][selection-mode=none][isLink]) a{padding-right:1rem}:host .dropdown-item-check-icon{position:absolute;left:.8571428571rem;opacity:0;-webkit-transform:scale(.9);transform:scale(.9);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host-context([dir=rtl]) .dropdown-item-check-icon{left:unset;right:.8571428571rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-text-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-blue);opacity:1}:host .dropdown-item-icon-start{margin-right:1rem}:host .dropdown-item-icon-end{margin-left:auto;padding-left:1rem}:host-context([dir=rtl]) .dropdown-item-icon-start,:host-context([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}:host-context([dir=rtl]) .dropdown-item-icon-end{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}"; }
};

export { CalciteDropdown as calcite_dropdown, CalciteDropdownGroup as calcite_dropdown_group, CalciteDropdownItem as calcite_dropdown_item };
