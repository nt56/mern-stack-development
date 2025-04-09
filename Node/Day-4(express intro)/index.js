const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact page");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
