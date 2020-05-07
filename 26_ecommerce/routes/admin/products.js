const express = require("express");
const multer = require("multer");

const { handleErrors, requireAuth } = require("./middlwares");
const productsRepo = require("../../repositories/products");
const productsNewTemplate = require("../../views/admin/products/new");
const productsIndexTemplate = require("../../views/admin/products/index");
const productsEditTemplate = require("../../views/admin/products/edit");
const { requireTitle, requirePrice } = require("./validators");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/admin/products", requireAuth, async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products: products }));
});

router.get("/admin/products/new", requireAuth, (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post(
  "/admin/products/new",
  requireAuth,
  upload.single("image"),
  [requireTitle, requirePrice],
  handleErrors(productsNewTemplate),
  async (req, res) => {
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

router.get("/admin/products/:id/edit", async (req, res) => {
  const product = await productsRepo.getOne(req.params.id);
  // handle invalid id
  if (!product) {
    return res.send("Product not found");
  }
  res.send(productsEditTemplate({ product: product }));
});

module.exports = router;
