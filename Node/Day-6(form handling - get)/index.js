const express = require("express");
const app = express();

const url = require("url");

app.use(express.static("public/"));

app.get("/", (req, res) => {
  const users = [
    {
      name: "Roronoa zoro",
      email: "zoro@gmail.com",
      age: "28",
      role: "Swordsman",
      gender: "male",
    },
    {
      name: "Sanji Vinmoske",
      email: "sanji@gmail.com",
      age: "26",
      role: "Cook",
      gender: "male",
    },
  ];

  const obj = { data: users };

  res.render("home.ejs", obj);
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/saveform", (req, res) => {
  const urlData = url.parse(req.url, true);
  res.send(urlData.query);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Is successfully running on port ${PORT}`);
});
