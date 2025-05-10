const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "speedup_db",
  password: "",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database successfully....");
});

module.exports = connection;
