'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-67746296.js');

const CSS = {
    page: "page",
    selected: "is-selected",
    previous: "previous",
    next: "next",
    disabled: "is-disabled",
    ellipsis: "ellipsis",
    ellipsisStart: "ellipsis--start",
    ellipsisEnd: "ellipsis--end"
};
const TEXT = {
    nextLabel: "next",
    previousLabel: "previous"
};

const maxPagesDisplayed = 5;
const CalcitePagination = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Change between foreground colors or background colors for container background */
        this.backgroundStyle = "foregroundColor";
        /** starting selected index */
        this.num = 1;
        /** starting number of the pagination */
        this.start = 1;
        /** title of the next button */
        this.textLabelNext = TEXT.nextLabel;
        /** title of the previous button */
        this.textLabelPrevious = TEXT.previousLabel;
        /** ending number of the pagination */
        this.total = 2;
        this.selectedIndex = this.num;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.previousClicked = () => {
            this.previousPage();
        };
        this.nextClicked = () => {
            this.nextPage();
        };
        this.calcitePaginationUpdate = core.createEvent(this, "calcitePaginationUpdate", 7);
    }
    numWatchHandler(newValue) {
        this.selectedIndex = newValue;
    }
    selectedIndexWatchHandler() {
        this.calcitePaginationUpdate.emit({
            start: this.start,
            total: this.total,
            num: this.selectedIndex
        });
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /** When called, selected page will increment by 1.
     */
    async nextPage() {
        this.selectedIndex = Math.min(this.total, this.selectedIndex + 1);
    }
    /** When called, selected page will decrement by 1.
     */
    async previousPage() {
        this.selectedIndex = Math.max(this.start, this.selectedIndex - 1);
    }
    /** Set selected page to a specific page number. Will not go below start or above total.
     */
    async setPage(num) {
        this.selectedIndex = Math.max(this.start, Math.min(this.total, num));
    }
    showLeftEllipsis() {
        return (this.selectedIndex - this.start) > 3;
    }
    showRightEllipsis() {
        return (this.total - this.selectedIndex) > 3;
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderPages() {
        let pages = [];
        let currentNum;
        let end;
        if (this.total <= maxPagesDisplayed) {
            currentNum = this.start + 1;
            end = this.total - 1;
        }
        else {
            if (this.selectedIndex < maxPagesDisplayed) {
                currentNum = this.start + 1;
                end = this.start + 4;
            }
            else {
                if (this.selectedIndex + 3 >= this.total) {
                    currentNum = this.total - 4;
                    end = this.total - 1;
                }
                else {
                    currentNum = this.selectedIndex - 1;
                    end = this.selectedIndex + 1;
                }
            }
        }
        while (currentNum <= end) {
            pages.push(currentNum);
            currentNum++;
        }
        return pages.map(page => this.renderPage(page));
    }
    renderPage(num) {
        return (core.h("a", { class: { [CSS.page]: true, [CSS.selected]: (num === this.selectedIndex) }, onClick: () => {
                this.selectedIndex = num;
            } }, num));
    }
    renderLeftEllipsis() {
        if (this.total > maxPagesDisplayed && this.showLeftEllipsis()) {
            return (core.h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, core.h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    renderRightEllipsis() {
        if (this.total > maxPagesDisplayed && this.showRightEllipsis()) {
            return (core.h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, core.h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    render() {
        return (core.h(core.Host, { class: this.backgroundStyle }, core.h("a", { class: { [CSS.previous]: true, [CSS.disabled]: this.selectedIndex <= 1 }, title: this.textLabelPrevious, onClick: this.previousClicked }, core.h("calcite-icon", { scale: "s", icon: "chevronLeft" })), this.renderPage(this.start), this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.total), core.h("a", { class: { [CSS.next]: true, [CSS.disabled]: this.selectedIndex >= this.total }, title: this.textLabelNext, onClick: this.nextClicked }, core.h("calcite-icon", { scale: "s", icon: "chevronRight" }))));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "num": ["numWatchHandler"],
        "selectedIndex": ["selectedIndexWatchHandler"]
    }; }
    static get style() { return ":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;background-color:var(--calcite-ui-foreground);-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host(.backgroundColor){background-color:var(--calcite-ui-background)}.next,.page,.previous{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:3px solid transparent;border-bottom:3px solid transparent;color:var(--calcite-ui-text-3);cursor:pointer}.next:hover,.page:hover,.previous:hover{color:var(--calcite-ui-text-1);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue)}.next,.previous{padding:.75em 1em}.next:hover,.previous:hover{color:var(--calcite-ui-blue);background-color:var(--calcite-ui-foreground-hover)}.next:active,.previous:active{background-color:var(--calcite-ui-foreground-press)}.next.is-disabled,.previous.is-disabled{background-color:transparent}.next.is-disabled>svg,.previous.is-disabled>svg{opacity:.3}.next{margin-right:0}.ellipsis,.page{padding:.75em 1em}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}"; }
};

exports.calcite_pagination = CalcitePagination;
