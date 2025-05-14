const express = require("express");
const app = express();
const connection = require("./config/db.js");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/addCharacter", (req, res) => {
  res.render("add.ejs");
});

app.get("/view", (req, res) => {
  res.render("show.ejs");
});

app.post("/add-character", upload.single("profile_pic"), async (req, res) => {
  const { name, email, gender, role } = req.body;
  const filename = req.file.filename;

  try {
    const sql = `insert into OnePiece (name, profile_pic, email, gender, role) values ('${name}', '${filename}', '${email}', '${gender}', '${role}')`;

    const result = await connection.execute(sql);

    if (result[0].affectedRows > 0) {
      console.log("Data inserted successfully");
    } else {
      console.log("Error inserting data");
    }

    res.send(
      `
      <script>
        alert("Data inserted successfully");
        window.location.href = "/viewCharacters";
      </script>
      `
    );

    // res.send({
    //   message: "Data inserted successfully",
    //   file: req.file,
    //   body: req.body,
    //   sql: sql,
    // });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/viewCharacters", async (req, res) => {
  try {
    const sql = `SELECT * FROM OnePiece`;
    const [rows] = await connection.execute(sql);

    res.render("show.ejs", { characters: rows });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `DELETE FROM OnePiece WHERE id = '${id}'`;
    const [result] = await connection.execute(sql);

    if (result.affectedRows > 0) {
      console.log("Data deleted successfully");
      res.redirect("/viewCharacters");
    } else {
      console.log("Error deleting data");
      res.status(404).send("Character not found");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Error deleting data");
  }
});

app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const sql = `SELECT * FROM OnePiece WHERE id = '${id}'`;
    const [rows] = await connection.execute(sql);

    if (rows.length > 0) {
      res.render("edit.ejs", { character: rows[0] });
      res.redirect("/viewCharacters");
    } else {
      console.log("Character not found");
      res.status(404).send("Character not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.post(
  "/update-character",
  upload.single("profile_pic"),
  async (req, res) => {
    const { id, name, email, gender, role } = req.body;
    const filename = req.file.filename;

    try {
      const sql = `UPDATE OnePiece SET name = '${name}', profile_pic = '${filename}', email = '${email}', gender = '${gender}', role = '${role}' WHERE id = '${id}'`;
      const [result] = await connection.execute(sql);
      if (result.affectedRows > 0) {
        console.log("Data updated successfully");
        res.redirect("/viewCharacters");
      } else {
        console.log("Error updating data");
        res.status(404).send("Character not found");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).send("Error updating data");
    }
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
