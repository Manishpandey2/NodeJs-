const { fetchProduct } = require("../controllers/productController");

const router = require("express").Router();

router.route("/").get(fetchProduct);

module.exports = router;
