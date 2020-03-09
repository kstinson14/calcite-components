import{r as e,h as t,H as s,g as i}from"./p-dde25702.js";import{g as n}from"./p-c526d604.js";import{H as r}from"./p-f4073644.js";import{d as o,u as a,c as l}from"./p-6d07ea8f.js";const h=class{constructor(t){e(this,t),this.offsetDistance=o,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.getId=()=>this.el.id||`calcite-tooltip-${n()}`,this.addReferenceAria=()=>{const{_referenceElement:e}=this;e&&!e.hasAttribute("aria-describedby")&&e.setAttribute("aria-describedby",this.getId())},this.addReferenceListeners=()=>{const{_referenceElement:e}=this;e&&(e.addEventListener("mouseenter",this.show),e.addEventListener("mouseleave",this.hide),e.addEventListener("focus",this.show),e.addEventListener("blur",this.hide))},this.removeReferenceListeners=()=>{const{_referenceElement:e}=this;e&&(e.removeEventListener("mouseenter",this.show),e.removeEventListener("mouseleave",this.hide),e.removeEventListener("focus",this.show),e.removeEventListener("blur",this.hide))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?this.createPopper():this.destroyPopper()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferenceListeners(),this._referenceElement=this.getReferenceElement(),this.addReferenceListeners(),this.addReferenceAria(),this.createPopper()}componentDidLoad(){this.addReferenceListeners(),this.addReferenceAria(),this.createPopper()}componentDidUnload(){this.removeReferenceListeners(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:s}=this,i=this.getModifiers();e?a({el:t,modifiers:i,placement:s,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:s}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[s,t]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:s,_referenceElement:i}=this,n=this.getModifiers();this.popper=l({el:e,modifiers:n,open:t,placement:s,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{_referenceElement:e,open:i}=this,n=e&&i;return t(s,{role:"tooltip",class:{[r.hydratedInvisible]:!n},"aria-hidden":n?"false":"true",id:this.getId()},t("div",{class:"arrow",ref:e=>this.arrowEl=e}),t("div",{class:"container"},t("slot",null)))}get el(){return i(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.arrow,.arrow:before{position:absolute;width:8px;height:8px;z-index:-1}.arrow:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:.8125rem;line-height:1.5}"}};export{h as calcite_tooltip};