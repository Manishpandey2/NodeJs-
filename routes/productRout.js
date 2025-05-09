const {
  fetchProduct,
  addProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(fetchProduct).post(addProduct);

module.exports = router;
