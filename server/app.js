const express = require("express");
var cors = require('cors')
const app = express();
const router = express.Router();
const utilities = require("./utilities/utilites");
app.use(cors())
// utilities
const {

  Product,
  cartModel

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

router.put("/cart/:productId/:firstName?/:lastName?/:email?/:telNumber?", async (req, res) => {
  let { productId, firstName, lasName, email, telNumber } = req.params;

  const cart = new cartModel({
    productId: productId,
    user: {
      firstName: firstName,
      lastName: lasName,
      email: email,
      telNumber: telNumber
    }
  });
  await cart.save();
  res.send("dodano")

})

// router.delete("/cart/clear", async (req, res =>{

// }))

app.use(router);

app.listen(4001, () => console.log("server runing"));
