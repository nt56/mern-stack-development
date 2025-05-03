const express = require("express");
const app = express();
const db = require("./config/db.js");
const connection = require("./config/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/saveForm", (req, res) => {
  const { username, useremail, userpassword } = req.body;

  const sql = `insert into Users (username, useremail, userpassword) values('${username}', '${useremail}', '${userpassword}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).send("Error inserting data");
      return;
    }
    console.log("Data inserted successfully");
    res.status(200).send("Data inserted successfully");
  });

  //   res.send(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
