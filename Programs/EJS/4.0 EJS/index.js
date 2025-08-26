import express from "express";
import { get } from "http";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.listen(port, (req, res) => {
  console.log(`App started and listening to port: ${port} `);
});

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "It's time to work hard";

  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "It's time to study";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
