import{r as t,c as i,h as e,H as a,g as s}from"./p-ff68592a.js";import{h as n,g as r}from"./p-fbd3d700.js";import{g as o}from"./p-a4e6e35b.js";const l=class{constructor(e){t(this,e),this.calciteRatingChange=i(this,"calciteRatingChange",7),this.scale="m",this.value=0,this.readOnly=!1,this.disabled=!1,this.displayValue=!1,this.intlRating="Rating",this.intlStars="stars: ${num}",this.guid="calcite-ratings-"+o()}handleLabelFocus(t){n(t.detail.labelEl,this.el)&&t.detail.interactedEl!==this.el&&!this.el.contains(t.detail.interactedEl)&&this.setFocus()}blurHandler(){this.hasFocus=!1}renderStars(){return[1,2,3,4,5].map((t=>{const i=this.value>=t,a=this.average&&!this.value&&t<=this.average,s=t<=this.hoverValue,n=this.average&&this.average+1-t,r=!this.value&&!s&&n>0&&n<1;return e("span",{class:{wrapper:!0}},e("label",{class:{star:!0,focused:this.hasFocus&&this.focusValue===t,selected:i,average:a,hovered:s,partial:r},htmlFor:`${this.guid}-${t}`,onMouseOver:()=>{this.hoverValue=t}},e("calcite-icon",{"aria-hidden":"true",class:"icon",icon:i||a||this.readOnly?"star-f":"star",scale:this.scale}),r&&e("div",{class:"fraction",style:{width:100*n+"%"}},e("calcite-icon",{icon:"star-f",scale:this.scale,theme:this.theme})),e("span",{class:"visually-hidden"},this.intlStars.replace("${num}",""+t))),e("input",{checked:t===this.value,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:`${this.guid}-${t}`,name:this.guid,onChange:()=>this.updateValue(t),onFocus:()=>{this.hasFocus=!0,this.focusValue=t},type:"radio",value:t}))}))}render(){var t,i;const s=r(this.el);return e(a,{dir:s},e("fieldset",{class:"fieldset",onBlur:()=>this.hoverValue=null,onMouseLeave:()=>this.hoverValue=null,onTouchEnd:()=>this.hoverValue=null},e("legend",{class:"visually-hidden"},this.intlRating),this.renderStars()),this.count||this.average?e("calcite-chip",{dir:s,scale:this.scale,theme:this.theme,value:null===(t=this.count)||void 0===t?void 0:t.toString()},this.average&&e("span",{class:"number--average"},this.average.toString()),this.count&&e("span",{class:"number--count"},"(",null===(i=this.count)||void 0===i?void 0:i.toString(),")")):null)}updateValue(t){this.value=t,this.calciteRatingChange.emit({value:t})}async setFocus(){this.el.querySelector("input").focus(),this.hasFocus=!0}get el(){return s(this)}};l.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-rating-spacing-unit:0.25rem}:host{--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){--calcite-rating-spacing-unit:0.75rem}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{padding:0;margin:0;border-width:0;display:inline-block}.wrapper{margin-right:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .wrapper{margin-right:0;margin-left:var(--calcite-rating-spacing-unit)}.star{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;position:relative;display:inline-block;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-transform:scale(1);transform:scale(1);cursor:pointer}.star:active{-webkit-transform:scale(1.1);transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-yellow-1)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-blue-1)}.hovered:not(.selected){-webkit-transform:scale(0.9);transform:scale(0.9)}:host .fraction{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .fraction{right:0;left:unset}calcite-chip{cursor:default;pointer-events:none}.number--average{font-weight:700}.number--count{font-style:italic;color:var(--calcite-ui-text-2)}.number--count:not(:first-child){margin-left:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .number--count:not(:first-child){margin-right:var(--calcite-rating-spacing-unit);margin-left:0}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";export{l as calcite_rating}