import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteRadioButton {
  el: HTMLCalciteRadioButtonElement;
  /** The checked state of the radio button. */
  checked: boolean;
  checkedChanged(newChecked: boolean): void;
  /** The disabled state of the radio button. */
  disabled: boolean;
  disabledChanged(disabled: boolean): void;
  /** The focused state of the radio button. */
  focused: boolean;
  focusedChanged(focused: boolean): void;
  /** The id attribute of the radio button.  When omitted, a globally unique identifier is used. */
  guid: string;
  /** The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable. */
  hidden: boolean;
  hiddenChanged(newHidden: boolean): void;
  /** The hovered state of the radio button. */
  hovered: boolean;
  /** The name of the radio button.  <code>name</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
  name: string;
  nameChanged(newName: string): void;
  /** Requires that a value is selected for the radio button group before the parent form will submit. */
  required: boolean;
  requiredChanged(required: boolean): void;
  /** The scale (size) of the radio button.  <code>scale</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
  scale: "s" | "m" | "l";
  /** The color theme of the radio button, <code>theme</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
  theme: "light" | "dark";
  /** The value of the radio button. */
  value: string;
  private initialChecked;
  private input;
  /** @internal */
  emitCheckedChange(): Promise<void>;
  private checkLastRadioButton;
  private uncheckAllRadioButtonsInGroup;
  private uncheckOtherRadioButtonsInGroup;
  /** Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.
   * Since this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event
   * directly on the element, but instead either attach it to a node that contains all of the radio buttons in the group
   * or use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group.
   */
  calciteRadioButtonChange: EventEmitter;
  /** Fires when the checked property changes.  This is an internal event used for styling purposes only.
   * Use calciteRadioButtonChange or calciteRadioButtonGroupChange for responding to changes in the checked value for forms.
   * @internal
   */
  calciteRadioButtonCheckedChange: EventEmitter;
  /** Fires when the radio button is either focused or blurred. */
  calciteRadioButtonFocusedChange: EventEmitter;
  check(event: MouseEvent | FocusEvent): void;
  mouseenter(): void;
  mouseleave(): void;
  private formResetHandler;
  private onInputBlur;
  private onInputFocus;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private renderLabel;
  render(): VNode;
}
