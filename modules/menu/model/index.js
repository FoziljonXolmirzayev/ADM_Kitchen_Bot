const { DataTypes } = require("sequelize");
const sequelize = require("../../../configs");

const Menu = sequelize.define(
  "Menu",
  {
    description: { type: DataTypes.STRING, allowNull: false },
    weekday: { type: DataTypes.STRING, allowNull: false },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: { type: DataTypes.DATE },
  },
  { tableName: "Menu", timestamps: true }
);

module.exports = Menu;
