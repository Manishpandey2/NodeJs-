const {
  fetchProduct,
  addProduct,
  fetchSingleProduct,
  updateProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(fetchProduct).post(addProduct);
router.route("/:id").get(fetchSingleProduct).patch(updateProduct);

module.exports = router;
