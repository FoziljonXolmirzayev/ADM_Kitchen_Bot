const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Db connected");
  })
  .catch((error) => console.log("connection failed with error: ", error));

module.exports = sequelize;
