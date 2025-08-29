## 🔹 What is ReactJS?

- **React.js** (React) is a **declarative, component-based JavaScript library** for building user interfaces.
- Developed by **Facebook**.
- Used for **Single Page Applications (SPAs)** and **dynamic web & mobile UIs**.

---

## 🔹 Create React App

Using **Vite** (modern and fast alternative to CRA):

```bash
npm create vite@latest my-react-app --template react

```

---

## 🔹 Babel

- **Babel** is a JavaScript compiler.
- It converts **JSX → plain JavaScript** that browsers can understand.

Example:

```jsx
ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));

```

Compiles into:

```jsx
import { jsx as _jsx } from "react/jsx-runtime";

ReactDOM.render(
  /*#__PURE__*/ _jsx("h1", { children: "Hello World!!" }),
  document.getElementById("root")
);

```

---

## 🔹 Import & Export in React

### 1. Default Export / Import

**math.js**

```jsx
const pi = 3.1415962;
export default pi;

```

**index.js**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import pi from "./math"; // default import, can be renamed

ReactDOM.render(
  <ul>
    <li>Value of pi: {pi}</li>
  </ul>,
  document.getElementById("root")
);

```

👉 Default export can be imported with **any name**.

---

### 2. Named Exports / Imports

**math.js**

```jsx
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export { pi, doublePi, triplePi }; // named exports

```

**index.js**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { pi, doublePi, triplePi } from "./math"; // exact names

ReactDOM.render(
  <ul>
    <li>Value of pi: {pi}</li>
    <li>Value of Double Pi: {doublePi()}</li>
    <li>Value of Triple Pi: {triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

```

👉 Named exports must use the **same name** as defined.

---

### 3. Mixing Default + Named Exports

**math.js**

```jsx
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };

```

**index.js**

```jsx
import pi, { doublePi, triplePi } from "./math"; // default + named

console.log(pi);         // 3.14...
console.log(doublePi()); // 6.28...
console.log(triplePi()); // 9.42...

```

---

## 🔹 React 18 Update

In React 18+, `ReactDOM.render` is replaced with `createRoot`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

```