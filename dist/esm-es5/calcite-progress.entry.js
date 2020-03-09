import { r as registerInstance, h, H as Host, g as getElement } from './core-30c05663.js';
import { a as getElementTheme } from './dom-0361c8d2.js';
var CalciteProgress = /** @class */ (function () {
    function CalciteProgress(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "determinate";
        /**
         * Percent complete of 100
         */
        this.value = 0;
        /**
         * Text label for the progress indicator
         */
        this.text = null;
        /**
         * Fill bar in the opposite direction
         */
        this.reversed = false;
    }
    CalciteProgress.prototype.render = function () {
        var theme = getElementTheme(this.el);
        return (h(Host, { class: "calcite-progress", type: this.type, reversed: this.reversed, style: {
                "--percentage-value": this.value * 100 + "%"
            }, theme: theme }, h("div", { class: "calcite-progress--track" }), h("div", { class: {
                "calcite-progress--bar": true,
                "--indeterminate": this.type === "indeterminate",
                "--determinate": this.type === "determinate"
            } }), this.text ? (h("div", { class: "calcite-progress--text" }, this.text)) : null));
    };
    Object.defineProperty(CalciteProgress.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteProgress, "style", {
        get: function () { return ":host([hidden]){display:none}:host{--calcite-track-color:#eaeaea;position:relative;display:block}:host-context([theme=dark]){--calcite-track-color:#353535}.calcite-progress--bar,.calcite-progress--track{content:\"\";opacity:1;position:absolute;height:2px;top:0;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.calcite-progress--track{background:var(--calcite-track-color);z-index:0;width:100%}.calcite-progress--bar{background-color:var(--calcite-ui-blue);z-index:0}.--indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 1.5s linear infinite;animation:looping-progress-bar-ani 1.5s linear infinite}.--determinate{width:var(--percentage-value)}.calcite-progress--text{padding:20px 0 0 0}\@-webkit-keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}\@keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteProgress;
}());
export { CalciteProgress as calcite_progress };
