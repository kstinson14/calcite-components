/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  TabChangeEventDetail,
} from './interfaces/TabChange';


export namespace Components {
  interface CalciteAlert {
    /**
    * emit the `calciteAlerClose` event - <calcite-alerts> listens for this, if the alert is not active, but is the queue, this will remove it from the queue
    */
    'closeCalciteAlert': () => Promise<void>;
    /**
    * Color for the alert (will apply to top border and icon)
    */
    'color': "blue" | "green" | "red" | "yellow";
    'currentAlert': string;
    /**
    * Close the alert automatically (recommended for passive, non-blocking alerts)
    */
    'dismiss': boolean;
    /**
    * Length before autodismissal (only used with `dismiss`)
    */
    'duration': "fast" | "medium" | "slow";
    /**
    * If false, no icon will be shown in the alert
    */
    'icon': boolean;
    /**
    * Unique ID for this alert
    */
    'id': string;
    /**
    * emit the `calciteAlertOpen` event - <calcite-alerts> listens for this, and determines if it should open the alert or add it to the queue
    */
    'openCalciteAlert': () => Promise<void>;
    'queueLength': number;
    /**
    * Select theme (light or dark)
    */
    'theme': "light" | "dark";
  }
  interface CalciteAlerts {
    /**
    * Unique ID for this instance of calcite-alerts
    */
    'id': string;
  }
  interface CalciteExample {
    /**
    * Add a jsdoc comment describing your method and it's parameters (use `@param`).
    */
    'doThing': () => Promise<void>;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property': string;
  }
  interface CalciteLoader {
    /**
    * Loader is visible when active
    */
    'isActive': boolean;
    /**
    * Text which should appear under the loading indicator
    */
    'text': string;
  }
  interface CalciteProgress {
    /**
    * Fill bar in the opposite direction
    */
    'reversed': boolean;
    /**
    * Text label for the progress indicator
    */
    'text': string;
    /**
    * Use indeterminate if finding actual progress value is impossible
    */
    'type': "indeterminate" | "determinate";
    /**
    * Percent complete of 100
    */
    'value': number;
  }
  interface CalciteSwitch {
    /**
    * Color of the switch. Use red to denote destructive settings/actions.
    */
    'color'?: "red" | "blue";
    /**
    * Name of the form control (useful for specifying input/label relationship)
    */
    'name'?: string;
    /**
    * True if the control should be switched on
    */
    'switched'?: boolean;
    /**
    * Value of the form control
    */
    'value'?: string;
  }
  interface CalciteTab {
    /**
    * Return the index of this tab within the tab array
    */
    'getTabIndex': () => Promise<number>;
    /**
    * Show this tab
    */
    'isActive': boolean;
    /**
    * Optionally include a unique name for this tab, be sure to also set this name on the associated title.
    */
    'tab': string;
    'updateAriaInfo': (tabIds?: string[], titleIds?: string[]) => Promise<void>;
  }
  interface CalciteTabNav {
    /**
    * Name to use when saving selected tab data to localStorage
    */
    'storageId': string;
    /**
    * Pass the same string to multiple tab navs to keep them all in sync if one changes
    */
    'syncId': string;
  }
  interface CalciteTabTitle {
    'getTabIdentifier': () => Promise<string | number>;
    /**
    * Return the index of this title within the nav
    */
    'getTabIndex': () => Promise<number>;
    /**
    * Show this tab title as selected
    */
    'isActive': boolean;
    /**
    * Optionally include a unique name for the tab title, be sure to also set this name on the associated tab.
    */
    'tab'?: string;
    'updateAriaInfo': (tabIds?: string[], titleIds?: string[]) => Promise<void>;
  }
  interface CalciteTabs {
    /**
    * Align tab titles to the edge or fully justify them across the tab nav ("center")
    */
    'layout': "center" | "inline";
    /**
    * Select theme (light or dark)
    */
    'theme': "light" | "dark";
  }
}

