const { DataTypes } = require("sequelize");
const sequelize = require("../../../configs");

const Order = sequelize.define(
  "Order",
  {
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Menu",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    isCanceled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { tableName: "Orders", timestamps: true }
);

module.exports = Order;
