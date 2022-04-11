const express = require("express");
const path = require("path");
const qrcode = require("qrcode-generator");
// const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// app.use(function (req, res, next) {
//   // req.active = req.path.split("/")[1];
//   const active = req.path.split("/")[1];
//   if (req.length === 0) req.active = "Home";
//   console.log(req.active);
//   next();
// });

// app.engine("ejs", ejs.engine());
app.use(expressLayouts);
app.set("layout", "./layouts/defaultLayout");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "static")));

app.use("/", require(path.join(__dirname, "routes/scan.js")));

app.listen(port, () => {
  console.log(`Blog app listening at https://localhost:${port}`);
});
