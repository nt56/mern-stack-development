const express = require("express");
const app = express();
const DBConnection = require("./config/db.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/saveProduct", async (req, res) => {
  try {
    //logic
    const { pname, pcategory, pprice, pquantity, pdetails } = req.body;

    const sql = `insert into Products(pname, pcategory, pprice, pquantity, pdetails) values('${pname}','${pcategory}','${pprice}','${pquantity}','${pdetails}')`;

    await DBConnection.execute(sql);

    console.log("Product Added Successfully...!");

    res.redirect("/productList");
  } catch (error) {
    console.log(error);
  }
});

app.get("/productList", async (req, res) => {
  try {
    //logic
    const sql = `select * from Products`;

    const [productData] = await DBConnection.execute(sql);

    res.render("productsList.ejs", { data: productData });
  } catch (error) {
    console.log(error);
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    //delete logic
    const pid = req.params.id;

    const sql = `delete from Products where pid='${pid}'`;

    await DBConnection.execute(sql);

    console.log("Product Deleted Successdully...!");

    res.redirect("/productList");
  } catch (error) {
    console.log(error);
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    //fetch single product
    const pid = req.params.id;

    const sql = `select * from Products where pid='${pid}'`;

    const [product] = await DBConnection.execute(sql);

    res.render("editProduct.ejs", { data: product[0] });
  } catch (error) {
    console.log(error);
  }
});

app.post("/updateProduct", async (req, res) => {
  try {
    //updating the product
    const { pid, pname, pcategory, pprice, pquantity, pdetails } = req.body;

    const sql = `update Products set pname='${pname}', pcategory='${pcategory}', pprice='${pprice}', pquantity='${pquantity}', pdetails='${pdetails}' where pid='${pid}'`;

    await DBConnection.execute(sql);

    console.log("data updated successfully...!");

    res.redirect("/productList");
  } catch (error) {
    console.log(error);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
