const mongoose=require("mongoose");

productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
});

const Product=mongoose.model("product",productSchema);

module.exports={Product}