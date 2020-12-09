'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');
const key = require('./key-1b30c9c3.js');
const popper = require('./popper-1cc46810.js');

/**
 * List of supported country codes
 * @private
 */
const supportedLocales = [
  "ar",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-CH",
  "el",
  "en",
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "nb",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
/**
 * Get supported locale code from raw user input
 * Exported for testing purposes.
 * @private
 */
function getSupportedLocale(lang = "") {
  if (supportedLocales.indexOf(lang) > -1) {
    return lang;
  }
  else {
    const base = lang.split("-")[0];
    if (supportedLocales.indexOf(base) > -1) {
      return base;
    }
    else {
      return "en";
    }
  }
}
/**
 * CLDR cache.
 * Exported for testing purposes.
 * @private
 */
const translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 * @private
 */
const requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 * @public
 */
async function getLocaleData(lang) {
  const locale = getSupportedLocale(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch(index.getAssetPath(`./calcite-date-nls/${locale}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}

/**
 * Check if date is within a min and max
 */
function inRange(date, min, max) {
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}
/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 */
function dateFromRange(date, min, max) {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min;
  }
  if (afterMax) {
    return max;
  }
  return date;
}
/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 */
function dateFromISO(iso8601) {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  return date;
}
/**
 * Return first portion of ISO string (YYYY-mm-dd)
 */
function dateToISO(date) {
  if (typeof date === "string") {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return "";
}
/**
 * Check if two dates are the same day, month, year
 */
function sameDate(d1, d2) {
  return (d1 instanceof Date &&
    d2 instanceof Date &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear());
}
/**
 * Get a date one month in the past
 */
function prevMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  // date doesn't exist in new month, use last day
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}
/**
 * Get a date one month in the future
 */
function nextMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  // date doesn't exist in new month, use last day
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}
/**
 * Translate a number into a given locals numeral system
 */
function localizeNumber(num, localeData) {
  return String(num)
    .split("")
    .map((i) => localeData.numerals[i])
    .join("");
}
/**
 * Calculate actual number from localized string
 */
function parseNumber(str, localeData) {
  const numerals = "0123456789";
  return parseInt(str
    .split("")
    .map((i) => numerals[localeData.numerals.indexOf(i)])
    .filter((num) => num)
    .join(""));
}
/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 */
function parseDateString(str, localeData) {
  const { separator, unitOrder } = localeData;
  const order = getOrder(unitOrder);
  const values = replaceArabicNumerals(str).split(separator);
  return {
    day: parseInt(values[order.indexOf("d")]),
    month: parseInt(values[order.indexOf("m")]) - 1,
    year: parseInt(values[order.indexOf("y")])
  };
}
/**
 * Convert eastern arbic numerals
 */
function replaceArabicNumerals(str = "") {
  return str
    .replace(/[\u0660-\u0669]/g, (c) => (c.charCodeAt(0) - 0x0660))
    .replace(/[\u06f0-\u06f9]/g, (c) => (c.charCodeAt(0) - 0x06f0));
}
/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 */
function getOrder(unitOrder) {
  const signifiers = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
/**
 * Get number of days between two dates
 */
function getDaysDiff(date1, date2) {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return Math.abs(ts1 - ts2) * 1000 * 60 * 60 * 24;
}

const TEXT = {
  nextMonth: "next month",
  prevMonth: "previous month"
};

const calciteDateCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){max-width:216px}:host([scale=s][range]:not([layout=vertical])){max-width:462px}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=s][range]:not([layout=vertical])) .horizontal-arrow-container{height:30px}:host([scale=m]){max-width:286px}:host([scale=m][range]:not([layout=vertical])){max-width:596px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l]){max-width:398px}:host([scale=l][range]:not([layout=vertical])){max-width:820px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}:host([scale=l][range]:not([layout=vertical])) .horizontal-arrow-container{height:54px}.calendar-icon{color:var(--calcite-ui-text-3);position:absolute;top:50%;margin:-8px 0.75rem;pointer-events:none}:host(:not([no-calendar-input])) .menu-container{display:block;position:absolute;z-index:999;top:-999999px;visibility:hidden;pointer-events:none;width:100%}:host(:not([no-calendar-input])[active]) .menu-container{pointer-events:initial;visibility:visible}:host(:not([no-calendar-input])) .menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host(:not([no-calendar-input])) .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host(:not([no-calendar-input])) .menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host(:not([no-calendar-input])) .menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host(:not([no-calendar-input])) .menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host(:not([no-calendar-input])) .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.calendar-picker-wrapper{background-color:var(--calcite-ui-foreground-1);width:100%;line-height:0}.input .calcite-input-wrapper{margin-top:0}:host([active]) .date-input-wrapper{border:1px solid var(--calcite-ui-foreground-1);border-bottom:1px solid var(--calcite-ui-border-3)}:host([no-calendar-input]){-webkit-box-shadow:none;box-shadow:none}:host([no-calendar-input]) .calendar-picker-wrapper{-webkit-box-shadow:none;box-shadow:none;position:static;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);border-radius:none;border:1px solid var(--calcite-ui-border-2)}.input-wrapper{position:relative}:host([range]) .input-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host([range]) .input-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding:0 var(--calcite-spacing-quarter);border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none;height:42px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:0 0 auto;flex:0 0 auto}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{position:absolute;left:0;top:36px;z-index:1;background-color:var(--calcite-ui-foreground-1);padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px}:host([range][layout=vertical][scale=s]) .vertical-arrow-container{top:24px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:50px;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}";

const DEFAULT_PLACEMENT = "bottom-start";
const CalciteDate = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDateChange = index.createEvent(this, "calciteDateChange", 7);
    this.calciteDateRangeChange = index.createEvent(this, "calciteDateRangeChange", 7);
    /** Expand or collapse when calendar does not have input */
    this.active = false;
    /** Localized string for "previous month" (used for aria label) */
    this.intlPrevMonth = TEXT.prevMonth;
    /** Localized string for "next month" (used for aria label) */
    this.intlNextMonth = TEXT.nextMonth;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en-US";
    /** Show only calendar popup */
    this.noCalendarInput = false;
    /** specify the scale of the date picker */
    this.scale = "m";
    /** Range mode activation */
    this.range = false;
    this.proximitySelection = true;
    /** Layout */
    this.layout = "horizontal";
    /**
     * In range mode, indicates which input was is focused on
     */
    this.focusedInput = "start";
    this.hasShadow =  !!document.head.attachShadow;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setMenuEl = (el) => {
      if (el) {
        this.menuEl = el;
      }
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
    };
  }
  activeHandler() {
    this.reposition();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  focusOutHandler() {
    this.reset();
  }
  /**
   * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e) {
    if (!this.hasShadow && !this.el.contains(e.srcElement)) {
      this.reset();
    }
  }
  keyDownHandler(e) {
    if (key.getKey(e.key) === "Escape") {
      this.reset();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper: popper$1, menuEl } = this;
    const modifiers = this.getModifiers();
    popper$1 && !this.range
      ? popper.updatePopper({
        el: menuEl,
        modifiers,
        placement: DEFAULT_PLACEMENT,
        popper: popper$1
      })
      : this.createPopper();
  }
  focusedHandler() {
    this.reposition();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.loadLocaleData();
    if (this.value) {
      this.valueAsDate = dateFromISO(this.value);
    }
    if (this.start) {
      this.setStartAsDate(dateFromISO(this.start));
    }
    if (this.end) {
      this.setEndAsDate(dateFromISO(this.end));
    }
    this.createPopper();
  }
  disconnectedCallback() {
    this.destroyPopper();
  }
  render() {
    var _a, _b, _c;
    const min = dateFromISO(this.min);
    const max = dateFromISO(this.max);
    const date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
    const activeStartDate = this.range
      ? this.getActiveStartDate(date, min, max)
      : this.getActiveDate(date, min, max);
    let activeDate = activeStartDate;
    const endDate = this.range ? dateFromRange(this.endAsDate, min, max) : null;
    const activeEndDate = this.getActiveEndDate(endDate, min, max);
    if ((this.focusedInput === "end" ||
      (this.noCalendarInput &&
        ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "end" &&
        (this.proximitySelection || endDate))) &&
      activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.noCalendarInput && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
    const formattedDate = date ? date.toLocaleDateString(this.locale) : "";
    const minDate = this.focusedInput === "start" ? min : date || min;
    const maxDate = this.focusedInput === "start" && !this.noCalendarInput ? endDate || max : max;
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir, role: "application" }, this.localeData && (index.h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" }, !this.noCalendarInput && (index.h("div", { class: "input-wrapper", ref: this.setStartWrapper }, index.h("calcite-input", { class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, icon: "calendar", "number-button-type": "none", onCalciteInputBlur: (e) => this.blur(e.detail), onCalciteInputFocus: () => {
        this.active = true;
        this.focusedInput = "start";
      }, onCalciteInputInput: (e) => this.input(e.detail.value), placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, scale: this.scale, type: "text", value: formattedDate }))), this.renderCalendar(activeDate, dir, maxDate, minDate, date, endDate), this.range && !this.noCalendarInput && this.layout === "horizontal" && (index.h("div", { class: "horizontal-arrow-container" }, index.h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))), this.range && !this.noCalendarInput && this.layout === "vertical" && (index.h("div", { class: "vertical-arrow-container" }, index.h("calcite-icon", { icon: "arrow-down", scale: "s" }))), this.range && !this.noCalendarInput && (index.h("div", { class: "input-wrapper", ref: this.setEndWrapper }, index.h("calcite-input", { class: "input", icon: "calendar", "number-button-type": "none", onCalciteInputBlur: (e) => this.blur(e.detail), onCalciteInputFocus: () => {
        this.active = true;
        this.focusedInput = "end";
      }, onCalciteInputInput: (e) => this.input(e.detail.value), placeholder: (_c = this.localeData) === null || _c === void 0 ? void 0 : _c.placeholder, ref: (el) => (this.endInput = el), scale: this.scale, type: "text", value: formattedEndDate })))))));
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, startWrapper, endWrapper } = this;
    const modifiers = this.getModifiers();
    this.popper = popper.createPopper({
      el: menuEl,
      modifiers,
      placement: DEFAULT_PLACEMENT,
      referenceEl: this.focusedInput === "end" || this.layout === "vertical" ? endWrapper : startWrapper
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  valueWatcher(value) {
    this.valueAsDate = dateFromISO(value);
  }
  startWatcher(start) {
    this.setStartAsDate(dateFromISO(start));
  }
  endWatcher(end) {
    this.setEndAsDate(dateFromISO(end));
  }
  async loadLocaleData() {
    const { locale } = this;
    this.localeData = await getLocaleData(locale);
  }
  /**
   * Render calcite-date-month-header and calcite-date-month
   */
  renderCalendar(activeDate, dir, maxDate, minDate, date, endDate) {
    return (this.localeData && (index.h("div", { "aria-hidden": (!this.active).toString(), class: "menu-container", ref: this.setMenuEl }, index.h("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [popper.CSS.animation]: true,
        [popper.CSS.animationActive]: this.active
      } }, index.h("calcite-date-month-header", { activeDate: activeDate, dir: dir, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDateSelect: (e) => {
        const date = new Date(e.detail);
        if (!this.range) {
          this.activeDate = date;
          this.handleDateChange(e);
        }
        else {
          if (this.focusedInput === "start") {
            this.activeStartDate = date;
          }
          else if (this.focusedInput === "end") {
            this.activeEndDate = date;
          }
          this.mostRecentRangeValue = date;
        }
      }, scale: this.scale, selectedDate: this.focusedInput === "start" ? date : endDate || new Date() }), index.h("calcite-date-month", { activeDate: activeDate, dir: dir, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteActiveDateChange: (e) => {
        const date = new Date(e.detail);
        if (!this.range) {
          this.activeDate = date;
        }
        else {
          if (this.focusedInput === "start") {
            this.activeStartDate = date;
          }
          else if (this.focusedInput === "end") {
            this.activeEndDate = date;
          }
          this.mostRecentRangeValue = date;
        }
      }, onCalciteDateHover: (e) => {
        if (!this.startAsDate) {
          this.hoverRange = undefined;
          return this.hoverRange;
        }
        const date = new Date(e.detail);
        this.hoverRange = {
          focused: this.focusedInput,
          start: this.startAsDate,
          end: this.endAsDate
        };
        if (!this.noCalendarInput) {
          if (this.focusedInput === "start") {
            this.hoverRange.start = date;
          }
          else {
            this.hoverRange.end = date;
          }
        }
        else {
          if (this.proximitySelection) {
            if (this.endAsDate) {
              const startDiff = getDaysDiff(date, this.startAsDate);
              const endDiff = getDaysDiff(date, this.endAsDate);
              if (startDiff < endDiff) {
                this.hoverRange.start = date;
                this.hoverRange.focused = "start";
              }
              else {
                this.hoverRange.end = date;
                this.hoverRange.focused = "end";
              }
            }
            else {
              if (date < this.startAsDate) {
                this.hoverRange = {
                  focused: "start",
                  start: date,
                  end: this.startAsDate
                };
              }
              else {
                this.hoverRange.end = date;
                this.hoverRange.focused = "end";
              }
            }
          }
          else {
            if (!this.endAsDate) {
              if (date < this.startAsDate) {
                this.hoverRange = {
                  focused: "start",
                  start: date,
                  end: this.startAsDate
                };
              }
              else {
                this.hoverRange.end = date;
                this.hoverRange.focused = "end";
              }
            }
            else {
              this.hoverRange = undefined;
            }
          }
        }
      }, onCalciteDateMouseOut: (_e) => {
        if (this.hoverRange) {
          this.hoverRange = undefined;
        }
      }, onCalciteDateSelect: (e) => this.handleDateChange(e, true), scale: this.scale, selectedDate: this.focusedInput === "start" ? date : endDate, startDate: this.range ? date : undefined })))));
  }
  /**
   * Update date instance of start if valid
   */
  setStartAsDate(startDate) {
    this.startAsDate = startDate;
    this.mostRecentRangeValue = this.startAsDate;
  }
  /**
   * Update date instance of end if valid
   */
  setEndAsDate(endDate) {
    this.endAsDate = endDate;
    this.mostRecentRangeValue = this.endAsDate;
  }
  /**
   * Reset active date and close
   */
  reset() {
    var _a, _b, _c, _d, _f, _g;
    if (this.valueAsDate && ((_a = this.valueAsDate) === null || _a === void 0 ? void 0 : _a.getTime()) !== ((_b = this.activeDate) === null || _b === void 0 ? void 0 : _b.getTime())) {
      this.activeDate = new Date(this.valueAsDate);
    }
    if (this.startAsDate && ((_c = this.startAsDate) === null || _c === void 0 ? void 0 : _c.getTime()) !== ((_d = this.activeStartDate) === null || _d === void 0 ? void 0 : _d.getTime())) {
      this.activeStartDate = new Date(this.startAsDate);
    }
    if (this.endAsDate && ((_f = this.endAsDate) === null || _f === void 0 ? void 0 : _f.getTime()) !== ((_g = this.activeEndDate) === null || _g === void 0 ? void 0 : _g.getTime())) {
      this.activeEndDate = new Date(this.endAsDate);
    }
    if (!this.noCalendarInput) {
      this.active = false;
    }
  }
  /**
   * If inputted string is a valid date, update value/active
   */
  input(value) {
    const date = this.getDateFromInput(value);
    if (date) {
      if (!this.range) {
        this.valueAsDate = date;
        this.activeDate = date;
        this.calciteDateChange.emit(new Date(date));
      }
      else {
        let changed = false;
        if (this.focusedInput === "start") {
          changed = !this.startAsDate || !sameDate(date, this.startAsDate);
          if (changed) {
            this.startAsDate = date;
            this.activeStartDate = date;
          }
        }
        else if (this.focusedInput === "end") {
          changed = !this.endAsDate || !sameDate(date, this.endAsDate);
          if (changed) {
            this.endAsDate = date;
            this.activeEndDate = date;
          }
        }
        if (changed) {
          this.calciteDateRangeChange.emit({
            startDate: this.startAsDate,
            endDate: this.endAsDate
          });
        }
      }
    }
  }
  /**
   * Clean up invalid date from input on blur
   */
  blur(target) {
    const date = this.getDateFromInput(target.value);
    if (!date) {
      if (!this.range && this.valueAsDate) {
        target.value = this.valueAsDate.toLocaleDateString(this.locale);
      }
      else if (this.focusedInput === "start" && this.startAsDate) {
        target.value = this.startAsDate.toLocaleDateString(this.locale);
      }
      else if (this.focusedInput === "end" && this.endAsDate) {
        target.value = this.endAsDate.toLocaleDateString(this.locale);
      }
    }
  }
  /**
   * Event handler for when the selected date changes
   */
  handleDateChange(e, doReset) {
    const date = new Date(e.detail);
    if (!this.range) {
      this.value = dateToISO(date);
      this.valueAsDate = e.detail;
      this.activeDate = date;
      this.calciteDateChange.emit(date);
      if (doReset) {
        this.reset();
      }
      return;
    }
    if (this.range && this.noCalendarInput) {
      if (!this.startAsDate || (!this.endAsDate && date < this.startAsDate)) {
        if (this.startAsDate) {
          const newEndDate = new Date(this.startAsDate);
          this.end = dateToISO(newEndDate);
          this.setEndAsDate(newEndDate);
          this.activeEndDate = newEndDate;
        }
        this.start = dateToISO(date);
        this.setStartAsDate(date);
        this.activeStartDate = date;
      }
      else if (!this.endAsDate) {
        this.end = dateToISO(date);
        this.setEndAsDate(date);
        this.activeEndDate = date;
      }
      else {
        if (this.proximitySelection) {
          const startDiff = getDaysDiff(date, this.startAsDate);
          const endDiff = getDaysDiff(date, this.endAsDate);
          if (startDiff < endDiff) {
            this.start = dateToISO(date);
            this.setStartAsDate(date);
            this.activeStartDate = date;
          }
          else {
            this.end = dateToISO(date);
            this.setEndAsDate(date);
            this.activeEndDate = date;
          }
        }
        else {
          this.start = dateToISO(date);
          this.setStartAsDate(date);
          this.activeStartDate = date;
          this.endAsDate = this.activeEndDate = this.end = undefined;
        }
      }
      if (doReset) {
        this.reset();
      }
      this.calciteDateRangeChange.emit({
        startDate: this.startAsDate,
        endDate: this.endAsDate
      });
      return;
    }
    if (this.focusedInput === "start") {
      this.start = dateToISO(date);
      this.setStartAsDate(date);
      this.activeStartDate = date;
    }
    else {
      this.end = dateToISO(date);
      this.setEndAsDate(date);
      this.activeEndDate = date;
    }
    if (doReset) {
      this.reset();
    }
    this.calciteDateRangeChange.emit({
      startDate: this.startAsDate,
      endDate: this.endAsDate
    });
    setTimeout(() => {
      if (this.focusedInput === "start" && !this.noCalendarInput) {
        this.endInput.setFocus();
      }
    }, 150);
  }
  /**
   * Get an active date using the value, or current date as default
   */
  getActiveDate(value, min, max) {
    return dateFromRange(this.activeDate, min, max) || value || dateFromRange(new Date(), min, max);
  }
  getActiveStartDate(value, min, max) {
    return (dateFromRange(this.activeStartDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  getActiveEndDate(value, min, max) {
    return (dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  getDateFromInput(value) {
    if (!this.localeData) {
      return false;
    }
    const { separator } = this.localeData;
    const { day, month, year } = parseDateString(value, this.localeData);
    const validDay = day > 0;
    const validMonth = month > -1;
    const date = new Date(year, month, day);
    date.setFullYear(year);
    const validDate = !isNaN(date.getTime());
    const validLength = value.split(separator).filter((c) => c).length > 2;
    const validYear = year.toString().length > 0;
    if (validDay &&
      validMonth &&
      validDate &&
      validLength &&
      validYear &&
      inRange(date, this.min, this.max)) {
      return date;
    }
    return false;
  }
  static get assetsDirs() { return ["calcite-date-nls"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "focusedInput": ["focusedHandler"],
    "value": ["valueWatcher"],
    "start": ["startWatcher"],
    "end": ["endWatcher"],
    "locale": ["loadLocaleData"]
  }; }
};
CalciteDate.style = calciteDateCss;

const calciteDateDayCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f;--calcite-ui-foreground-current:#214155}:host{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--calcite-ui-text-3);cursor:pointer;width:calc(100% / 7);min-width:0}.day-v-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}.day{display:-ms-flexbox;display:flex;border-radius:100%;font-size:0.875rem;line-height:1.5;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;line-height:1;color:var(--calcite-ui-text-3);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;background:none;-webkit-box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;opacity:0.4}.text{margin:1px 0 0 1px}:host([scale=s]) .day-v-wrapper{padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=s]) .day-wrapper{padding:0}:host([scale=s]) .day{height:27px;width:27px;font-size:0.75rem}:host([scale=m]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]) .day{height:33px;width:33px;font-size:0.875rem}:host([scale=l]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=l]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=l]) .day{height:43px;width:43px;font-size:1rem}:host([current-month]) .day{opacity:1}:host([disabled]){cursor:default;opacity:0.2}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){z-index:1}:host(:focus:not([disabled])) .day{-webkit-box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1)}:host([selected]) .day{background-color:var(--calcite-ui-blue-1) !important;color:var(--calcite-ui-foreground-1) !important;font-weight:500;z-index:1}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range][dir=ltr]) .day-wrapper,:host([end-of-range][dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][dir=ltr]:not(:focus)) .day,:host([end-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]) .day-wrapper,:host([start-of-range][dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]:not(:focus)) .day,:host([start-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l][dir=ltr]) .day-wrapper,:host([start-of-range][scale=l][dir=rtl]) .day-wrapper{-webkit-box-shadow:inset -8px 0 var(--calcite-ui-foreground-1);box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{border-radius:0;color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0}:host([end-of-range][range-hover][dir=ltr]) .day-wrapper,:host([start-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, left top, right top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host([start-of-range][range-hover][dir=ltr]) .day-wrapper,:host([end-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, right top, left top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range].hover--inside-range.focused--end) .day-wrapper,:host([start-of-range].hover--inside-range.focused--start) .day-wrapper,:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([dir=ltr][highlighted]:first-child) .day-wrapper,:host([dir=rtl][highlighted]:last-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):first-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):last-child) .day-wrapper{border-top-left-radius:45%;border-bottom-left-radius:45%}:host([dir=ltr][highlighted]:last-child) .day-wrapper,:host([dir=rtl][highlighted]:first-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):last-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):first-child) .day-wrapper{border-top-right-radius:45%;border-bottom-right-radius:45%}";

const CalciteDateDay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDaySelect = index.createEvent(this, "calciteDaySelect", 7);
    this.calciteDayHover = index.createEvent(this, "calciteDayHover", 7);
    /** Date is outside of range and can't be selected */
    this.disabled = false;
    /** Date is in the current month. */
    this.currentMonth = false;
    /** Date is the current selected date of the picker */
    this.selected = false;
    /** Date is currently highlighted as part of the range */
    this.highlighted = false;
    /** Showing date range */
    this.range = false;
    /** Date is the start of date range */
    this.startOfRange = false;
    /** Date is the end of date range */
    this.endOfRange = false;
    this.rangeHover = false;
    /** Date is actively in focus for keyboard navigation */
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    !this.disabled && this.calciteDaySelect.emit();
  }
  keyDownHandler(e) {
    const key$1 = key.getKey(e.key);
    if (key$1 === " " || key$1 === "Enter") {
      !this.disabled && this.calciteDaySelect.emit();
    }
  }
  mouseoverHandler() {
    this.calciteDayHover.emit({
      disabled: this.disabled
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const formattedDay = String(this.day)
      .split("")
      .map((i) => this.localeData.numerals[i])
      .join("");
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir, role: "gridcell", tabindex: this.active ? 0 : -1 }, index.h("div", { class: "day-v-wrapper" }, index.h("div", { class: "day-wrapper" }, index.h("span", { class: "day" }, index.h("span", { class: "text" }, formattedDay))))));
  }
  get el() { return index.getElement(this); }
};
CalciteDateDay.style = calciteDateDayCss;

const calciteDateMonthCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.calender{padding-bottom:4px}.week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid var(--calcite-ui-border-3);padding:0 4px}.week-header{color:var(--calcite-ui-text-3);font-weight:600;width:calc(100% / 7);text-align:center}:host([scale=s]) .week-header{font-size:12px;padding:16px 0 16px 0}:host([scale=m]) .week-header{font-size:12px;padding:24px 0 20px 0}:host([scale=l]) .week-header{font-size:14px;padding:32px 0 24px 0}.week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 6px}";

const CalciteDateMonth = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDateSelect = index.createEvent(this, "calciteDateSelect", 7);
    this.calciteDateHover = index.createEvent(this, "calciteDateHover", 7);
    this.calciteActiveDateChange = index.createEvent(this, "calciteActiveDateChange", 7);
    this.calciteDateMouseOut = index.createEvent(this, "calciteDateMouseOut", 7);
    /** Date currently active.*/
    this.activeDate = new Date();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    const isRTL = this.el.dir === "rtl";
    switch (key.getKey(e.key)) {
      case "ArrowUp":
        e.preventDefault();
        this.addDays(-7);
        break;
      case "ArrowRight":
        e.preventDefault();
        this.addDays(isRTL ? -1 : 1);
        break;
      case "ArrowDown":
        e.preventDefault();
        this.addDays(7);
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.addDays(isRTL ? 1 : -1);
        break;
      case "PageUp":
        e.preventDefault();
        this.addMonths(-1);
        break;
      case "PageDown":
        e.preventDefault();
        this.addMonths(1);
        break;
      case "Home":
        e.preventDefault();
        this.activeDate.setDate(1);
        this.addDays();
        break;
      case "End":
        e.preventDefault();
        this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
        this.addDays();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        break;
      case "Tab":
        this.activeFocus = false;
    }
  }
  /**
   * Once user is not interacting via keyboard,
   * disable auto focusing of active date
   */
  disableActiveFocus() {
    this.activeFocus = false;
  }
  mouseoutHandler() {
    this.calciteDateMouseOut.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const month = this.activeDate.getMonth();
    const year = this.activeDate.getFullYear();
    const startOfWeek = this.localeData.weekStart % 7;
    const { abbreviated, short, narrow } = this.localeData.days;
    const weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
    const adjustedWeekDays = [...weekDays.slice(startOfWeek, 7), ...weekDays.slice(0, startOfWeek)];
    const curMonDays = this.getCurrentMonthDays(month, year);
    const prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
    const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
    const dir = dom.getElementDir(this.el);
    const days = [
      ...prevMonDays.map((day) => {
        const date = new Date(year, month - 1, day);
        return this.renderDateDay(false, day, dir, date);
      }),
      ...curMonDays.map((day) => {
        const date = new Date(year, month, day);
        const active = sameDate(date, this.activeDate);
        return this.renderDateDay(active, day, dir, date, true, true);
      }),
      ...nextMonDays.map((day) => {
        const date = new Date(year, month + 1, day);
        return this.renderDateDay(false, day, dir, date);
      })
    ];
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return (index.h(index.Host, null, index.h("div", { class: "calender", role: "grid" }, index.h("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => (index.h("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => (index.h("div", { class: "week-days", role: "row" }, days))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Add n months to the current month
   */
  addMonths(step) {
    const nextDate = new Date(this.activeDate);
    nextDate.setMonth(this.activeDate.getMonth() + step);
    this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Add n days to the current date
   */
  addDays(step = 0) {
    const nextDate = new Date(this.activeDate);
    nextDate.setDate(this.activeDate.getDate() + step);
    this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Get dates for last days of the previous month
   */
  getPrevMonthdays(month, year, startOfWeek) {
    const lastDate = new Date(year, month, 0);
    const date = lastDate.getDate();
    const day = lastDate.getDay();
    const days = [];
    if (day - 6 === startOfWeek) {
      return days;
    }
    for (let i = lastDate.getDay(); i >= startOfWeek; i--) {
      days.push(date - i);
    }
    return days;
  }
  /**
   * Get dates for the current month
   */
  getCurrentMonthDays(month, year) {
    const num = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < num; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Get dates for first days of the next month
   */
  getNextMonthDays(month, year, startOfWeek) {
    const endDay = new Date(year, month + 1, 0).getDay();
    const days = [];
    if (endDay === (startOfWeek + 6) % 7) {
      return days;
    }
    for (let i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Determine if the date is in between the start and end dates
   */
  betweenSelectedRange(date) {
    return (this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate &&
      !this.isRangeHover(date) &&
      !this.isHoverInRange());
  }
  /**
   * Determine if the date should be in selected state
   */
  isSelected(date) {
    return (sameDate(date, this.selectedDate) ||
      (this.startDate && sameDate(date, this.startDate)) ||
      (this.endDate && sameDate(date, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   */
  isStartOfRange(date) {
    return (!!this.startDate &&
      !sameDate(this.startDate, this.endDate) &&
      sameDate(this.startDate, date) &&
      !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return ((!!this.endDate && !sameDate(this.startDate, this.endDate) && sameDate(this.endDate, date)) ||
      (!this.endDate &&
        this.hoverRange &&
        sameDate(this.startDate, this.hoverRange.end) &&
        sameDate(date, this.hoverRange.end)));
  }
  /**
   * Render calcite-date-day
   */
  renderDateDay(active, day, dir, date, currentMonth, ref) {
    var _a;
    const props = Object.assign(Object.assign({ active,
      currentMonth,
      day,
      dir, disabled: !inRange(date, this.min, this.max), startOfRange: this.isStartOfRange(date), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), localeData: this.localeData, onCalciteDaySelect: () => this.calciteDateSelect.emit(date), onCalciteDayHover: (e) => {
        if (e.detail.disabled) {
          this.calciteDateMouseOut.emit();
        }
        else {
          this.calciteDateHover.emit(date);
        }
      }, range: !!this.startDate && !!this.endDate && !sameDate(this.startDate, this.endDate), scale: this.scale, selected: this.isSelected(date) }, (ref && {
      ref: (el) => {
        // when moving via keyboard, focus must be updated on active date
        if (active && this.activeFocus) {
          el === null || el === void 0 ? void 0 : el.focus();
        }
      }
    })), { rangeHover: this.isRangeHover(date), class: `${!this.startDate
        ? ""
        : this.isHoverInRange() ||
          (!this.endDate && this.hoverRange && sameDate((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.end, this.startDate))
          ? "hover--inside-range"
          : "hover--outside-range"} ${this.isFocusedOnStart() ? "focused--start" : "focused--end"}` });
    return index.h("calcite-date-day", Object.assign({}, props));
  }
  isFocusedOnStart() {
    var _a;
    return ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "start";
  }
  isHoverInRange() {
    if (!this.hoverRange) {
      return;
    }
    const { start, end } = this.hoverRange;
    return ((!this.isFocusedOnStart() && !!this.startDate && (!this.endDate || end < this.endDate)) ||
      (this.isFocusedOnStart() && !!this.startDate && start > this.startDate));
  }
  isRangeHover(date) {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    const isStart = this.isFocusedOnStart();
    const insideRange = this.isHoverInRange();
    const cond1 = insideRange &&
      ((!isStart && date > this.startDate && (date < end || sameDate(date, end))) ||
        (isStart && date < this.endDate && (date > start || sameDate(date, start))));
    const cond2 = !insideRange &&
      ((!isStart && date >= this.endDate && (date < end || sameDate(date, end))) ||
        (isStart &&
          (date < this.startDate || (this.endDate && sameDate(date, this.startDate))) &&
          (date > start || sameDate(date, start))));
    return cond1 || cond2;
  }
  get el() { return index.getElement(this); }
};
CalciteDateMonth.style = calciteDateMonthCss;

const calciteDateMonthHeaderCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 3px}:host([scale=s]) .text{font-size:14px}:host([scale=s]) .chevron{height:38px}:host([scale=m]) .text{font-size:16px}:host([scale=m]) .chevron{height:48px}:host([scale=l]) .text{font-size:18px}:host([scale=l]) .chevron{height:64px}.chevron{color:var(--calcite-ui-text-2);-ms-flex-positive:0;flex-grow:0;width:calc(100% / 7);-webkit-box-sizing:content-box;box-sizing:content-box;outline:none;padding:0 4px;margin:0 -3px;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.chevron:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.chevron:hover,.chevron:focus{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;line-height:1;margin:auto 0;text-align:center}.text--reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.month,.year,.suffix{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground-1);font-size:inherit;font-weight:500;line-height:1.25;margin:0 4px;display:inline-block}.year{font-family:inherit;text-align:center;border:none;width:3em;padding:0;background-color:transparent;position:relative;z-index:2;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.year:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.year--suffix{width:4rem;text-align:left}.year-wrap{position:relative}.suffix{position:absolute;width:4rem;white-space:nowrap;text-align:left;top:0;left:0}.suffix__invisible{visibility:hidden}";

const CalciteDateMonthHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDateSelect = index.createEvent(this, "calciteDateSelect", 7);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    var _a;
    const activeMonth = this.activeDate.getMonth();
    const { months, unitOrder } = this.localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = localizeNumber(this.activeDate.getFullYear(), this.localeData);
    const iconScale = this.scale === "l" ? "m" : "s";
    const dir = dom.getElementDir(this.el);
    const order = getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
    const prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
    const suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
    return (index.h(index.Host, { dir: dir }, index.h("div", { class: "header" }, index.h("a", { "aria-disabled": (prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: (e) => this.handleArrowClick(e, prevMonthDate), onKeyDown: (e) => this.handleKeyDown(e, prevMonthDate), role: "button", tabindex: prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, index.h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-left", scale: iconScale })), index.h("div", { class: { text: true, "text--reverse": reverse } }, index.h("span", { "aria-level": "2", class: "month", role: "heading" }, localizedMonth), index.h("span", { class: "year-wrap" }, index.h("input", { class: {
        year: true,
        "year--suffix": !!suffix
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: (event) => this.setYear(event.target.value), onKeyDown: (event) => this.onYearKey(event), pattern: "\\d*", ref: (el) => (this.yearInput = el), type: "text", value: localizedYear }), suffix && (index.h("span", { class: "suffix" }, index.h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear), " " + suffix)))), index.h("a", { "aria-disabled": (nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: (e) => this.handleArrowClick(e, nextMonthDate), onKeyDown: (e) => this.handleKeyDown(e, nextMonthDate), role: "button", tabindex: nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, index.h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-right", scale: iconScale })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Increment year on UP/DOWN keys
   */
  onYearKey(e) {
    const year = e.target.value;
    switch (key.getKey(e.key)) {
      case "ArrowDown":
        e.preventDefault();
        this.setYear(year, -1);
        break;
      case "ArrowUp":
        e.preventDefault();
        this.setYear(year, 1);
        break;
    }
  }
  /*
   * Update active month on clicks of left/right arrows
   */
  handleArrowClick(e, date) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e.stopPropagation();
    this.calciteDateSelect.emit(date);
  }
  /*
   * Because we have to use an anchor rather than button (#1069),
   * ensure enter/space work like a button would
   */
  handleKeyDown(e, date) {
    const key$1 = key.getKey(e.key);
    if (key$1 === " " || key$1 === "Enter") {
      this.handleArrowClick(e, date);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   */
  setYear(localizedYear, increment = 0) {
    const { min, max, activeDate, localeData, yearInput } = this;
    const parsedYear = parseNumber(localizedYear, localeData);
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + increment;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range, update active date
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      const inRangeDate = dateFromRange(nextDate, min, max);
      this.calciteDateSelect.emit(inRangeDate);
      yearInput.value = localizeNumber(inRangeDate.getFullYear(), localeData);
    }
    else {
      // leave the current active date and clean up garbage input
      yearInput.value = localizeNumber(activeDate.getFullYear(), localeData);
    }
  }
  get el() { return index.getElement(this); }
};
CalciteDateMonthHeader.style = calciteDateMonthHeaderCss;

exports.calcite_date = CalciteDate;
exports.calcite_date_day = CalciteDateDay;
exports.calcite_date_month = CalciteDateMonth;
exports.calcite_date_month_header = CalciteDateMonthHeader;
