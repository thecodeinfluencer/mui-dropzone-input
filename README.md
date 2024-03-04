<div align="center">
  <img src="https://thecodeinfluencer.github.io/mui-dropzone-input/img/logo.svg" width="80" />

<h1>MUI dropzone input</h1>
  <p>A dropzone input designed for the React library <a href="https://mui.com/material-ui/">MUI (Material UI)</a></p>
</div>
</div>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/thecodeinfluencer/mui-dropzone-input/blob/main/LICENSE)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![npm](https://img.shields.io/npm/v/mui-dropzone-input)](https://www.npmjs.com/package/mui-dropzone-input)
[![CircleCI](https://circleci.com/gh/thecodeinfluencer/mui-dropzone-input/tree/main.svg?style=svg)](https://circleci.com/gh/thecodeinfluencer/mui-dropzone-input/tree/main)

</div>

## Installation

```
// with npm
npm install mui-dropzone-input

// with yarn
yarn add mui-dropzone-input
```

## Usage

```jsx
import React from "react";
import { MuiDropzoneInput } from "mui-dropzone-input";

const MyComponent = () => {
  const [value, setValue] = React.useState(null);

  const handleDrop = (newValue) => {
    setValue(newValue);
  };

  return <MuiDropzoneInput value={value} onDrop={handleDrop} />;
};
```

## [Documentation](https://thecodeinfluencer.github.io/mui-dropzone-input/)

## Changelog

Go to [GitHub Releases](https://github.com/thecodeinfluencer/mui-dropzone-input/releases)

## TypeScript

This library comes with TypeScript "typings". If you happen to find any bugs in those, create an issue.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## LICENSE

MIT
