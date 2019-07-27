const express = require("express");
var cors = require('cors')
const app = express();
const router = express.Router();
const utilities = require("./utilities/utilites");
app.use(cors())
// utilities
const {

  Product,
  Order

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

router.post("/order/:productId/:firstName/:lastName/:email/:telNumber/:itWasPaid/:toPay/:timeOfSub/:quantOfsubscriptions", async (req, res) => {
  let { productId, firstName, lastName, email, telNumber, itWasPaid, toPay, timeOfSub, quantOfsubscriptions } = req.params;
  console.log(timeOfSub)
  const order = new Order({
    productId: productId,
    user: {
      firstName,
      lastName,
      email,
      telNumber
    },
    pay: {
      itWasPaid,
      toPay,
      timeOfSub,
      quantOfsubscriptions
    },
  });
  await order.save();
  res.send(order)

})


app.use(router);

app.listen(4001, () => console.log("server runing"));
