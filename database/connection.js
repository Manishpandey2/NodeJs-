const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.ubudmlhglelggkoeoqqq:HellYeahBro123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.product = require("./model/productModel")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established");
  })
  .catch((error) => {
    console.log("Unable to connect database");
  });

sequelize.sync({ alter: false }).then(() => {
  console.log("database sync successfully");
});

module.exports = db;
