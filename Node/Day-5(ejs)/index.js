const express = require("express");
const app = express();

//middleware for displaying static image
app.use(express.static("public/"));

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  const user = {
    id: 1,
    name: "hardik pandya",
    email: "hardik@gmail.com",
    age: 28,
  };

  const obj = { data: user };

  res.render("about.ejs", obj);
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
