import{r as t,h as s,H as i,g as e}from"./p-dde25702.js";import{g as a}from"./p-c526d604.js";const r=class{constructor(s){t(this,s),this.isActive=!1,this.inline=!1,this.type="indeterminate",this.value=0,this.text="",this.loaderBarOffsets=[0,0,0],this.loaderBarRates=[1,2.25,3.5],this.isEdge=!1,this.animationID=null,this.guid=`calcite-loader-${a()}`}componentWillLoad(){this.isEdge=/Edge/.test(navigator.userAgent),this.isEdge&&this.updateOffset()}componentDidUnload(){this.animationID&&window.cancelAnimationFrame(this.animationID)}render(){const t=this.el.id||this.guid,e={"aria-valuenow":this.value,"aria-valuemin":0,"aria-valuemax":100},a=this.inline?16:56,r=this.inline?"0 0 16 16":"0 0 56 56",h="determinate"===this.type,o={};this.isEdge&&(o["--calcite-loader-offset"]=`${this.loaderBarOffsets[0]}%`,o["--calcite-loader-offset2"]=`${this.loaderBarOffsets[1]}%`,o["--calcite-loader-offset3"]=`${this.loaderBarOffsets[2]}%`);const l={"--calcite-loader-progress":`${-400-4*this.value}%`};return s(i,Object.assign({id:t,role:"progressbar"},"determinate"===this.type?e:{},{style:o}),s("svg",{viewBox:r,class:"loader__square"},s("rect",{width:a,height:a})),s("svg",{viewBox:r,class:"loader__square loader__square--2"},s("rect",{width:a,height:a})),s("svg",{viewBox:r,class:"loader__square loader__square--3",style:h?l:{}},s("rect",{width:a,height:a})),this.text?s("div",{class:"loader__text"},this.text):"",this.value?s("div",{class:"loader__percentage"},Math.floor(this.value)):"")}updateOffset(){this.loaderBarOffsets=this.rotateLoaderBars(this.loaderBarOffsets),this.animationID=window.requestAnimationFrame(()=>this.updateOffset())}rotateLoaderBars(t){return t.map((t,s)=>t>-400?t-this.loaderBarRates[s]:0)}get el(){return e(this)}static get style(){return":host([hidden]){display:none}:host{--calcite-loader-spot:var(--calcite-ui-blue);--calcite-loader-spot-light:var(--calcite-ui-blue);--calcite-loader-spot-dark:var(--calcite-ui-blue);--calcite-loader-neutral:#eaeaea;--calcite-loader-padding:4rem}:host-context([theme=dark]){--calcite-loader-neutral:#151515}:host([no-padding]){--calcite-loader-padding:0}:host{position:relative;display:none;padding-bottom:var(--calcite-loader-padding);padding-top:var(--calcite-loader-padding);margin-left:auto;margin-right:auto;min-height:54px;stroke:var(--calcite-loader-light);stroke-width:6px;stroke-dashoffset:0;fill:none;animation:loader-color-shift 2s linear infinite alternate-reverse}:host([is-active]){display:block}.loader__text{margin-top:var(--calcite-loader-padding);line-height:1.5}.loader__percentage,.loader__text{display:block;text-align:center;font-size:.875rem}.loader__percentage{left:50%;margin-top:27px;line-height:.25}.loader__percentage,.loader__square{width:54px;position:absolute;top:var(--calcite-loader-padding);margin-left:-27px}.loader__square{height:54px;left:0;left:50%;stroke-dasharray:50% 350%;-webkit-animation:loader-clockwise 2s linear infinite;animation:loader-clockwise 2s linear infinite}.loader__square--2{stroke-dasharray:100% 225% 50% 25%;-webkit-animation:loader-clockwise 1s linear infinite;animation:loader-clockwise 1s linear infinite}.loader__square--3{stroke-dasharray:50% 50% 75% 225%;-webkit-animation:loader-clockwise 1.85s linear infinite;animation:loader-clockwise 1.85s linear infinite}\@supports (-ms-ime-align:auto){.loader__square{stroke-dashoffset:var(--calcite-loader-offset);-webkit-animation:none;animation:none}.loader__square--2{stroke-dashoffset:var(--calcite-loader-offset2)}.loader__square--3{stroke-dashoffset:var(--calcite-loader-offset3)}}:host([type=determinate]){stroke:var(--calcite-loader-neutral);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__square--3{stroke:var(--calcite-loader-spot);stroke-dasharray:400%;stroke-dashoffset:var(--calcite-loader-progress);-webkit-transition:all 50ms linear;transition:all 50ms linear;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none}:host([inline]){stroke:currentColor;stroke-width:4px;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:16px;min-height:16px;width:16px;margin-right:8px;vertical-align:-2px}:host([inline][dir=rtl]){margin-left:8px;margin-right:0}:host([is-active][inline]){display:inline-block}:host([inline]) .loader__square{margin:0;position:absolute;top:0;left:0;width:16px;height:16px}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@-webkit-keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}\@keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}"}};export{r as calcite_loader};