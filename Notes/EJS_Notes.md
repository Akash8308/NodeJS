🔹 What is EJS?

- **EJS (Embedded JavaScript Templates)** is a templating engine for Node.js/Express.
- Lets you **embed JavaScript into HTML**.
- Commonly used in **server-side rendering**.

---

## 🔹 EJS Tags

| Tag | Usage | Example | Notes |
| --- | --- | --- | --- |
| `<%= %>` | Output **escaped** data (renders dynamic variables safely). | `<%= title %>` | Similar to Angular’s `{{ }}`. |
| `<%- %>` | Output **unescaped** data (renders HTML). | `<%- htmlContent %>` | Be careful: may cause XSS if data is not sanitized. |
| `<% %>` | Run JS code (no output). | `<% console.log("Hello") %>` | Good for conditions/loops. |
| `<%% %>` | Render plain text (escape EJS tags). | `<%% Hello %>` | Output: `<% Hello %>` |
| `<%# %>` | Comment (not rendered). | `<%# This is a comment %>` | Similar to `//` in JS. |
| `<%- include("file.ejs") %>` | Include another EJS file. | `<%- include("footer.ejs") %>` | Works like Angular components. |

---

## 🔹 Example Project Structure

### **index.js**

```jsx
import express from "express";
const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```

---

### **footer.ejs**

```html
<footer>
  <p>Copyright © from footer</p>
</footer>

```

---

### **index.ejs**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EJS Tags</title>
</head>
<body>
  <h1><%= title %></h1>

  <p>Current second: <%= seconds %></p>

  <% if (seconds % 2 === 0) { %>
    <ul>
      <% items.forEach((fruit) => { %>
        <li><%= fruit %></li>
      <% }) %>
    </ul>
  <% } else { %>
    <p>No items to display</p>
  <% } %>

  <p><%- htmlContent %></p>

  <!-- Footer include -->
  <%- include("footer.ejs") %>
</body>
</html>

```

---

## 🔹 Handling Missing Data

- If a variable is not passed, EJS will throw an error.
- To prevent crashes, use **`locals`**:

Example:

```jsx
// index.js
res.render("index.ejs", {});

// index.ejs
<h1><%= locals.title || "Default Title" %></h1>

```

✅ This way, if `title` is not provided, it falls back safely.

---

## 🔹 Summary

- **EJS** allows mixing JS & HTML.
- `<%= %>` → escaped output, `<%- %>` → raw HTML, `<% %>` → logic, `<%# %>` → comment.
- Use **`include`** to reuse components (like Angular/React).
- Use **locals** or defaults to avoid runtime errors.