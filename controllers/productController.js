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

exports.addProduct = async (req, res) => {
  const { productName, productDescription, productPrice, productCategory } =
    req.body;
  if (
    !productName ||
    !productDescription ||
    !productPrice ||
    !productCategory
  ) {
    return res.json({
      message: "All the fields are required",
    });
  }
  await product.create({
    productName,
    productDescription,
    productPrice,
    productCategory,
  });
  res.json({
    message: "New Product added",
  });
};

exports.fetchSingleProduct = async (req, res) => {
  const id = req.params.id;
  const singleProduct = await product.findByPk(id);
  res.json({
    message: "Single product fetched successfully",
    singleProduct,
  });
};
