## EJS

    <%= var %> is used to render dynamic variables in view (HTML), similar to what we have in angular "{{}}".
    
    <% console.log("Hello World!!") %> , used to execute code
    
    <%- <h1> Hello </h1> %> used to send html, here only Hello will be rendered on page.
    
    <%% %%> this is used to pass plain text.

    <%# This is comment %> this is used for comments, similar to // used in code to leave comments

    <%- include("header.ejs") %>, include is used to render another ejs files, 
    similar to <app> which is used to include other components in angular

#### usage example for above tags in EJS

    -  main File (index.js)

    import express from "express";

    const app = express();
    const port = 3000;
    
    app.get("/", (req, res) => {
    const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
    };
    res.render("solution.ejs", data);
    });
    
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });


    -   Footer (footer.ejs)
    <footer>
      <p>Copyright © from footer</p>
    </footer>

    -   index.ejs
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>EJS Tags</title>
    </head>
    
    <body>
      <h1>
        <!-- Tite goes here -->
        <%= title %>
      </h1>
      <p>Current second:
        <!-- Current second goes here -->
        <%= seconds %>
      </p>
      <% if (seconds % 2===0) { %>
        <ul>
          <!-- List goes here if current second is even. -->
          <%items.forEach((fruit)=> { %>
            <li>
              <%=fruit %>
            </li>
            <%}) %>
    
              <!-- Otherwise it should display the following: -->
              <!-- <p>No items to display</p> -->
        </ul>
        <% } else {%>
          <p>No items to display</p>
          <% } %>
    
            <p>
              <!-- HTML content goes here -->
              <%- htmlContent %>
            </p>
    
            <!-- Footer goes here -->
            <%- include("footer.ejs") %>
    </body>
    
    </html>


### Handling unavailable data variables
-   When we pass data to a view
    -   ex:

            index.js
            res.render("index.ejs", data);

            view.ejs
            <h1><%= title %></h1>
    
What if we forget to send this data, we are accessing this data in view (title).
we can handle this situation using "locals".
locals is always available and can be used as locals. title which will not give error and crash our site.



















