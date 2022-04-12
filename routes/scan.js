const express = require("express");
const path = require("path");
const QRCode = require("qrcode");

const router = express.Router();

// const generateQR = async (text) => {
//   try {
//     const val = await QRCode.toDataURL(text);
//     return val;
//   } catch (err) {
//     return err;
//   }
// };

router.get("/", (req, res) => {
  res.render("home", {
    done: false,
    active: "home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    active: "about",
  });
});

router.post("/qr-details", (req, res) => {
  // let qr = generateQR(req.body.email);
  // const qr = (async () => {
  //   const val = await QRCode.toDataURL(req.body.email);
  //   console.log(val);
  // })().catch((err) => console.log(err));

  const qr = QRCode.toDataURL("req.body.email")
    .then((url) => {
      url;
    })
    .catch((err) => {
      url;
    });
  console.log(qr);
  res.render("home", {
    done: true,
    active: "home",
    qr: qr,
  });
});

module.exports = router;
