import { EventEmitter } from "../../stencil.core";
import { Scale } from "../../interfaces/common";
export declare class CalciteButtonWithDropdown {
    el: HTMLElement;
    /** specify the color of the control, defaults to blue */
    color: "blue" | "dark" | "light" | "red";
    /** select theme (light or dark), defaults to light */
    theme: "light" | "dark";
    /** specify the scale of the control, defaults to m */
    scale: Scale;
    /** text for primary action button  */
    primaryText: string;
    /** optionally pass an icon to display on the primary button - accepts Calcite UI icon names  */
    primaryIcon?: string;
    /** aria label for overflow button */
    dropdownLabel: string;
    /** optionally add a calcite-loader component to the control,
      disabling interaction. with the primary button */
    loading?: boolean;
    /** is the control disabled  */
    disabled?: boolean;
    /** fired when the modal begins the open animation */
    primaryButtonClicked: EventEmitter;
    validateColor(): void;
    validateScale(): void;
    validateTheme(): void;
    connectedCallback(): void;
    render(): any;
    private primaryButtonClickedHandler;
    private get dropdownScale();
}
