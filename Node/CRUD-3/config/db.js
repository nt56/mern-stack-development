const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "speedup_db",
  password: "",
});

if (connection) {
  console.log("Database connection successful");
} else {
  console.log("Database connection failed");
}

module.exports = connection;
