const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://user:user@cluster0-jqpri.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: "elastic360" });
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
