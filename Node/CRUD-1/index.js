const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const DBConnection = require("./config/db.js");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/createUser", (req, res) => {
  const {
    empName,
    empEmail,
    empPassword,
    empMobile,
    empSalary,
    empRole,
    empDOB,
  } = req.body;

  const sql = `insert into Employees (empName, empEmail, empPassword, empMobile, empSalary, empRole, empDOB) values ('${empName}', '${empEmail}', '${empPassword}', '${empMobile}', '${empSalary}', '${empRole}', '${empDOB}')`;

  DBConnection.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data into the database.");
    } else {
      console.log("Data inserted successfully:", result);
      res.redirect("/userData");
    }
  });
});

app.get("/userData", (req, res) => {
  const sql = "SELECT * FROM Employees";

  DBConnection.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data from the database.");
    } else {
      console.log("Data fetched successfully:", result);
      res.render("userData.ejs", { employees: result });
    }
  });
});

app.get("/delete/:id", (req, res) => {
  const empId = req.params.id;
  const sql = `DELETE FROM Employees WHERE empId = ${empId}`;

  DBConnection.query(sql, (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).send("Error deleting data from the database.");
    } else {
      console.log("Data deleted successfully:", result);
      res.redirect("/userData");
    }
  });
});

app.get("/edit/:id", (req, res) => {
  const empId = req.params.id;
  const sql = `SELECT * FROM Employees WHERE empId = ${empId}`;

  DBConnection.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data from the database.");
    } else {
      console.log("Data fetched successfully:", result);
      res.render("editUser.ejs", { employee: result[0] });
    }
  });
});

app.post("/editUser", (req, res) => {
  const {
    empId,
    empName,
    empEmail,
    empPassword,
    empMobile,
    empSalary,
    empRole,
    empDOB,
  } = req.body;

  const sql = `UPDATE Employees SET empName = '${empName}', empEmail = '${empEmail}', empPassword = '${empPassword}', empMobile = '${empMobile}', empSalary = '${empSalary}', empRole = '${empRole}', empDOB = '${empDOB}' WHERE empId ='${empId}'`;

  DBConnection.query(sql, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
      res.status(500).send("Error updating data in the database.");
    } else {
      console.log("Data updated successfully:", result);
      res.redirect("/userData");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
