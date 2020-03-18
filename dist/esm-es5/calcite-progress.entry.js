import { r as registerInstance, h, H as Host, g as getElement } from './core-30c05663.js';
var CalciteProgress = /** @class */ (function () {
    function CalciteProgress(hostRef) {
        registerInstance(this, hostRef);
        /** Use indeterminate if finding actual progress value is impossible */
        this.type = "determinate";
        /** Percent complete of 100 */
        this.value = 0;
        /** Text label for the progress indicator */
        this.text = null;
        /** Fill bar in the opposite direction */
        this.reversed = false;
    }
    CalciteProgress.prototype.render = function () {
        var isDeterminate = this.type === "determinate";
        var barStyles = isDeterminate ? { width: this.value * 100 + "%" } : {};
        return (h(Host, { class: "calcite-progress" }, h("div", { class: "track" }), h("div", { class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                reversed: this.reversed
            }, style: barStyles }), this.text ? h("div", { class: "text" }, this.text) : null));
    };
    Object.defineProperty(CalciteProgress.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteProgress, "style", {
        get: function () { return ":host([hidden]){display:none}:host{position:relative;display:block;height:2px;width:100%;overflow:hidden}.bar,.track{position:absolute;top:0;height:2px}.track{background:var(--calcite-ui-border-3);z-index:0;width:100%}.bar{background-color:var(--calcite-ui-blue);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2.2s linear infinite;animation:looping-progress-bar-ani 2.2s linear infinite}.reversed{right:0}.text{padding:1.5rem 0 0 0}\@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}50%{width:40%}to{-webkit-transform:translate3d(600%,0,0);transform:translate3d(600%,0,0)}}\@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}50%{width:40%}to{-webkit-transform:translate3d(600%,0,0);transform:translate3d(600%,0,0)}}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteProgress;
}());
export { CalciteProgress as calcite_progress };
