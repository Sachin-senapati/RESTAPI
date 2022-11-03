const router = require("express").Router();
const { Product } = require("../model/product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
