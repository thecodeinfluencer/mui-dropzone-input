---
sidebar_position: 4
---

# TypeScript

This package is written in **TypeScript**. So you don't need to create your own types. Here an example if you use **TypeScript**.

**Nota bene**: Props are defined within the `MuiDropzoneInputProps` interface.

```tsx
import React from "react";
import { MuiDropzoneInput } from "mui-dropzone-input";

const MyComponent = () => {
  const [value, setValue] = React.useState<File | null>(null);

  const handleDrop = (newValue: File | null) => {
    setValue(newValue);
  };

  return <MuiDropzoneInput value={value} onDrop={handleDrop} hideSizeText />;
};
```
