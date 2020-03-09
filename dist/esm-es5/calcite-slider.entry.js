import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-30c05663.js';
import { g as guid } from './guid-cb609d41.js';
import { a as END, H as HOME, P as PAGE_DOWN, b as PAGE_UP, L as LEFT, D as DOWN, R as RIGHT, U as UP } from './keys-2ed3d0b9.js';
import { a as getElementTheme } from './dom-0361c8d2.js';
var CalciteSlider = /** @class */ (function () {
    function CalciteSlider(hostRef) {
        registerInstance(this, hostRef);
        /** Disable and gray out the slider */
        this.disabled = false;
        /** Minimum selectable value */
        this.min = 0;
        /** Maximum selectable value */
        this.max = 100;
        /** Currently selected number (if single select) */
        this.value = null;
        /** Snap selection along the step interval */
        this.snap = true;
        /** Interval to move on up/down keys */
        this.step = 1;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.guid = "calcite-slider-" + guid();
        /**
         * @internal
         */
        this.isRange = false;
        /**
         * @internal
         */
        this.tickValues = [];
        /**
         * @internal
         */
        this.activeProp = "value";
        this.calciteSliderUpdate = createEvent(this, "calciteSliderUpdate", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteSlider.prototype.componentWillLoad = function () {
        this.isRange = !!(this.maxValue || this.maxValue === 0);
        this.tickValues = this.generateTickValues();
        this.value = this.bound(this.value);
        if (this.snap) {
            this.value = this.getClosestStep(this.value);
        }
        this.calciteSliderUpdate.emit();
    };
    CalciteSlider.prototype.render = function () {
        var _this = this;
        var id = this.el.id || this.guid;
        var theme = getElementTheme(this.el);
        var min = this.minValue || this.min;
        var max = this.maxValue || this.value;
        var maxProp = this.isRange ? "maxValue" : "value";
        return (h(Host, { theme: theme, id: id, "is-range": this.isRange, style: {
                "--calcite-slider-range-max": 100 -
                    this.getUnitInterval(max) * 100 + "%",
                "--calcite-slider-range-min": this.getUnitInterval(min) * 100 + "%"
            } }, h("div", { class: "slider__track" }, h("div", { class: "slider__track__range" }), h("div", { class: "slider__ticks" }, this.tickValues.map(function (number) { return (h("span", { class: {
                slider__tick: true,
                "slider__tick--active": number >= min && number <= max
            }, style: {
                "--calcite-slider-tick-offset": _this.getUnitInterval(number) * 100 + "%"
            } }, _this.labelTicks ? (h("span", { class: {
                slider__tick__label: true,
                "slider__tick__label--min": number === _this.min,
                "slider__tick__label--max": number === _this.max
            } }, number)) : (""))); }))), this.isRange ? (h("button", { ref: function (el) { return (_this.minHandle = el); }, onFocus: function () { return (_this.activeProp = "minValue"); }, onBlur: function () { return (_this.activeProp = null); }, onMouseDown: function () { return _this.dragStart("minValue"); }, onTouchStart: function (e) { return _this.dragStart("minValue", e); }, role: "slider", "aria-orientation": "horizontal", "aria-label": this.minLabel, "aria-valuenow": this.minValue, "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, class: {
                slider__thumb: true,
                "slider__thumb--min": true,
                "slider__thumb--active": this.dragProp === "minValue",
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this.minValue)) : (""))) : (""), h("button", { ref: function (el) { return (_this.maxHandle = el); }, onFocus: function () { return (_this.activeProp = maxProp); }, onBlur: function () { return (_this.activeProp = null); }, onMouseDown: function () { return _this.dragStart(maxProp); }, onTouchStart: function (e) { return _this.dragStart(maxProp, e); }, role: "slider", "aria-orientation": "horizontal", "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-valuenow": this[maxProp], "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, class: {
                slider__thumb: true,
                "slider__thumb--max": true,
                "slider__thumb--active": this.dragProp === maxProp,
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this[maxProp])) : (""))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteSlider.prototype.keyDownHandler = function (e) {
        var value = this[this.activeProp];
        switch (e.keyCode) {
            case UP:
            case RIGHT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value + this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case DOWN:
            case LEFT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value - this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case PAGE_UP:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value + this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case PAGE_DOWN:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value - this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case HOME:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.min, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case END:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.max, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
        }
    };
    CalciteSlider.prototype.clickHandler = function (e) {
        var x = e.clientX || e.pageX;
        var num = this.translate(x);
        var prop = "value";
        if (this.isRange) {
            var closerToMax = Math.abs(this.maxValue - num) < Math.abs(this.minValue - num);
            prop = closerToMax ? "maxValue" : "minValue";
        }
        this[prop] = this.bound(num, prop);
        this.calciteSliderUpdate.emit();
        var handle = prop === "minValue" ? this.minHandle : this.maxHandle;
        handle.focus();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteSlider.prototype.generateTickValues = function () {
        var ticks = [];
        var current = this.min;
        while (this.ticks && current < this.max + this.ticks) {
            ticks.push(current);
            current = current + this.ticks;
        }
        return ticks;
    };
    CalciteSlider.prototype.dragStart = function (prop, e) {
        if (e) {
            e.preventDefault();
        }
        if (this.dragListener) {
            this.dragEnd();
        }
        this.dragProp = prop;
        this.activeProp = prop;
        this.dragListener = this.dragListener || this.dragUpdate.bind(this);
        document.addEventListener("mousemove", this.dragListener);
        document.addEventListener("touchmove", this.dragListener, {
            capture: false
        });
        document.addEventListener("mouseup", this.dragEnd.bind(this));
        document.addEventListener("touchend", this.dragEnd.bind(this), false);
        document.addEventListener("touchcancel", this.dragEnd.bind(this));
    };
    CalciteSlider.prototype.dragUpdate = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.dragProp) {
            var value = this.translate(e.clientX || e.pageX);
            this[this.dragProp] = this.bound(value, this.dragProp);
            this.calciteSliderUpdate.emit();
        }
    };
    CalciteSlider.prototype.dragEnd = function () {
        this.dragProp = null;
        document.removeEventListener("mousemove", this.dragListener);
        document.removeEventListener("touchmove", this.dragListener);
    };
    /**
     * If number is outside range, constrain to min or max
     * @internal
     */
    CalciteSlider.prototype.bound = function (num, prop) {
        num = Math.min(num, this.max);
        num = Math.max(num, this.min);
        // ensure that maxValue and minValue don't swap positions
        if (prop === "maxValue") {
            num = Math.max(num, this.minValue);
        }
        if (prop === "minValue") {
            num = Math.min(num, this.maxValue);
        }
        return num;
    };
    /**
     * Translate a pixel position to value along the range
     * @internal
     */
    CalciteSlider.prototype.translate = function (x) {
        var range = this.max - this.min;
        var _a = this.el.getBoundingClientRect(), left = _a.left, width = _a.width;
        var percent = (x - left) / width;
        var value = this.bound(this.min + range * percent);
        if (this.snap && this.step) {
            value = this.getClosestStep(value);
        }
        return value;
    };
    /**
     * Get closest allowed value along stepped values
     * @internal
     */
    CalciteSlider.prototype.getClosestStep = function (num) {
        num = this.bound(num);
        if (this.step) {
            var step = Math.round(num / this.step) * this.step;
            num = this.bound(step);
        }
        return num;
    };
    /**
     * Get position of value along range as fractional value
     * @return {number} number in the unit interval [0,1]
     * @internal
     */
    CalciteSlider.prototype.getUnitInterval = function (num) {
        num = this.bound(num);
        var range = this.max - this.min;
        return (num - this.min) / range;
    };
    Object.defineProperty(CalciteSlider.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteSlider, "style", {
        get: function () { return ":host([hidden]){display:none}:host{--calcite-slider-tick:#959595;--calcite-slider-label:#6a6a6a;--calcite-slider-track:#d4d4d4;--calcite-slider-handle:#fff;--calcite-slider-handle-border:#6a6a6a;display:block;padding:7px 0;margin:7px 0;position:relative}:host-context([theme=dark]){--calcite-slider-tick:#6a6a6a;--calcite-slider-label:#9f9f9f;--calcite-slider-track:#4a4a4a;--calcite-slider-handle:#2b2b2b;--calcite-slider-handle-border:#9f9f9f}:host([disabled]){opacity:.5;pointer-events:none}:host([label-handles]),:host([precise]){margin-top:21px}:host([label-ticks]),:host([precise][is-range]){margin-bottom:21px}:host([precise][label-handles]){margin-top:35px}:host([precise][label-handles][is-range]){margin-bottom:35px}.slider__thumb{position:absolute;right:var(--calcite-slider-range-max);height:28px;width:28px;margin:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:3}.slider__thumb--min{right:auto;left:var(--calcite-slider-range-min)}.slider__handle{position:absolute;top:0;left:0;height:14px;width:14px;margin:7px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-slider-handle);border:2px solid var(--calcite-slider-handle-border);-webkit-transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease,-webkit-box-shadow .25s ease}.slider__handle__label{position:absolute;left:0;bottom:28px;width:28px;height:.75em;font-size:.8125rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-slider-label);text-align:center}.slider__thumb:hover .slider__handle{border-width:3px;border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08)}.slider__thumb--active,.slider__thumb:focus{outline:none;z-index:4}.slider__thumb--active .slider__handle,.slider__thumb:focus .slider__handle{background-color:var(--calcite-ui-blue);border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}.slider__thumb--precise{margin-top:-28px}.slider__thumb--precise:after{content:\"\";display:block;position:absolute;top:14px;left:50%;width:2px;height:7px;background-color:var(--calcite-slider-handle-border);margin-left:-1px;margin-top:7px;z-index:2}.slider__thumb--active.slider__thumb--precise:after,.slider__thumb:focus.slider__thumb--precise:after,.slider__thumb:hover.slider__thumb--precise:after{background-color:var(--calcite-ui-blue)}.slider__thumb--precise.slider__thumb--min{margin-top:-2px}.slider__thumb--precise.slider__thumb--min .slider__handle__label{bottom:unset;top:28px}.slider__thumb--precise.slider__thumb--min:after{top:0;margin-top:0}.slider__track{height:2px;border-radius:0;z-index:2;background-color:var(--calcite-slider-track);-webkit-transition:all .25s ease-in;transition:all .25s ease-in;position:relative}.slider__track__range{position:absolute;top:0;right:var(--calcite-slider-range-max);left:var(--calcite-slider-range-min);height:2px;background-color:var(--calcite-ui-blue)}.slider__tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-slider-tick-offset);margin-left:-3px;border:1px solid var(--calcite-slider-handle);border-right-width:2px;border-left-width:2px;background-color:var(--calcite-slider-tick)}.slider__tick--active{background-color:var(--calcite-ui-blue)}.slider__tick__label{position:absolute;font-size:.8125rem;line-height:1.5;font-weight:500;color:var(--calcite-slider-label);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.slider__tick__label--min{left:0;margin:14px -3px;text-align:left}.slider__tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteSlider;
}());
export { CalciteSlider as calcite_slider };
