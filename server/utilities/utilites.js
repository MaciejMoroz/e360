const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/elastic360", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// models

//// product
const Product = mongoose.model("Product", {
  _id: String,
  name: String,
  product_desc: [],
  price: Number,
  price_desc: String,
  product_detalis: []
});

const PersonModel = mongoose.model("person", {
  firstname: String,
  lastname: String
});






module.exports = {

  Product,
  PersonModel

};
