const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller.js");

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);

  console.log("Good to go!");
});

app.use(bodyParser.json());


app.get("/api/inventory", controller.getAll);
app.post("/api/product", controller.create);
app.delete("/api/products", controller.deleteById);

app.listen(3001, () => {
  console.log("app listening on port 3001");
});