declare global {


  interface HTMLCalciteAlertElement extends Components.CalciteAlert, HTMLStencilElement {}
  var HTMLCalciteAlertElement: {
    prototype: HTMLCalciteAlertElement;
    new (): HTMLCalciteAlertElement;
  };

  interface HTMLCalciteAlertsElement extends Components.CalciteAlerts, HTMLStencilElement {}
  var HTMLCalciteAlertsElement: {
    prototype: HTMLCalciteAlertsElement;
    new (): HTMLCalciteAlertsElement;
  };

  interface HTMLCalciteExampleElement extends Components.CalciteExample, HTMLStencilElement {}
  var HTMLCalciteExampleElement: {
    prototype: HTMLCalciteExampleElement;
    new (): HTMLCalciteExampleElement;
  };

  interface HTMLCalciteLoaderElement extends Components.CalciteLoader, HTMLStencilElement {}
  var HTMLCalciteLoaderElement: {
    prototype: HTMLCalciteLoaderElement;
    new (): HTMLCalciteLoaderElement;
  };

  interface HTMLCalciteProgressElement extends Components.CalciteProgress, HTMLStencilElement {}
  var HTMLCalciteProgressElement: {
    prototype: HTMLCalciteProgressElement;
    new (): HTMLCalciteProgressElement;
  };

  interface HTMLCalciteSwitchElement extends Components.CalciteSwitch, HTMLStencilElement {}
  var HTMLCalciteSwitchElement: {
    prototype: HTMLCalciteSwitchElement;
    new (): HTMLCalciteSwitchElement;
  };

  interface HTMLCalciteTabElement extends Components.CalciteTab, HTMLStencilElement {}
  var HTMLCalciteTabElement: {
    prototype: HTMLCalciteTabElement;
    new (): HTMLCalciteTabElement;
  };

  interface HTMLCalciteTabNavElement extends Components.CalciteTabNav, HTMLStencilElement {}
  var HTMLCalciteTabNavElement: {
    prototype: HTMLCalciteTabNavElement;
    new (): HTMLCalciteTabNavElement;
  };

  interface HTMLCalciteTabTitleElement extends Components.CalciteTabTitle, HTMLStencilElement {}
  var HTMLCalciteTabTitleElement: {
    prototype: HTMLCalciteTabTitleElement;
    new (): HTMLCalciteTabTitleElement;
  };

  interface HTMLCalciteTabsElement extends Components.CalciteTabs, HTMLStencilElement {}
  var HTMLCalciteTabsElement: {
    prototype: HTMLCalciteTabsElement;
    new (): HTMLCalciteTabsElement;
  };
  interface HTMLElementTagNameMap {
    'calcite-alert': HTMLCalciteAlertElement;
    'calcite-alerts': HTMLCalciteAlertsElement;
    'calcite-example': HTMLCalciteExampleElement;
    'calcite-loader': HTMLCalciteLoaderElement;
    'calcite-progress': HTMLCalciteProgressElement;
    'calcite-switch': HTMLCalciteSwitchElement;
    'calcite-tab': HTMLCalciteTabElement;
    'calcite-tab-nav': HTMLCalciteTabNavElement;
    'calcite-tab-title': HTMLCalciteTabTitleElement;
    'calcite-tabs': HTMLCalciteTabsElement;
  }
}

