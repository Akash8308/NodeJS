import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

function logger(req, res, next) {
  console.log("Requsted method: ", req.method);
  console.log("Requsted URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
