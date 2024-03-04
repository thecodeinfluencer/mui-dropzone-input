---
sidebar_position: 1
---

# Getting Started

## Install

```bash
npm install mui-dropzone-input --save
```

or you can use **yarn**

```bash
yarn add mui-dropzone-input
```

We have completed installing the package.

## Simple usage

Here is a simple usage for using the component:

```jsx
import React from "react";
import { MuiDropzoneInput } from "mui-dropzone-input";

const MyComponent = () => {
  const [file, setFile] = React.useState(null);

  const handleDrop = (newFile) => {
    setFile(newFile);
  };

  return <MuiDropzoneInput value={file} onDrop={handleDrop} />;
};
```

## Congratulations !

That's all, now let's deep dive into the [props](/docs/api-reference).
