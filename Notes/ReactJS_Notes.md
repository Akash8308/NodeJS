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

---

## 🔹 Declarative Programming & State

Declarative Programming, we declare how our UI should look under different situations
dependant upon `state`.

```jsx
import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
```
Here our UI will render based on state of isDone variable.

``` NOTE: here style will not work as the UI is already rendered. For which we can use hooks```
---

---
## 🔹 Hooks
Hooks are functions introduced in React 16.8 that allow the use of state and other React features within functional components.
Different hooks in React:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useLayoutEffect
- useImperativeHandle
- useDebugValue

#### Custom Hooks:
Custom Hooks are JavaScript functions that encapsulate reusable stateful logic. They follow the naming convention of starting with "use" (e.g., useFetchData). They can utilize other built-in Hooks to manage their internal state and effects.
#### ```Rules of Hooks```:
- Hooks must only be called from React function components or other custom Hooks.
- Hooks must be called at the top level of a component or custom Hook, not inside loops, conditions, or nested functions.
---
## 🔹 Packages

Some useful packages

- @material-ui/icons : https://www.npmjs.com/package/@material-ui/icons
  This package provides the Google Material icons packaged as a set of React components.
- @material-ui/core :  https://www.npmjs.com/package/@material-ui/core - This package has been deprecated
---

---

Got it 👍 Here's the full explanation rewritten in **Markdown format** so you can use it directly in docs, notes, or README:

---

# 🛠 Error Handling in React

In React, error handling can be done in different ways depending on where the error occurs: rendering, event handlers, async code, or API calls.

---

## 🔹 1. Handling Errors in **Event Handlers**

React event handlers can be wrapped in `try/catch`.

```jsx
function App() {
  function handleClick() {
    try {
      throw new Error("Something went wrong!");
    } catch (err) {
      console.error(err.message);
      alert("An error occurred: " + err.message);
    }
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 🔹 2. Handling Errors with **Error Boundaries** (Rendering Errors)

Error boundaries catch **rendering errors**, preventing the entire app from crashing.

### Create an ErrorBoundary Component

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Usage

```jsx
import ErrorBoundary from "./ErrorBoundary";
import MyComponent from "./MyComponent";

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

> ⚠️ Error Boundaries do **not** catch:
>
> * Errors in **event handlers**
> * **Async errors**
> * **Server-side rendering**

---

## 🔹 3. Handling Errors in **Async Code (Promises / API Calls)**

Use `try/catch` with `async/await` or `.catch()` for promises.

```jsx
import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error("Network response was not ok");
        let result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## 🔹 4. Handling Errors with **Custom Hook**

You can create a reusable error handler hook.

```jsx
import { useState } from "react";

function useErrorHandler() {
  const [error, setError] = useState(null);
  const handleError = (err) => setError(err.message || "Unknown error");
  return [error, handleError];
}
```

### Usage

```jsx
function Component() {
  const [error, handleError] = useErrorHandler();

  function riskyAction() {
    try {
      throw new Error("Something broke!");
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={riskyAction}>Do Something Risky</button>
    </div>
  );
}
```

---

## ✅ Summary

* **Event Handlers** → Use `try/catch`.
* **Rendering Errors** → Use **Error Boundaries**.
* **Async/API Errors** → Handle with `try/catch` in `async/await`.
* **Reusable Handling** → Create a **custom hook**.

---

