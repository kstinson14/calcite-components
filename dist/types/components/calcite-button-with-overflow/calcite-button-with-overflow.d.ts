import { EventEmitter } from "../../stencil.core";
import { Scale } from "../../interfaces/common";
export declare class CalciteButtonWithOverflow {
    el: HTMLElement;
    /** specify the color of the control, defaults to blue */
    color: "blue" | "dark" | "light" | "red";
    /** Select theme (light or dark) */
    theme: "light" | "dark";
    /** specify the scale of the control, defaults to m */
    scale: Scale;
    /** text for primary action button  */
    primaryText: string;
    /** aria label for overflow button */
    overflowLabel: string;
    /** optionally add a calcite-loader component to the control,
      disabling interaction. with the primary button */
    loading?: boolean;
    /** is the control disabled  */
    disabled?: boolean;
    /** Fired when the modal begins the open animation */
    primaryButtonClicked: EventEmitter;
    connectedCallback(): void;
    render(): any;
    private primaryButtonClickedHandler;
    private get dropdownAlignment();
    private get dropdownScale();
}
