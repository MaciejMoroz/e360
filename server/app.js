const express = require("express");
var cors = require('cors')
const app = express();
const router = express.Router();
const utilities = require("./utilities/utilites");
app.use(cors())
// utilities
const {

  Product,
  PersonModel

} = utilities;


// router
router.get("/", async (req, res) => {
  res.send('witaj');
});
// products display
router.get("/products/:productId?", async (req, res) => {
  let { productId } = req.params;

  if (productId) {
    res.send(await Product.findById(productId));
  } else {
    res.send(await Product.find());
  }
});

app.use(router);

app.listen(4001, () => console.log("server runing"));
