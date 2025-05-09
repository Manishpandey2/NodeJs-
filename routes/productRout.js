const {
  fetchProduct,
  addProduct,
  fetchSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(fetchProduct).post(addProduct);
router
  .route("/:id")
  .get(fetchSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
