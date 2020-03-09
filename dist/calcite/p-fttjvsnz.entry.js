import{r as t,c as s,h as i,H as e,g as a}from"./p-dde25702.js";import{g as h}from"./p-c526d604.js";import{L as l,R as r,E as c,S as n}from"./p-9329f0c1.js";import{n as o,c as b,g as d}from"./p-f4073644.js";const u=class{constructor(i){t(this,i),this.isActive=!1,this.guid=`calcite-tab-title-${h()}`,this.calciteTabRegister=s(this,"calciteTabRegister",7),this.calciteTabUnregister=s(this,"calciteTabUnregister",7)}render(){return i(e,{id:this.el.id||this.guid,"aria-labeledby":this.labeledBy,"aria-expanded":this.isActive.toString(),role:"tabpanel"},i("section",null,i("slot",null)))}componentDidLoad(){this.calciteTabRegister.emit()}componentDidUnload(){this.calciteTabUnregister.emit()}tabChangeHandler(t){t.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&(this.tab?this.isActive=this.tab===t.detail.tab:this.getTabIndex().then(s=>{this.isActive=s===t.detail.tab}))}async getTabIndex(){return Promise.resolve(Array.prototype.indexOf.call(o(this.el.parentElement.children).filter(t=>t.matches("calcite-tab")),this.el))}updateAriaInfo(t=[],s=[]){return this.labeledBy=s[t.indexOf(this.el.id)]||null,Promise.resolve()}get el(){return a(this)}static get style(){return":host([hidden]){display:none}:host([is-active]) section{display:block}:host{display:none}:host([is-active]){display:block}section{display:none}"}},T=class{constructor(i){t(this,i),this.calciteTabChange=s(this,"calciteTabChange",7)}selectedTabChanged(){localStorage&&this.storageId&&null!=this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab})}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(t)&&(this.selectedTab=JSON.parse(localStorage.getItem(t)),this.calciteTabChange.emit({tab:this.selectedTab}))}render(){return i(e,{role:"tablist"},i("nav",{class:"tab-nav",ref:t=>this.tabNavEl=t},i("slot",null)))}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.isActive)&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteTabChange.emit({tab:t})})}focusPreviousTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s-1]||this.tabTitles[this.tabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()}focusNextTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s+1]||this.tabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()}activateTabHandler(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}globalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)}getIndexOfTabTitle(t){return this.tabTitles.indexOf(t)}get tabTitles(){return this.tabNavEl?b(this.tabNavEl,"calcite-tab-title"):[]}get el(){return a(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}static get style(){return":host([hidden]){display:none}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host-context([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"}},g=class{constructor(i){t(this,i),this.isActive=!1,this.guid=`calcite-tab-title-${h()}`,this.calciteTabsActivate=s(this,"calciteTabsActivate",7),this.calciteTabsFocusNext=s(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=s(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=s(this,"calciteTabTitleRegister",7),this.calciteTabTitleUnregister=s(this,"calciteTabTitleUnregister",7)}componentWillLoad(){this.tab&&this.isActive&&this.calciteTabsActivate.emit({tab:this.tab})}render(){return i(e,{id:this.el.id||this.guid,"aria-controls":this.controls,"aria-expanded":this.isActive.toString(),role:"tab",tabindex:"0"},i("a",null,i("slot",null)))}componentDidLoad(){this.calciteTabTitleRegister.emit()}componentDidUnload(){this.calciteTabTitleUnregister.emit()}tabChangeHandler(t){this.tab?this.isActive=this.tab===t.detail.tab:this.getTabIndex().then(s=>{this.isActive=s===t.detail.tab})}onClick(){this.calciteTabsActivate.emit({tab:this.tab})}keyDownHandler(t){switch(t.keyCode){case n:case c:this.calciteTabsActivate.emit({tab:this.tab}),t.preventDefault();break;case r:"ltr"===d(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case l:"ltr"===d(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el))}async getTabIdentifier(){return this.tab?Promise.resolve(this.tab):this.getTabIndex()}async updateAriaInfo(t=[],s=[]){return this.controls=t[s.indexOf(this.el.id)]||null,Promise.resolve()}get el(){return a(this)}static get style(){return":host([hidden]){display:none}:host{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-border-2)}:host([is-active]) a{color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue);font-weight:500}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.75rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-ui-text-3);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}"}},m=class{constructor(s){t(this,s),this.layout="inline",this.titles=[],this.tabs=[]}render(){return i(e,null,i("div",null,i("slot",{name:"tab-nav"}),i("section",null,i("slot",null))))}calciteTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter(s=>s!==t.target),this.registryHandler(),t.stopPropagation()}calciteTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter(s=>s!==t.target),this.registryHandler(),t.stopPropagation()}async registryHandler(){var t,s;if(this.tabs.some(t=>t.tab)||this.titles.some(t=>t.tab))t=this.tabs.sort((t,s)=>t.tab.localeCompare(s.tab)).map(t=>t.id),s=this.titles.sort((t,s)=>t.tab.localeCompare(s.tab)).map(t=>t.id);else{const i=await Promise.all(this.tabs.map(t=>t.getTabIndex())),e=await Promise.all(this.titles.map(t=>t.getTabIndex()));t=i.reduce((t,s,i)=>(t[s]=this.tabs[i].id,t),[]),s=e.reduce((t,s,i)=>(t[s]=this.titles[i].id,t),[])}this.tabs.forEach(i=>i.updateAriaInfo(t,s)),this.titles.forEach(i=>i.updateAriaInfo(t,s))}get el(){return a(this)}static get style(){return":host([hidden]){display:none}:host{display:block;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}:host-context([dir=rtl]){--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}:host([layout=center]){--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}:host>div{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}section{height:100%;border-top:1px solid var(--calcite-ui-border-1)}"}};export{u as calcite_tab,T as calcite_tab_nav,g as calcite_tab_title,m as calcite_tabs};