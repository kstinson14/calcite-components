import{r as t,c as e,h as s,H as i,g as h}from"./p-dde25702.js";import{S as a,E as n,c as l,a as r,H as c,P as o,b as d,L as u,D,R as p,U as y}from"./p-9329f0c1.js";const w=class{constructor(s){t(this,s),this.day=0,this.enable=!0,this.selected=!1,this.active=!1,this.calciteDaySelect=e(this,"calciteDaySelect",7)}componentWillUpdate(){}render(){return s(i,{class:`${this.active?"active":""}\n        ${this.enable?"enabled":"disabled"}\n        ${this.selected?"selected-day":""}`,role:"gridcell",tabindex:this.selected||this.active?0:-1},s("span",{class:"day"},this.day))}onClick(){this.enable&&(this.selected=!0)&&this.calciteDaySelect.emit()}keyDownHandler(t){t.keyCode!==a&&t.keyCode!==n||this.enable&&(this.selected=!0)&&this.calciteDaySelect.emit()}get el(){return h(this)}static get style(){return":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;outline:none;color:var(--calcite-ui-text-3);padding:.3rem .4rem;cursor:pointer;width:calc(100% / 7)}:host .disabled{pointer-events:none}:host .day{display:-ms-flexbox;display:flex;width:100%;border-radius:100%;font-size:14px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:2rem;width:2rem}:host(.active) .day,:host(:focus) .day,:host(:hover) .day{background-color:var(--calcite-ui-foreground-hover);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-ui-text-1)}:host(.selected-day) .day,:host(:focus.active) .day{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:var(--calcite-ui-blue);border-radius:100%;color:var(--calcite-ui-foreground);font-weight:500}:host(.disabled){cursor:default}:host(.active) .disabled .day,:host(.disabled) .day,:host(:focus.active) .disabled .day,:host(:hover) .disabled .day{color:#bfbfbf;background:none}"}},g=class{constructor(s){t(this,s),this.month=0,this.year=0,this.startOfWeek=0,this.locale="en-US",this.calciteDateSelect=e(this,"calciteDateSelect",7),this.calciteActiveDateChange=e(this,"calciteActiveDateChange",7)}componentWillUpdate(){}render(){let t=this.getLocalizedWeekday(),e=[...Array(new Date(this.year,this.month+1,0).getDate()).keys()],h=this.getPrevMonthdays(this.month,this.year),a=this.getNextMonthdays(this.month,this.year),n=[],l=[...h.map(t=>s("calcite-date-day",{day:t,enable:!1})),...e.map(t=>s("calcite-date-day",{day:t+1,enable:this.validateDate(t+1,this.month,this.year),selected:this.isSelectedDate(this.year,this.month,t+1),active:this.activeDate.getDate()===t+1,onCalciteDaySelect:()=>this.onSelectDate(t+1)})),...a.map(t=>s("calcite-date-day",{day:t+1,enable:!1}))];for(let s=0;s<l.length;s+=7)n.push(l.slice(s,s+7));return s(i,null,s("div",{class:"calender",role:"grid"},s("div",{class:"week-headers",role:"presentation"},t.map(t=>s("span",{class:"week-header",role:"columnheader"},t))),n.map(t=>s("div",{class:"week-days",role:"row"},t))))}keyDownHandler(t){switch(t.keyCode){case y:t.preventDefault(),this.addDaysToActiveDate(-7);break;case p:t.preventDefault(),this.addDaysToActiveDate(1);break;case D:t.preventDefault(),this.addDaysToActiveDate(7);break;case u:t.preventDefault(),this.addDaysToActiveDate(-1);break;case d:t.preventDefault(),this.addMonthToActiveDate(-1);break;case o:t.preventDefault(),this.addMonthToActiveDate(1);break;case c:t.preventDefault(),this.activeDate.setDate(1),this.addDaysToActiveDate();break;case r:t.preventDefault(),this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate()),this.addDaysToActiveDate();break;case n:case a:t.preventDefault(),this.selectedDate=this.activeDate,this.calciteDateSelect.emit();break;case l:t.preventDefault(),this.activeDate=this.selectedDate,this.calciteActiveDateChange.emit()}}mouseoverHandler(t){let e=t.target.day||this.activeDate.getDate();if(t.target.enable&&e!=this.activeDate.getDate()){let[t,s,i]=[e,this.activeDate.getMonth(),this.activeDate.getFullYear()];this.validateDate(t,s,i)&&(this.activeDate=new Date(i,s,t),this.calciteActiveDateChange.emit())}}addMonthToActiveDate(t){let[e,s,i]=[this.activeDate.getDate(),this.activeDate.getMonth(),this.activeDate.getFullYear()];s+=t,12===s&&(s=0,i+=1),-1===s&&(s=11,i-=1),this.validateDate(e,s,i)&&(this.activeDate=new Date(i,s,e),this.calciteActiveDateChange.emit())}addDaysToActiveDate(t=0){let[e,s,i]=[this.activeDate.getDate(),this.activeDate.getMonth(),this.activeDate.getFullYear()];e+=t;let h=new Date(i,s+1,0).getDate(),a=new Date(i,s,0).getDate();e>h&&(e-=h,s+=1,12===s&&(s=0,i+=1)),e<0&&(e=a+e,s-=1,-1===s&&(s=11,i-=1)),this.validateDate(e,s,i)&&(this.activeDate=new Date(i,s,e),this.calciteActiveDateChange.emit())}onSelectDate(t){this.selectedDate=new Date(this.year,this.month,t),this.calciteDateSelect.emit()}isSelectedDate(t,e,s){return new Date(t,e,s).toDateString().substr(0,10)===this.selectedDate.toDateString().substr(0,10)}validateDate(t,e,s){let i=!0;if(this.min){let h=this.min.getFullYear(),a=this.min.getMonth(),n=this.min.getDate();i=i&&(h<s||h===s&&a<e||a===e&&n<t)}if(this.max){let h=this.max.getFullYear(),a=this.max.getMonth(),n=this.max.getDate();i=i&&(h>s||h===s&&a>e||a===e&&n>t)}return i}getPrevMonthdays(t,e){let s=new Date(e,t,1).getDay(),i=[],h=new Date(e,t,0).getDate();if(s===this.startOfWeek)return i;for(let a=(6-this.startOfWeek+s)%7;a>=0;a--)i.push(h-a);return i}getNextMonthdays(t,e){let s=new Date(e,t+1,0).getDay();return s===(this.startOfWeek+6)%7?[]:[...Array((6-(s-this.startOfWeek))%7).keys()]}getLocalizedWeekday(){let t=1,e=[],s=[],i=new Date;for(;t<8;t++){i.setDate(t);let h=new Intl.DateTimeFormat(this.locale,{weekday:"short"}).format(i);i.getDay()===this.startOfWeek||e.length>0?e.push(h):s.push(h)}return[...e,...s]}get el(){return h(this)}static get style(){return":host([hidden]){display:none}.calender .week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid var(--calcite-ui-border-3);border-top:1px solid var(--calcite-ui-border-3)}.calender .week-headers .week-header{color:var(--calcite-ui-text-2);padding:.75rem 0;text-transform:uppercase;font-weight:600;font-size:11px;width:calc(100% / 7);text-align:center}.calender .week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"}},m=class{constructor(s){t(this,s),this.month=0,this.year=0,this.locale="en-US",this.prevMonthLabel="",this.nextMonthLabel="",this.calciteMonthChange=e(this,"calciteMonthChange",7),this.calciteYearChange=e(this,"calciteYearChange",7)}monthChange(){this.calciteMonthChange.emit()}yearChange(){this.calciteYearChange.emit()}componentWillUpdate(){}render(){let t=this.getLocalizedMonths()[this.month];return s(i,null,s("div",{class:"month-year","aria-hidden":"true"},s("button",{class:"left-icon","aria-label":this.prevMonthLabel,onClick:()=>this.selectPrevMonth()},s("calcite-icon",{icon:"chevron-left",scale:"s"})),s("div",{class:"month-year-text"},s("span",{class:"month",role:"heading"},t),s("input",{class:"year",type:"number",value:this.year,min:this.min&&this.min.getFullYear(),max:this.max&&this.max.getFullYear(),onChange:t=>this.onYearChange(t)})),s("button",{class:"right-icon","aria-label":this.nextMonthLabel,onClick:()=>this.selectNextMonth()},s("calcite-icon",{icon:"chevron-right",scale:"s"}))))}selectPrevMonth(){if(0===this.month){if(!this.validateYear(this.year-1))return;this.year-=1}this.validateMonth((12+this.month-1)%12,this.year)&&(this.month=(12+this.month-1)%12)}selectNextMonth(){if(11===this.month){if(!this.validateYear(this.year+1))return;this.year+=1}this.validateMonth((this.month+1)%12,this.year)&&(this.month=(this.month+1)%12)}validateYear(t){let e=!0;return this.min&&(e=e&&t>=this.min.getFullYear()),this.max&&(e=e&&t<=this.max.getFullYear()),e}validateMonth(t,e){let s=!0;return this.min&&(s=s&&!!this.validateYear(e)&&(e!==this.min.getFullYear()||t>=this.min.getMonth())),this.max&&(s=s&&!!this.validateYear(e)&&(e!==this.max.getFullYear()||t<=this.max.getMonth())),s}onYearChange(t){this.year=parseInt(t.target.value)}getLocalizedMonths(){let t=0,e=[],s=new Date;for(;t<12;t++)s.setMonth(t),e.push(new Intl.DateTimeFormat(this.locale,{month:"long"}).format(s));return e}get el(){return h(this)}static get watchers(){return{month:["monthChange"],year:["yearChange"]}}static get style(){return":host([hidden]){display:none}.month-year{display:-ms-flexbox;display:flex}input{font-family:inherit;text-align:center}.left-icon,.right-icon{color:var(--calcite-ui-text-3);-ms-flex-positive:1;flex-grow:1;outline:none;padding:0;border:none;color:inherit;background-color:var(--calcite-ui-foreground);cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.left-icon:focus,.left-icon:hover,.right-icon:focus,.right-icon:hover{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-hover)}.left-icon:active,.right-icon:active{background-color:var(--calcite-ui-foreground-pressed)}.month-year-text{padding:.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1;width:50%;-ms-flex-pack:center;justify-content:center}.month,.year{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground);font-size:1rem;line-height:1.5;font-weight:500}.year{border:none;width:60px;padding:0;margin:0}input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none}"}},C=class{constructor(s){t(this,s),this.value="",this.min="",this.max="",this.placeholder="mm/dd/yyyy",this.prevMonthLabel="",this.nextMonthLabel="",this.startOfWeek=0,this.locale="en-GB",this.valueAsDate=isNaN(Date.parse(this.value))?null:this.generateDate(this.value),this.noCalendarInput=!1,this.showCalendar=!1,this.activeDate=isNaN(Date.parse(this.value))?new Date:this.generateDate(this.value),this.syncThisToProxyInput=()=>{this.value=this.inputProxy.valueAsDate&&this.inputProxy.valueAsDate.toISOString()||"",this.min=this.inputProxy.min,this.max=this.inputProxy.max},this.syncProxyInputToThis=()=>{this.inputProxy.valueAsDate=this.valueAsDate,this.inputProxy.min=this.min,this.inputProxy.max=this.max},this.calciteDateChange=e(this,"calciteDateChange",7)}onNameChanged(t){isNaN(Date.parse(t))||(this.valueAsDate=this.generateDate(t),this.activeDate=this.generateDate(t))}connectedCallback(){this.setupProxyInput()}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){let t=this.valueAsDate||new Date;return s(i,{role:"application",expanded:this.showCalendar},!this.noCalendarInput&&s("div",{class:`date-input-wrapper ${this.showCalendar?"expanded":""}`,role:"application"},s("calcite-icon",{icon:"calendar",class:"calendar-icon",scale:"s"}),s("input",{type:"text",placeholder:this.placeholder,value:this.valueAsDate?new Intl.DateTimeFormat(this.locale).format(this.valueAsDate):"",class:"date-input",onFocus:()=>this.expandCalendar(),onInput:t=>this.setDate(t.target)})),this.showCalendar&&s("div",{class:"calendar-picker-wrapper"},s("calcite-date-month-header",{month:this.getMonth(),year:this.getYear(),selectedDate:t,prevMonthLabel:this.prevMonthLabel,nextMonthLabel:this.nextMonthLabel,locale:this.locale,min:this.min?new Date(this.min):null,max:this.max?new Date(this.max):null,onCalciteMonthChange:t=>this.setMonth(t.target),onCalciteYearChange:t=>this.setYear(t.target)}),s("calcite-date-month",{month:this.getMonth(),year:this.getYear(),min:this.min?new Date(this.min):null,max:this.max?new Date(this.max):null,selectedDate:t,activeDate:this.activeDate,startOfWeek:this.startOfWeek,locale:this.locale,onCalciteDateSelect:t=>{this.closeCalendar(),this.setDate(t.target)},onCalciteActiveDateChange:t=>this.setActiveDate(t.target)})),s("slot",null))}setActiveDate(t){this.activeDate=t.activeDate}expandCalendar(){this.showCalendar=!0}closeCalendar(){this.showCalendar=!1}getMonth(){return this.activeDate.getMonth()}getYear(){return this.activeDate.getFullYear()}setMonth(t){this.activeDate=new Date(this.activeDate.setMonth(t.month))}setYear(t){this.activeDate=new Date(this.activeDate.setFullYear(t.year))}setDate(t){this.value=isNaN(Date.parse(t.value))?t.selectedDate?t.selectedDate.toISOString():this.value:t.value,this.syncProxyInputToThis(),this.calciteDateChange.emit()}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="date",this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}generateDate(t){let e=new Date(t);return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}get el(){return h(this)}static get watchers(){return{value:["onNameChanged"]}}static get style(){return"::slotted(input),:host([hidden]){display:none}:host{display:inline-block;vertical-align:top}:host .date-input-wrapper{border:1px solid var(--calcite-ui-border-1);position:relative}:host .date-input-wrapper.expanded{border:none;border-bottom:1px solid var(--calcite-ui-border-1)}:host .date-input-wrapper.open,:host .date-input-wrapper:active,:host .date-input-wrapper:focus{border-color:transparent;border-bottom:1px solid var(--calcite-ui-border-1)}:host .date-input-wrapper .calendar-icon{color:var(--calcite-ui-text-3);position:absolute;top:.8333333333rem;left:1.3043478261rem}:host .date-input-wrapper .date-input{color:var(--calcite-ui-text-3);background:var(--calcite-ui-foreground);-webkit-box-sizing:border-box;box-sizing:border-box;border:none;font-weight:400;font-size:16px;font-family:inherit;padding:.75rem;width:100%;margin:0;padding-left:3rem}:host .date-input-wrapper .date-input:active,:host .date-input-wrapper .date-input:focus{outline:none}:host .date-input-wrapper .date-input::-webkit-calendar-picker-indicator,:host .date-input-wrapper .date-input::-webkit-inner-spin-button{display:none;-webkit-appearance:none}:host([expanded]){background-color:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);border:1px solid var(--calcite-ui-border-2);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);overflow:hidden}"}};export{w as calcite_date_day,g as calcite_date_month,m as calcite_date_month_header,C as calcite_date_picker};