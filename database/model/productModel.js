const productModel = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productCategory: {
      type: DataTypes.STRING,
    },
  });
  return product;
};
module.exports = productModel;
