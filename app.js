const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date");

const app = express();

var items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const day = date.getDate();

  res.render("list", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
