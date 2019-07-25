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

const Order = mongoose.model("order", {
  productId: String,
  user: {
    firstName: String,
    lastName: String,
    email: String,
    telNumber: String
  },
  pay: {
    itWasPaid: Boolean,
    toPay: Number,
    timeOFSub: Number,
    quantOfsubscriptions: Number
  },
})

module.exports = {

  Product,
  Order

};
