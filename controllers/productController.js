const { product } = require("../database/connection");

exports.fetchProduct = async (req, res) => {
  const productData = await product.findAll();
  if (productData.length == 0) {
    return res.json({
      message: "There is no any product yet",
    });
  }

  res.json({
    message: "Product fetched successfully",
    productData,
  });
};
