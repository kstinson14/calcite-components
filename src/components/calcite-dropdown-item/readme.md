# calcite-dropdown-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                     | Type      | Default     |
| ----------- | ----------- | --------------------------------------------------------------- | --------- | ----------- |
| `active`    | `active`    |                                                                 | `boolean` | `false`     |
| `href`      | `href`      | pass an optional href to render an anchor around the link items | `string`  | `undefined` |
| `linktitle` | `linktitle` | pass an optional title for rendered href                        | `string`  | `undefined` |


## Events

| Event                         | Description | Type               |
| ----------------------------- | ----------- | ------------------ |
| `calciteDropdownItemKeyEvent` |             | `CustomEvent<any>` |
| `calciteDropdownItemSelected` |             | `CustomEvent<any>` |
| `closeCalciteDropdown`        |             | `CustomEvent<any>` |
| `registerCalciteDropdownItem` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- context-consumer

### Graph
```mermaid
graph TD;
  calcite-dropdown-item --> context-consumer
  style calcite-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*