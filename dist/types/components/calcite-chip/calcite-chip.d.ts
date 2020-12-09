import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteChip {
  /** specify the appearance style of the button, defaults to solid. */
  appearance: "solid" | "clear";
  /** specify the color of the button, defaults to blue */
  color: "blue" | "red" | "yellow" | "green" | "grey";
  /** Optionally show a button the user can click to dismiss the chip */
  dismissible?: boolean;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /** flip the icon in rtl */
  iconFlipRtl?: boolean;
  /** specify the scale of the chip, defaults to m */
  scale: "s" | "m" | "l";
  /** Select theme (light or dark) */
  theme: "light" | "dark";
  value: string;
  el: HTMLCalciteChipElement;
  /** Emitted when the dismiss button is clicked */
  calciteChipDismiss: EventEmitter;
  closeClickHandler: (event: MouseEvent) => void;
  render(): VNode;
}
