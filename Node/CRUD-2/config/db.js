const mysql = require("mysql2/promise");

const DBConnection = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "speedup_db",
  password: "",
});

if (DBConnection) {
  console.log("Connected to the database successfully.");
} else {
  console.log("Failed to connect to the database.");
}

module.exports = DBConnection;
