const express = require("express");
const app = express();

const db = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/addStudent", async (req, res) => {
  const { name, email, course } = req.body;
  try {
    const sql = `INSERT INTO students (name, email, course) VALUES ('${name}', '${email}', '${course}')`;
    const [result] = await db.execute(sql);
    // res.status(201).json({ message: "Student added successfully" });
    res.redirect("/students");
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ message: "Error adding student" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const sql = `SELECT * FROM students`;
    const [rows] = await db.execute(sql);
    res.render("students.ejs", { students: rows });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Error fetching students" });
  }
});

app.get("/delete/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const sql = `DELETE FROM students WHERE id = ${studentId}`;
    await db.execute(sql);
    res.redirect("/students");
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Error deleting student" });
  }
});

app.get("/edit/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const sql = `SELECT * FROM students WHERE id = ${studentId}`;
    const [rows] = await db.execute(sql);
    res.render("edit.ejs", { student: rows[0] });
  } catch (error) {
    console.error("Error fetching student for edit:", error);
    res.status(500).json({ message: "Error fetching student for edit" });
  }
});

app.post("/updateStudent", async (req, res) => {
  const { id, name, email, course } = req.body;
  try {
    const sql = `UPDATE students SET name = '${name}', email = '${email}', course = '${course}' WHERE id = ${id}`;
    await db.execute(sql);
    res.redirect("/students");
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Error updating student" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
