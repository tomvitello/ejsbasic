
import bodyParser from "body-parser";
import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let weekDay = "";

app.use(bodyParser.urlencoded({ extended: true }));

function dayCheck(req, res, next) {
  const date = new Date();
  let day = date.getDay();
  
  
  if (day != (0 || 6)) {
    weekDay = "Hey, it's a week day, it's time to work hard!";
  } else {
    weekDay = "Hey, it's a weekend, it's time to have fun!"
  }
  next();
}
app.use(dayCheck);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    message: weekDay,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  