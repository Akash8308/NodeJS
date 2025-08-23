//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import morgan from "morgan";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

var isAuthorized = false;
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server started at port:" + port);
});

function passwordCheck(req, res, next) {
  if (req.body.password === "ILoveProgramming") isAuthorized = true;
  else isAuthorized = false;
  next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuthorized) res.sendFile(__dirname + "/public/secret.html");
  //   else res.sendFile(__dirname + "/public/index.html");
  // Alternate
  else res.redirect("/");
});
