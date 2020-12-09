import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { FocusRequest } from "../../interfaces/Label";
export declare class CalciteLabel {
  el: HTMLCalciteLabelElement;
  /** specify the status of the label and any child input / input messages */
  status: "invalid" | "valid" | "idle";
  /** The id of the input associated with the label */
  for: string;
  /** specify the scale of the input, defaults to m */
  scale: "s" | "m" | "l";
  /** specify theme of the label and its any child input / input messages */
  theme: "light" | "dark";
  /** is the wrapped element positioned inline with the label slotted text */
  layout: "inline" | "inline-space-between" | "default";
  /** Turn off spacing around the label */
  disableSpacing?: boolean;
  /** is the label disabled  */
  disabled?: boolean;
  disabledWatcher(): void;
  calciteLabelFocus: EventEmitter<FocusRequest>;
  onClick({ target }: MouseEvent): void;
  private getAttributes;
  connectedCallback(): void;
  componentDidLoad(): void;
  render(): VNode;
  private labelEl;
  private spanEl;
  private setDisabledControls;
}
