const express = require("express");
const app = express();

//step-1 and 2
const multer = require("multer");
// const upload = multer({ dest: "public/uploads/" }); //basic

//advance step-2
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.static("public/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

//step-3
app.post("/saveForm", upload.single("file"), (req, res) => {
  res.send({
    data: req.body,
    file: req.file,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is Listening on Port ${PORT}`);
});
