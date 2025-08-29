---

## 🔹 What is Node.js?

- **Node.js** is an **asynchronous, event-driven JavaScript runtime** built on **Chrome’s V8 engine**.
- Designed for **building scalable network applications**.
- Originally, **JavaScript only ran inside browsers** → Node.js allows us to use JavaScript **outside the browser**.
- **V8 engine (C++ based)** executes JavaScript code at high speed.
- **Node.js is not a framework** → it’s a **runtime environment**.

---

## 🔹 What is NPM?

- **NPM (Node Package Manager)** is the default **package manager** for Node.js.
- It allows developers to **install, share, and manage third-party packages**.
- Comes **pre-bundled with Node.js**.
- Owned by **npm, Inc.**, which is now part of **GitHub (Microsoft)**.

---

## 🔹 Module Systems in Node.js

### 1. CommonJS (CJS)

- **Default module system** in Node.js.
- Uses `require()` to import and `module.exports` to export.

Example:

```jsx
// math.js
const pi = 3.14;
module.exports = pi;

// index.js
const pi = require("./math");
console.log(pi);

```

---

### 2. ECMAScript Modules (ESM)

- Since **Node.js v12**, support for **ESM (import/export syntax)** was added.
- Provides a **standardized way** to write modules, same as front-end JavaScript.

Example:

```jsx
// math.js
export const pi = 3.14;

// index.js
import { pi } from "./math.js";
console.log(pi);

```

👉 To enable ESM:

- Add `"type": "module"` in `package.json`.

```json
{
  "type": "module"
}

```

- Or, use `.mjs` file extension.

---

## 🔹 Summary

- **CJS** → `require` / `module.exports` (default in Node).
- **ESM** → `import` / `export` (standardized, modern).
- **NPM** → Package manager for Node, comes pre-installed.
- **Node.js** → Runtime environment, not a framework.