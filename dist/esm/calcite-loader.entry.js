import { r as registerInstance, h, H as Host, g as getElement } from './core-30c05663.js';
import { g as guid } from './guid-cb609d41.js';

const CalciteLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Show the loader */
        this.isActive = false;
        /** Inline loaders are smaller and will appear to the left of the text */
        this.inline = false;
        /** Percent complete of 100, only valid for determinate indicators */
        this.value = 0;
        /** Text which should appear under the loading indicator (optional) */
        this.text = "";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** @internal */
        this.guid = `calcite-loader-${guid()}`;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const id = this.el.id || this.guid;
        const size = this.inline ? 20 : 56;
        const radius = this.inline ? 9 : 25;
        const viewbox = `0 0 ${size} ${size}`;
        const isDeterminate = this.type === "determinate";
        const circumference = 2 * radius * Math.PI;
        const progress = (this.value / 100) * circumference;
        const remaining = circumference - progress;
        const value = Math.floor(this.value);
        const hostAttributes = {
            "aria-valuenow": value,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            complete: value === 100
        };
        const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
        const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
        return (h(Host, Object.assign({ id: id, role: "progressbar" }, (isDeterminate ? hostAttributes : {})), h("div", { class: "loader__svgs" }, h("svg", { viewBox: viewbox, class: "loader__svg loader__svg--1" }, h("circle", Object.assign({}, svgAttributes))), h("svg", { viewBox: viewbox, class: "loader__svg loader__svg--2" }, h("circle", Object.assign({}, svgAttributes))), h("svg", Object.assign({ viewBox: viewbox, class: "loader__svg loader__svg--3" }, (isDeterminate ? { style: determinateStyle } : {})), h("circle", Object.assign({}, svgAttributes)))), this.text && h("div", { class: "loader__text" }, this.text), isDeterminate && h("div", { class: "loader__percentage" }, value)));
    }
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";:host,:host([hidden]){display:none}:host{position:relative;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:56px;stroke:var(--calcite-ui-blue);stroke-width:3;fill:none;opacity:1;-webkit-transform:scale(1);transform:scale(1);animation:loader-color-shift 6s linear infinite alternate-reverse}:host([no-padding]){padding-top:0;padding-bottom:0}:host([is-active]){display:block}.loader__text{margin-top:5rem;line-height:1.5}.loader__percentage,.loader__text{display:block;text-align:center;font-size:.875rem}.loader__percentage{margin-top:28px;color:var(--calcite-ui-text-1);line-height:.25}.loader__percentage,.loader__svgs{width:56px;position:absolute;top:4rem;left:50%;margin-left:-28px;-webkit-transform:scale(1);transform:scale(1)}.loader__svgs{opacity:1}.loader__svg,.loader__svgs{height:56px;overflow:visible}.loader__svg{width:56px;position:absolute;top:0;left:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}\@supports (display:grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){stroke:var(--calcite-ui-border-3);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__svg--3{stroke:var(--calcite-ui-blue);stroke-dasharray:157.0795;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none;-webkit-transition:all .1s linear;transition:all .1s linear}:host([inline]){stroke:currentColor;stroke-width:2;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:20px;min-height:20px;width:20px;margin-right:10px;vertical-align:-4px}:host([inline][dir=rtl]){margin-left:10px;margin-right:0}:host([is-active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:20px;height:20px}:host([inline]) .loader__svg{width:20px;height:20px}:host([complete]){-webkit-transition:opacity .2s linear 1s,-webkit-transform .2s linear 1s;transition:opacity .2s linear 1s,-webkit-transform .2s linear 1s;transition:opacity .2s linear 1s,transform .2s linear 1s;transition:opacity .2s linear 1s,transform .2s linear 1s,-webkit-transform .2s linear 1s}:host([complete]),:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:center;transform-origin:center}:host([complete]) .loader__svgs{-webkit-transition:opacity .18s linear .8s,-webkit-transform .18s linear .8s;transition:opacity .18s linear .8s,-webkit-transform .18s linear .8s;transition:opacity .18s linear .8s,transform .18s linear .8s;transition:opacity .18s linear .8s,transform .18s linear .8s,-webkit-transform .18s linear .8s}:host([complete]) .loader__percentage{color:var(--calcite-ui-blue);-webkit-transform:scale(1.075);transform:scale(1.075);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color .2s linear,-webkit-transform .2s linear;transition:color .2s linear,-webkit-transform .2s linear;transition:color .2s linear,transform .2s linear;transition:color .2s linear,transform .2s linear,-webkit-transform .2s linear}.loader__svg--1{stroke-dasharray:28.0499107143% 140.2495535714%;-webkit-animation-duration:.72s;animation-duration:.72s}\@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}to{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}to{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}.loader__svg--2{stroke-dasharray:56.0998214286% 140.2495535714%;-webkit-animation-duration:.96s;animation-duration:.96s}\@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}to{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}to{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}.loader__svg--3{stroke-dasharray:14.0249553571% 140.2495535714%;-webkit-animation-duration:1.16s;animation-duration:1.16s}\@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}to{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}\@keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}to{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue)}33%{stroke:var(--calcite-ui-blue-press)}66%{stroke:var(--calcite-ui-blue-hover)}to{stroke:var(--calcite-ui-blue)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue)}33%{stroke:var(--calcite-ui-blue-press)}66%{stroke:var(--calcite-ui-blue-hover)}to{stroke:var(--calcite-ui-blue)}}\@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"; }
};

export { CalciteLoader as calcite_loader };
