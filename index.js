const express = require("express");
const path = require("path");
const QRCode = require("qrcode");
// const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// app.engine("ejs", ejs.engine());
app.use(expressLayouts);
app.set("layout", "./layouts/defaultLayout");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use("/js", express.static(path.join(__dirname, "static/js")));

app.use("/", require(path.join(__dirname, "routes/scan.js")));

app.listen(port, () => {
  console.log(`Blog app listening at https://localhost:${port}`);
});
