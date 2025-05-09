const {
  fetchProduct,
  addProduct,
  fetchSingleProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(fetchProduct).post(addProduct);
router.route("/:id").get(fetchSingleProduct);

module.exports = router;