declare namespace LocalJSX {
  interface CalciteAlert extends JSXBase.HTMLAttributes<HTMLCalciteAlertElement> {
    /**
    * Color for the alert (will apply to top border and icon)
    */
    'color'?: "blue" | "green" | "red" | "yellow";
    /**
    * Close the alert automatically (recommended for passive, non-blocking alerts)
    */
    'dismiss'?: boolean;
    /**
    * Length before autodismissal (only used with `dismiss`)
    */
    'duration'?: "fast" | "medium" | "slow";
    /**
    * If false, no icon will be shown in the alert
    */
    'icon'?: boolean;
    /**
    * Unique ID for this alert
    */
    'id'?: string;
    /**
    * Fired when an alert is closed
    */
    'onCalciteAlertClose'?: (event: CustomEvent<any>) => void;
    /**
    * Fired when an alert is opened
    */
    'onCalciteAlertOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Select theme (light or dark)
    */
    'theme'?: "light" | "dark";
  }
  interface CalciteAlerts extends JSXBase.HTMLAttributes<HTMLCalciteAlertsElement> {
    /**
    * Unique ID for this instance of calcite-alerts
    */
    'id'?: string;
    'onCalciteAlertsClose'?: (event: CustomEvent<any>) => void;
    'onCalciteAlertsOpen'?: (event: CustomEvent<any>) => void;
  }
  interface CalciteExample extends JSXBase.HTMLAttributes<HTMLCalciteExampleElement> {
    'onOpen'?: (event: CustomEvent<any>) => void;
    /**
    * Be sure to add a jsdoc comment describing your propery for the generated readme file. If your property should be hidden from documentation, you can use the `@internal` tag
    */
    'property'?: string;
  }
  interface CalciteLoader extends JSXBase.HTMLAttributes<HTMLCalciteLoaderElement> {
    /**
    * Loader is visible when active
    */
    'isActive'?: boolean;
    /**
    * Text which should appear under the loading indicator
    */
    'text'?: string;
  }
  interface CalciteProgress extends JSXBase.HTMLAttributes<HTMLCalciteProgressElement> {
    /**
    * Fill bar in the opposite direction
    */
    'reversed'?: boolean;
    /**
    * Text label for the progress indicator
    */
    'text'?: string;
    /**
    * Use indeterminate if finding actual progress value is impossible
    */
    'type'?: "indeterminate" | "determinate";
    /**
    * Percent complete of 100
    */
    'value'?: number;
  }
  interface CalciteSwitch extends JSXBase.HTMLAttributes<HTMLCalciteSwitchElement> {
    /**
    * Color of the switch. Use red to denote destructive settings/actions.
    */
    'color'?: "red" | "blue";
    /**
    * Name of the form control (useful for specifying input/label relationship)
    */
    'name'?: string;
    'onCalciteSwitchChange'?: (event: CustomEvent<any>) => void;
    /**
    * True if the control should be switched on
    */
    'switched'?: boolean;
    /**
    * Value of the form control
    */
    'value'?: string;
  }
  interface CalciteTab extends JSXBase.HTMLAttributes<HTMLCalciteTabElement> {
    /**
    * Show this tab
    */
    'isActive'?: boolean;
    /**
    * Optionally include a unique name for this tab, be sure to also set this name on the associated title.
    */
    'tab'?: string;
  }
  interface CalciteTabNav extends JSXBase.HTMLAttributes<HTMLCalciteTabNavElement> {
    /**
    * Emitted when the active tab changes
    */
    'onCalciteTabChange'?: (event: CustomEvent<TabChangeEventDetail>) => void;
    /**
    * Name to use when saving selected tab data to localStorage
    */
    'storageId'?: string;
    /**
    * Pass the same string to multiple tab navs to keep them all in sync if one changes
    */
    'syncId'?: string;
  }
  interface CalciteTabTitle extends JSXBase.HTMLAttributes<HTMLCalciteTabTitleElement> {
    /**
    * Show this tab title as selected
    */
    'isActive'?: boolean;
    /**
    * Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts)
    */
    'onCalciteTabsActivate'?: (event: CustomEvent<TabChangeEventDetail>) => void;
    /**
    * Optionally include a unique name for the tab title, be sure to also set this name on the associated tab.
    */
    'tab'?: string;
  }
  interface CalciteTabs extends JSXBase.HTMLAttributes<HTMLCalciteTabsElement> {
    /**
    * Align tab titles to the edge or fully justify them across the tab nav ("center")
    */
    'layout'?: "center" | "inline";
    /**
    * Select theme (light or dark)
    */
    'theme'?: "light" | "dark";
  }

  interface IntrinsicElements {
    'calcite-alert': CalciteAlert;
    'calcite-alerts': CalciteAlerts;
    'calcite-example': CalciteExample;
    'calcite-loader': CalciteLoader;
    'calcite-progress': CalciteProgress;
    'calcite-switch': CalciteSwitch;
    'calcite-tab': CalciteTab;
    'calcite-tab-nav': CalciteTabNav;
    'calcite-tab-title': CalciteTabTitle;
    'calcite-tabs': CalciteTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


