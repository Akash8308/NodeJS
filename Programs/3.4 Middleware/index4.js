import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var brandName = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(logger);
app.use(brandNamegenerator);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next) {
  console.log("Req Method: ", req.method);
  console.log("Req Method: ", req.url);
  next();
}

function brandNamegenerator(req, res, next) {
  const { street, pet } = req.body;
  brandName = street + pet;
  next();
}

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${brandName}✌️</h2>`);
});
