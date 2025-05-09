const express = require("express");
const app = express();
require("./database/connection");

const productRoute = require("./routes/productRout");

app.use(express.json());

app.use("/products", productRoute);
app.listen(3000, () => {
  console.log("Server is running on port no 3000");
});
