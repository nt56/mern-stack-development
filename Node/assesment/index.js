const express = require("express");
const app = express();
const connection = require("./config/db");

app.use(express.json());
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: "true" }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/saveUser", (req, res) => {
  const { user_name, user_email, user_pass, user_mobile, user_gender } =
    req.body;

  const sql = `insert into USERS (user_name, user_email, user_pass, user_mobile, user_gender) values ('${user_name}','${user_email}','${user_pass}','${user_mobile}','${user_gender}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      return;
    }
    console.log(`${user_name} Your Data inserted successfully`);
    res.send(`${user_name} Your Data inserted successfully`);
  });

  res.redirect("/userData");
});

app.get("/userData", (req, res) => {
  const sql = `select * from USERS`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error showing data: ", err);
      return;
    }
    console.log("Operation Successfull...");
    res.render("users.ejs", { data: result });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}...!`);
});
