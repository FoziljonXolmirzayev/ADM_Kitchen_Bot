const { DataTypes } = require("sequelize");
const sequelize = require("../../../configs");
const Order = require("../../orders/model");

const Menu = sequelize.define(
  "Menu",
  {
    description: { type: DataTypes.STRING, allowNull: false },
    weekday: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "Menu", timestamps: true }
);

module.exports = Menu;
