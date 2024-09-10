const { DataTypes } = require("sequelize");
const sequelize = require("../../../configs");

const Users = sequelize.define(
  "User",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    tableId: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.ENUM("ADMIN", "USER"), defaultValue: "USER" },
    telegramId: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    tableName: "User",
    timestamps: true,
  }
);

module.exports = Users;
