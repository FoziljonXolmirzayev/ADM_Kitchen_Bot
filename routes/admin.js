const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  sendMenuToUsers,
} = require("../modules/admin");
const { login } = require("../modules/auth");
const { getOrders } = require("../modules/orders");
const adminRoute = express.Router();

adminRoute.post("/create", createUser);
adminRoute.post("/send", sendMenuToUsers);
adminRoute.post("/login", login);
adminRoute.get("/users", getUsers);
adminRoute.get("/orders", getOrders);
adminRoute.put("/update/:id", updateUser);
adminRoute.delete("/delete/:id", deleteUser);

module.exports = adminRoute;
