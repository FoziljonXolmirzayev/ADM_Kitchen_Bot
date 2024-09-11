const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  sendMenuToUsers,
} = require("../modules/admin");
const { getOrders } = require("../modules/orders");
const {
  createMenu,
  getMenus,
  deleteMenu,
  updateMenu,
} = require("../modules/menu");
const mainRoute = express.Router();

mainRoute.post("/user/create", createUser);
mainRoute.post("/send", sendMenuToUsers);
mainRoute.get("/users", getUsers);
mainRoute.put("/user/update/:id", updateUser);
mainRoute.delete("/user/delete/:id", deleteUser);

mainRoute.get("/orders", getOrders);

mainRoute.post("/menu/create", createMenu);
mainRoute.get("/menus", getMenus);
mainRoute.delete("/menu/delete/:id", deleteMenu);
mainRoute.put("/menu/update/:id", updateMenu);

module.exports = mainRoute;
