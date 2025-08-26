import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let letterCount = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

function countLetters(req, res, next) {
  const { fName, lName } = req.body;
  letterCount = fName.length + lName.length;
  next();
}

app.use(countLetters);

app.post("/submit", (req, res) => {
  res.render("index.ejs", { letterCount });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
