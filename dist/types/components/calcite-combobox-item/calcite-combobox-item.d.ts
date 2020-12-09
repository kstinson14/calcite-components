import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteComboboxItem {
  /** When true, the item cannot be clicked and is visually muted. */
  disabled: boolean;
  /** The parent combobox item element */
  parentItem?: HTMLCalciteComboboxItemElement;
  /** Set this to true to pre-select an item. Toggles when an item is checked/unchecked. */
  selected: boolean;
  selectedWatchHandler(newValue: boolean): void;
  /** The main label for this item. */
  textLabel: string;
  /** A unique value used to identify this item - similar to the value attribute on an <input>. */
  value: string;
  el: HTMLCalciteComboboxItemElement;
  isSelected: boolean;
  isNested: boolean;
  hasDefaultSlot: boolean;
  comboboxItemEl: HTMLElement;
  componentWillLoad(): void;
  /**
   * Emitted whenever the item is selected or unselected.
   * @event calciteComboboxItemChange
   */
  calciteComboboxItemChange: EventEmitter;
  calciteComboboxItemKeyEvent: EventEmitter;
  keyDownHandler(event: KeyboardEvent): void;
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  itemClickHandler: (event: MouseEvent) => void;
  getDepth(): boolean;
  renderIcon(scale: string): VNode;
  renderChildren(): VNode;
  render(): VNode;
}
