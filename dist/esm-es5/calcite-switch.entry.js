import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-30c05663.js';
import { S as SPACE, E as ENTER } from './keys-2ed3d0b9.js';
var CalciteSwitch = /** @class */ (function () {
    function CalciteSwitch(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** True if the switch is initially on */
        this.switched = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** What color the switch should be */
        this.color = "blue";
        /** The scale of the button */
        this.scale = "m";
        this.syncThisToProxyInput = function () {
            _this.switched = _this.inputProxy.hasAttribute("checked");
            _this.name = _this.inputProxy.name;
            _this.value = _this.inputProxy.value;
        };
        this.syncProxyInputToThis = function () {
            _this.switched
                ? _this.inputProxy.setAttribute("checked", "")
                : _this.inputProxy.removeAttribute("checked");
            _this.inputProxy.setAttribute("name", _this.name);
            _this.inputProxy.setAttribute("value", _this.value);
        };
        this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    }
    CalciteSwitch.prototype.onClick = function (e) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.switched = !this.switched;
        }
    };
    CalciteSwitch.prototype.keyDownHandler = function (e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.switched = !this.switched;
        }
    };
    CalciteSwitch.prototype.switchWatcher = function () {
        this.calciteSwitchChange.emit();
        this.switched
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    };
    CalciteSwitch.prototype.connectedCallback = function () {
        // prop validations
        var color = ["blue", "red"];
        if (!color.includes(this.color))
            this.color = "blue";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        this.setupProxyInput();
    };
    CalciteSwitch.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
    };
    CalciteSwitch.prototype.componentWillRender = function () {
        this.syncProxyInputToThis();
    };
    CalciteSwitch.prototype.render = function () {
        return (h(Host, { role: "checkbox", "aria-checked": this.switched.toString(), tabIndex: this.tabIndex }, h("div", { class: "track" }, h("div", { class: "handle" })), h("slot", null)));
    };
    Object.defineProperty(CalciteSwitch.prototype, "tabIndex", {
        get: function () {
            var hasTabIndex = this.el.hasAttribute("tabindex");
            if (hasTabIndex) {
                return Number(this.el.getAttribute("tabindex"));
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    CalciteSwitch.prototype.setupProxyInput = function () {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    };
    Object.defineProperty(CalciteSwitch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteSwitch, "watchers", {
        get: function () {
            return {
                "switched": ["switchWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteSwitch, "style", {
        get: function () { return ":host([hidden]){display:none}:host{--calcite-switch-track-background:#f3f3f3;--calcite-switch-track-border:#d4d4d4;--calcite-switch-handle-background:#fff;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-hover-track-background:#eaeaea;--calcite-switch-hover-track-border:#bfbfbf;--calcite-switch-switched-track-background:var(--calcite-ui-blue-hover);--calcite-switch-switched-track-border:var(--calcite-ui-blue-press);--calcite-switch-switched-handle-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue-hover);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-press);--calcite-switch-box-shadow-color:hsla(0,0%,45.9%,0.5);--calcite-switch-switched-box-shadow-color:rgba(0,122,194,0.5)}:host-context([theme=dark]){--calcite-switch-track-background:#353535;--calcite-switch-track-border:#555;--calcite-switch-handle-background:#2b2b2b;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-hover-track-background:#404040;--calcite-switch-hover-track-border:grey;--calcite-switch-switched-track-background:var(--calcite-ui-blue-hover);--calcite-switch-switched-track-border:var(--calcite-ui-blue);--calcite-switch-switched-handle-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-switched-box-shadow-color:rgba(0,160,255,0.5)}:host([color=red]){--calcite-switch-switched-track-background:var(--calcite-ui-red-hover);--calcite-switch-switched-track-border:var(--calcite-ui-red);--calcite-switch-hover-handle-border:var(--calcite-ui-red-hover);--calcite-switch-switched-handle-border:var(--calcite-ui-red);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-hover);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-press);--calcite-switch-switched-box-shadow-color:rgba(216,48,32,0.5)}:host([theme=dark][color=red]){--calcite-switch-switched-track-background:var(--calcite-ui-red-hover);--calcite-switch-switched-track-border:var(--calcite-ui-red);--calcite-switch-hover-handle-border:var(--calcite-ui-red-hover);--calcite-switch-switched-handle-border:var(--calcite-ui-red);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-press);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-press);--calcite-switch-switched-box-shadow-color:rgba(254,88,62,0.5)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;top:-.1em;tap-highlight-color:transparent;margin-right:.5em}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-switch-track-background);border-radius:30px;border:1px solid var(--calcite-switch-track-border)}.handle,.track{pointer-events:none;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-switch-handle-background);border-radius:30px;border:2px solid var(--calcite-switch-handle-border)}:host(:focus),:host(:hover){outline:none}:host(:focus) .track,:host(:hover) .track{background-color:var(--calcite-switch-hover-track-background);border-color:var(--calcite-switch-hover-track-border);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08)}:host(:focus) .handle,:host(:hover) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08);right:auto}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08)}:host([switched]:focus) .track{-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border)}:host-context([dir=rtl]){margin-right:0;margin-left:.5em}:host-context([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl]:hover) .handle{right:1px;left:auto}:host([dir=rtl][switched]) .handle,:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteSwitch;
}());
export { CalciteSwitch as calcite_switch };
