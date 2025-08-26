import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server started and listening to port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome!!</h1>");
});

app.get("/Home", (req, res) => {
  res.send("<h1>Welcome to the HomePage!!</h1>");
});

app.get("/About", (req, res) => {
  const { Username } = req.query;
  res.send(
    `<h1>Welcome ${Username} to the About Page!!</h1> <p> My name is Akash Hedau.</p>`
  );
});

app.post("/newUser", (req, res) => {
  const { name } = req.body;
  res.send(`Welcome ${name} to ExpressJS.`);
});

app.put("/renameUser", (req, res) => {
  const { name } = req.body;
  res.send(`Updated name to: ${name} `);
});

app.patch("/replaceUser", (req, res) => {
  const { name } = req.body;
  res.send(`Replaced User: ${name} `);
});

app.delete("/deleteUser", (req, res) => {
  const { name } = req.body;
  res.send(`Deleted user: ${name} `);
});
