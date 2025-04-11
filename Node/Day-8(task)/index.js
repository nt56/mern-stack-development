const express = require("express");
const app = express();

const url = require("url");

app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// app.get("/productData", (req, res) => {
//   res.render("productData.ejs");
// });

//using post
app.post("/submitProduct", (req, res) => {
  //   res.send(req.body);

  const formData = req.body;
  res.render("productData.ejs", { data: formData });
});

//using get
// app.get("/submitProduct", (req, res) => {
//   const data = url.parse(req.url, true).query;
//   const formData = data;
//   res.render("productData.ejs", { productData: formData });
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
