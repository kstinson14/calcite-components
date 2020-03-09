import{r as s,c as t,h as i,H as e,g as h}from"./p-dde25702.js";const a=class{constructor(i){s(this,i),this.backgroundStyle="foregroundColor",this.num=1,this.start=1,this.textLabelNext="next",this.textLabelPrevious="previous",this.total=2,this.selectedIndex=this.num,this.previousClicked=()=>{this.previousPage()},this.nextClicked=()=>{this.nextPage()},this.calcitePaginationUpdate=t(this,"calcitePaginationUpdate",7)}numWatchHandler(s){this.selectedIndex=s}selectedIndexWatchHandler(){this.calcitePaginationUpdate.emit({start:this.start,total:this.total,num:this.selectedIndex})}async nextPage(){this.selectedIndex=Math.min(this.total,this.selectedIndex+1)}async previousPage(){this.selectedIndex=Math.max(this.start,this.selectedIndex-1)}async setPage(s){this.selectedIndex=Math.max(this.start,Math.min(this.total,s))}showLeftEllipsis(){return this.selectedIndex-this.start>3}showRightEllipsis(){return this.total-this.selectedIndex>3}renderPages(){let s,t,i=[];for(this.total<=5?(s=this.start+1,t=this.total-1):this.selectedIndex<5?(s=this.start+1,t=this.start+4):this.selectedIndex+3>=this.total?(s=this.total-4,t=this.total-1):(s=this.selectedIndex-1,t=this.selectedIndex+1);s<=t;)i.push(s),s++;return i.map(s=>this.renderPage(s))}renderPage(s){return i("a",{class:{page:!0,"is-selected":s===this.selectedIndex},onClick:()=>{this.selectedIndex=s}},s)}renderLeftEllipsis(){if(this.total>5&&this.showLeftEllipsis())return i("span",{class:"ellipsis ellipsis--start"},i("calcite-icon",{scale:"s",icon:"ellipsis"}))}renderRightEllipsis(){if(this.total>5&&this.showRightEllipsis())return i("span",{class:"ellipsis ellipsis--end"},i("calcite-icon",{scale:"s",icon:"ellipsis"}))}render(){return i(e,{class:this.backgroundStyle},i("a",{class:{previous:!0,"is-disabled":this.selectedIndex<=1},title:this.textLabelPrevious,onClick:this.previousClicked},i("calcite-icon",{scale:"s",icon:"chevronLeft"})),this.renderPage(this.start),this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.total),i("a",{class:{next:!0,"is-disabled":this.selectedIndex>=this.total},title:this.textLabelNext,onClick:this.nextClicked},i("calcite-icon",{scale:"s",icon:"chevronRight"})))}get el(){return h(this)}static get watchers(){return{num:["numWatchHandler"],selectedIndex:["selectedIndexWatchHandler"]}}static get style(){return":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;background-color:var(--calcite-ui-foreground);-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host(.backgroundColor){background-color:var(--calcite-ui-background)}.next,.page,.previous{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:3px solid transparent;border-bottom:3px solid transparent;color:var(--calcite-ui-text-3);cursor:pointer}.next:hover,.page:hover,.previous:hover{color:var(--calcite-ui-text-1);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue)}.next,.previous{padding:.75em 1em}.next:hover,.previous:hover{color:var(--calcite-ui-blue);background-color:var(--calcite-ui-foreground-hover)}.next:active,.previous:active{background-color:var(--calcite-ui-foreground-press)}.next.is-disabled,.previous.is-disabled{background-color:transparent}.next.is-disabled>svg,.previous.is-disabled>svg{opacity:.3}.next{margin-right:0}.ellipsis,.page{padding:.75em 1em}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}"}};export{a as calcite_pagination};