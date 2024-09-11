const Users = require("../users/model");
const Menu = require("../menu/model");
const Order = require("../orders/model");

Users.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(Users, { foreignKey: "userId", onDelete: "CASCADE" });

Menu.hasMany(Order, { foreignKey: "menuId" });
Order.belongsTo(Menu, { foreignKey: "menuId" });
