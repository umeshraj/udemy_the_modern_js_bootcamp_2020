const express = require("express");
const multer = require("multer");

const { handleErrors } = require("./middlwares");
const productsRepo = require("../../repositories/products");
const productsNewTemplate = require("../../views/admin/products/new");
const productsIndexTemplate = require("../../views/admin/products/index");
const { requireTitle, requirePrice } = require("./validators");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/admin/products", async (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/signin");
  }
  const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products: products }));
});

router.get("/admin/products/new", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/signin");
  }
  res.send(productsNewTemplate({}));
});

router.post(
  "/admin/products/new",
  upload.single("image"),
  [requireTitle, requirePrice],
  handleErrors(productsNewTemplate),
  async (req, res) => {
    if (!req.session.userId) {
      return res.redirect("/signin");
    }
    const image = req.file.buffer.toString("base64");
    const { title, price } = req.body;
    await productsRepo.create({ title, price, image });

    // req.on("data", (data) => {
    //   console.log(data.toString());
    // });

    // res.send("Submitted");
    res.redirect("/admin/products");
  }
);

module.exports = router;
