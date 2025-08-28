# **ReactJS**

## **What is ReactJS**
- React.js, commonly referred to as React, is a declarative, component-based JavaScript library for building user interfaces.
- Developed by Facebook, it is widely used for creating single-page applications (SPAs) and dynamic web and mobile user interfaces.

### command to create react app
-           npm create vite@latest my-react-app --template react



## Babel
- Bable is JavaScript compiler.
  - Example:
    -       ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));
    After compiling the above React code looks like this:
    - 
            import { jsx as _jsx } from "react/jsx-runtime";
                    ReactDOM.render(/*#__PURE__*/_jsx("h1", {
                    children: "Hello World!!"
                }), document.getElementById("root"));