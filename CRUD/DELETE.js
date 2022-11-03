const router = require("express").Router();
const { Product } = require("../model/product");

router.delete("/api/product/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.json("Sucessfully deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
