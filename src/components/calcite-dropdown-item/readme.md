# calcite-dropdown-item

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute       | Description                                                                                | Type                         | Default     |
| ------------- | --------------- | ------------------------------------------------------------------------------------------ | ---------------------------- | ----------- |
| `active`      | `active`        |                                                                                            | `boolean`                    | `false`     |
| `href`        | `href`          | optionally pass a href - used to determine if the component should render as anchor        | `string`                     | `undefined` |
| `iconEnd`     | `icon-end`      | optionally pass an icon to display at the end of an item - accepts calcite ui icon names   | `string`                     | `undefined` |
| `iconFlipRtl` | `icon-flip-rtl` | flip the icon(s) in rtl                                                                    | `"both" \| "end" \| "start"` | `undefined` |
| `iconStart`   | `icon-start`    | optionally pass an icon to display at the start of an item - accepts calcite ui icon names | `string`                     | `undefined` |

## Methods

### `setFocus() => Promise<void>`

Focuses the selected item.

#### Returns

Type: `Promise<void>`

## Dependencies

### Depends on

- [calcite-icon](../calcite-icon)

### Graph

```mermaid
graph TD;
  calcite-dropdown-item --> calcite-icon
  style calcite-dropdown-item fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
