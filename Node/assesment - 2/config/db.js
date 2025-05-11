const sql = require("mysql2/promise");

const db = sql.createPool({
  user: "root",
  host: "localhost",
  database: "speedup_db",
  password: "",
});

if (db) {
  console.log("Database connection successful");
} else {
  console.log("Database connection failed");
}

module.exports = db;
