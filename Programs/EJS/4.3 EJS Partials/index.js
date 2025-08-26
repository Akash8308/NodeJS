import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(morgan("tiny"));

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
  console.log("Done");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
  console.log("Done");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
  console.log("Done");
});
