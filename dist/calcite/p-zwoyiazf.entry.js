import{r as t,c as i,h as s,H as e,g as c}from"./p-dde25702.js";import{g as h}from"./p-c526d604.js";import{a,H as o,U as n,D as r,E as l,S as m}from"./p-9329f0c1.js";import{b as d}from"./p-f4073644.js";const u=class{constructor(s){t(this,s),this.scale="m",this.appearance="default",this.iconPosition="end",this.iconType="chevron",this.selectionMode="multi",this.items=[],this.sorted=!1,this.requestedAccordionItem="",this.sortItems=t=>t.sort((t,i)=>t.position-i.position).map(t=>t.item),this.calciteAccordionItemHasChanged=i(this,"calciteAccordionItemHasChanged",7)}connectedCallback(){["default","minimal","transparent"].includes(this.appearance)||(this.appearance="default"),["start","end"].includes(this.iconPosition)||(this.iconPosition="end"),["chevron","caret","plus-minus"].includes(this.iconType)||(this.iconType="chevron"),["s","m","l"].includes(this.scale)||(this.scale="m"),["multi","single","single-persist"].includes(this.selectionMode)||(this.selectionMode="multi")}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return s(e,null,s("slot",null))}calciteAccordionItemKeyEvent(t){let i=t.detail.item,s=t.target,e=0===this.itemIndex(s),c=this.itemIndex(s)===this.items.length-1;switch(i.keyCode){case r:c?this.focusFirstItem():this.focusNextItem(s);break;case n:e?this.focusLastItem():this.focusPrevItem(s);break;case o:this.focusFirstItem();break;case a:this.focusLastItem()}}registerCalciteAccordionItem(t){this.items.push({item:t.target,position:t.detail.position})}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionItemHasChanged.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){this.focusElement(this.items[0])}focusLastItem(){this.focusElement(this.items[this.items.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i+1]||this.items[0])}focusPrevItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return c(this)}static get style(){return":host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.8125rem;line-height:1.5}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.875rem;line-height:1.5}:host([scale=l]){--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.9375rem;line-height:1.5}:host([icon-position=start]){--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:90deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:-90deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-item-spacing-unit)}:host([icon-position=end]){--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:-90deg;--calcite-accordion-item-active-icon-rotation:-180deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:180deg;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-item-spacing-unit);--calcite-accordion-item-icon-spacing-end:0}:host{display:block;position:relative;max-width:100%;border:1px solid var(--calcite-ui-border-2);border-bottom:none;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground)}:host([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}:host([appearance=transparent]){border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}"}},p=class{constructor(s){t(this,s),this.active=!1,this.accordionItemId=`calcite-accordion-item-${h()}`,this.selectionMode=d(this.el,"selection-mode","multi"),this.iconType=d(this.el,"icon-type","chevron"),this.itemHeaderClickHander=()=>this.emitRequestedItem(),this.calciteAccordionItemKeyEvent=i(this,"calciteAccordionItemKeyEvent",7),this.calciteAccordionItemSelected=i(this,"calciteAccordionItemSelected",7),this.closeCalciteAccordionItem=i(this,"closeCalciteAccordionItem",7),this.registerCalciteAccordionItem=i(this,"registerCalciteAccordionItem",7)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.registerCalciteAccordionItem.emit({position:this.itemPosition})}render(){return s(e,{tabindex:"0","aria-expanded":this.active.toString()},s("div",{class:"accordion-item-header",onClick:this.itemHeaderClickHander},s("div",{class:"accordion-item-header-text"},s("span",{class:"accordion-item-title"},this.itemTitle),s("span",{class:"accordion-item-subtitle"},this.itemSubtitle)),s("calcite-icon",{class:"accordion-item-icon",icon:"chevron"===this.iconType?"chevronUp":"caret"===this.iconType?"caretUp":this.active?"minus":"plus",scale:"s"})),s("div",{class:"accordion-item-content"},s("slot",null)))}keyDownHandler(t){if(t.target===this.el)switch(t.keyCode){case m:case l:this.emitRequestedItem(),t.preventDefault();break;case n:case r:case o:case a:this.calciteAccordionItemKeyEvent.emit({item:t}),t.preventDefault()}}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.accordionItemId===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.accordionItemId===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.accordionItemId===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelected.emit({requestedAccordionItem:this.accordionItemId})}getItemPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return c(this)}static get style(){return":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background);color:var(--calcite-ui-text-3);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;text-decoration:none;outline:none;position:relative}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border)}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host .accordion-item-content{display:none;color:var(--calcite-ui-text-3);padding-top:0}:host .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end);color:var(--calcite-ui-text-3);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host-context([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host-context([dir=rtl]) .accordion-item-header-text{margin-left:auto;margin-right:0}:host .accordion-item-subtitle,:host .accordion-item-title{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{color:var(--calcite-ui-text-3)}:host-context([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:active) .accordion-item-title,:host(:focus) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1);font-weight:500}:host(:active) .accordion-item-subtitle,:host(:focus) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}"}};export{u as calcite_accordion,p as calcite_accordion_item};