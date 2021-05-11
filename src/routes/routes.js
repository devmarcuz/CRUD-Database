const express = require("express");
const services = require("../controllers/controllers");
const route = express.Router();

route.post("/", services.createData);
route.get("/", services.fetchData);
route.put("/:id", services.updateData);
route.delete("/:id", services.deleteData);

module.exports = route;
