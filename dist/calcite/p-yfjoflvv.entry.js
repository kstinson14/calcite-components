import{r as e,c as t,h as s,H as i,g as n}from"./p-dde25702.js";import{g as l}from"./p-c526d604.js";import{H as r}from"./p-f4073644.js";import{d as o,u as a,c}from"./p-6d07ea8f.js";const h=class{constructor(s){e(this,s),this.addClickHandle=!1,this.closeButton=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=o,this.offsetSkidding=0,this.open=!1,this.placement="auto",this.textClose="Close",this._referenceElement=this.getReferenceElement(),this.getId=()=>this.el.id||`calcite-popover-${l()}`,this.addReferenceAria=()=>{const{_referenceElement:e}=this;e&&!e.hasAttribute("aria-describedby")&&e.setAttribute("aria-describedby",this.getId())},this.clickHandler=()=>{this.toggle()},this.addReferenceListener=()=>{const{_referenceElement:e,addClickHandle:t}=this;e&&t&&e.addEventListener("click",this.clickHandler)},this.removeReferenceListener=()=>{const{_referenceElement:e}=this;e&&e.removeEventListener("click",this.clickHandler)},this.hide=()=>{this.open=!1},this.calcitePopoverClose=t(this,"calcitePopoverClose",7),this.calcitePopoverOpen=t(this,"calcitePopoverOpen",7)}interactionElementHandler(){this.removeReferenceListener(),this.addReferenceListener()}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?(this.createPopper(),this.calcitePopoverOpen.emit()):(this.destroyPopper(),this.calcitePopoverClose.emit())}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferenceListener(),this._referenceElement=this.getReferenceElement(),this.addReferenceListener(),this.addReferenceAria(),this.createPopper()}componentDidLoad(){this.createPopper(),this.addReferenceListener(),this.addReferenceAria()}componentDidUnload(){this.removeReferenceListener(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:s}=this,i=this.getModifiers();e?a({el:t,modifiers:i,placement:s,popper:e}):this.createPopper()}async setFocus(e){var t,s;"close-button"!==e?null===(s=this.el)||void 0===s||s.focus():null===(t=this.closeButtonEl)||void 0===t||t.focus()}async toggle(){this.open=!this.open}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,flipPlacements:t,disableFlip:s,disablePointer:i,offsetDistance:n,offsetSkidding:l}=this,r={name:"flip",enabled:!s};t&&(r.options={fallbackPlacements:t});const o={name:"arrow",enabled:!i};return e&&(o.options={element:e}),[o,r,{name:"offset",enabled:!0,options:{offset:[l,n]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:s,_referenceElement:i}=this,n=this.getModifiers();this.popper=c({el:e,modifiers:n,open:t,placement:s,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}renderImage(){return this.el.querySelector("[slot=image]")?s("div",{class:"image-container"},s("slot",{name:"image"})):null}renderCloseButton(){const{closeButton:e,textClose:t}=this;return e?s("button",{ref:e=>this.closeButtonEl=e,"aria-label":t,title:t,class:{"close-button":!0},onClick:this.hide},s("calcite-icon",{icon:"x",scale:"s"})):null}render(){const{_referenceElement:e,open:t,disablePointer:n}=this,l=e&&t,o=n?null:s("div",{class:"arrow",ref:e=>this.arrowEl=e});return s(i,{role:"dialog",class:{[r.hydratedInvisible]:!l},"aria-hidden":l?"false":"true",id:this.getId()},o,s("div",{class:"container"},this.renderImage(),s("div",{class:"content"},s("slot",null),this.renderCloseButton())))}get el(){return n(this)}static get watchers(){return{addClickHandle:["interactionElementHandler"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.arrow,.arrow:before{position:absolute;width:8px;height:8px;z-index:-1}.arrow:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);position:relative;max-width:350px;overflow:hidden;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-1)}.container,.content{display:-ms-flexbox;display:flex}.content{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;line-height:24px}.close-button{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:40px;height:50px;z-index:1;color:var(--calcite-ui-text-1);padding:16px 12px;border:none;border-radius:0 var(--calcite-border-radius) 0 0;display:block;cursor:pointer;background:var(--calcite-ui-foreground)}.close-button:hover{background:var(--calcite-ui-foreground-hover)}.close-button:active{background:var(--calcite-ui-foreground-press)}:host-context([dir=rtl]) .close-button{border-radius:var(--calcite-border-radius) 0 0 0}.image-container{overflow:hidden;max-height:200px;margin:5px}slot[name=image]::slotted(img){height:auto;width:100%;max-height:200px;-o-object-position:50% 50%;object-position:50% 50%;-o-object-fit:cover;object-fit:cover}"}};export{h as calcite_popover};