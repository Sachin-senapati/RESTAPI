const router = require("express").Router();
const { Product } = require("../model/product");

router.put("/api/product/:id", async (req, res) => {
  try {
    await Product.updateMany({ _id: req.params.id }, { ...req.body });
    res.json("Updated Sucessfully");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
