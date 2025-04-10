const express = require("express");
const app = express();

app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/saveform", (req, res) => {
  // res.send(req.body);

  const formData = req.body;
  res.render("userDetail.ejs", { data: formData });
});

const PORT = 4000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
