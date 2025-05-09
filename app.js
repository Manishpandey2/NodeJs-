const express = require("express");
const app = express();
require("./database/connection");

app.listen(3000, () => {
  console.log("Server is running on port no 3000");
});
