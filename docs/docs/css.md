---
sidebar_position: 5
---

# CSS

Like any component, if you want to override a component's styles using custom classes, you can use the `className` prop.

```jsx
<MuiDropzoneInput className="my-class-name" />
```

Then, you can use the differents global class names (see below) to target an element of `MuiDropzoneInput`.

| 	Global class                            | Description                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `.MuiDropzoneInput-TextField`                        | 	Styles applied to the root element.                                                                                                                   |
| `.MuiDropzoneInput-Typography-size-text`                        | 	Styles applied to the size [Typography](https://mui.com/material-ui/api/typography/).                                                                                                                |
| `.MuiDropzoneInput-ClearIconButton`                        | 	Styles applied to to the clear [IconButton](https://mui.com/material-ui/api/icon-button/) component.                                                                                                       |
| `.MuiDropzoneInput-placeholder`                        | 	Styles applied to the placeholder.                                                                                                                   |

For example: target the `.MuiDropzoneInput-Typography-size-text` global class name to customize the size text.

## Example with styled-component / emotion

```jsx
import { styled } from 'styled-component' // or emotion
import { MuiDropzoneInput } from 'mui-dropzone-input'

const MuiDropzoneInputStyled = styled(MuiDropzoneInput)`
  & input + span {
    color: red;
  }
`

function MyComponent() {
  return <MuiDropzoneInputStyled />
}
```