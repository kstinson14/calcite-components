/// <reference types="lodash" />
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { StrictModifiers } from "@popperjs/core";
interface ItemData {
  label: string;
  value: string;
}
export declare class CalciteCombobox {
  active: boolean;
  activeHandler(): void;
  disabled: boolean;
  label: string;
  placeholder?: string;
  /** specify the maximum number of combobox items (including nested children) to display before showing the scroller */
  maxItems: number;
  /** specify the scale of the combobox, defaults to m */
  scale: "s" | "m" | "l";
  /** Select theme (light or dark) */
  theme: "light" | "dark";
  el: HTMLCalciteComboboxElement;
  items: HTMLCalciteComboboxItemElement[];
  selectedItems: HTMLCalciteComboboxItemElement[];
  visibleItems: HTMLCalciteComboboxItemElement[];
  textInput: HTMLInputElement;
  data: ItemData[];
  observer: MutationObserver;
  /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
  private maxScrollerHeight;
  private popper;
  private menuEl;
  private referenceEl;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  reposition(): Promise<void>;
  calciteLookupChange: EventEmitter;
  calciteComboboxChipDismiss: EventEmitter;
  documentClickHandler(event: Event): void;
  calciteComboboxItemChangeHandler(event: CustomEvent<HTMLCalciteComboboxItemElement>): void;
  calciteChipDismissHandler(event: CustomEvent<HTMLCalciteChipElement>): void;
  setInactiveIfNotContained: (target: HTMLElement) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  setReferenceEl: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  private getMaxScrollerHeight;
  inputHandler: (event: Event) => void;
  handleInputKeyDown: (event: KeyboardEvent) => void;
  filterItems: ((value: string) => void) & import("lodash").Cancelable;
  toggleSelection(item: HTMLCalciteComboboxItemElement, value?: boolean): void;
  getVisibleItems(): HTMLCalciteComboboxItemElement[];
  getSelectedItems(): HTMLCalciteComboboxItemElement[];
  updateItems(): void;
  getData(): ItemData[];
  getItems(): HTMLCalciteComboboxItemElement[];
  calciteComboboxItemKeyEventHandler(event: CustomEvent<{
    event: KeyboardEvent;
    item: HTMLCalciteComboboxItemElement;
  }>): void;
  closeCalciteCombobox(): void;
  focusFirstItem(): void;
  focusLastItem(): void;
  focusNextItem(item: HTMLCalciteComboboxItemElement): void;
  focusPrevItem(item: HTMLCalciteComboboxItemElement): void;
  itemIndex(item: HTMLCalciteComboboxItemElement): number;
  comboboxFocusHandler: () => void;
  comboboxBlurHandler: (event: FocusEvent) => void;
  render(): VNode;
}
export {};
