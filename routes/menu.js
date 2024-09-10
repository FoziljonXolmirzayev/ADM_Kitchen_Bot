const express = require("express");
const {
  createMenu,
  getMenus,
  deleteMenu,
  updateMenu,
} = require("../modules/menu");
const menuRoute = express.Router();

menuRoute.post("/create", createMenu);
menuRoute.get("/get", getMenus);
menuRoute.delete("/delete/:id", deleteMenu);
menuRoute.put("/update/:id", updateMenu);

module.exports = menuRoute;
