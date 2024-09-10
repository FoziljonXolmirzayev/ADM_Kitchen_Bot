const { Op } = require("sequelize");
const Users = require("../users/model");
const { validateUser } = require("../users/validator");
const Order = require("../orders/model");
const Menu = require("../menu/model");
const bot = require("../../configs/bot");

module.exports.createUser = async (req, res) => {
  try {
    const { value, error } = validateUser(req.body);
    console.log(value);
    if (error) {
      res.send("Incorrect data !!! " + error);
      return;
    }
    const createdUser = await Users.create(value);
    res.send(createdUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    if (users === null) {
      res.send("There aren't any users");
      return;
    }
    res.send(users);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const { name, tableId } = req.body;
    const updatedUser = Users.update(
      {
        name,
        tableId,
      },
      { where: { id: req.params.id } }
    );
    res.send(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (!userId || userId == ":id" || userId <= 0) {
      res.sends("Incorrect data !");
      return;
    }
    const deletedUser = await Users.destroy({ where: { id: userId } });
    res.json({ deletedUser });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.sendMenuToUsers = async (req, res) => {
  try {
    const menu = await Menu.findOne({
      order: [["createdAt", "DESC"]],
    });

    if (!menu) {
      return res.status(404).send("Menu topilmadi");
    }

    const users = await Users.findAll();

    for (const user of users) {
      const message = `Bugungi menyu: ${menu.description}\nHafta kuni: ${menu.weekday}`;
      console.log(bot, user.telegramId, message);

      await bot.telegram.sendMessage(user.telegramId, message);
    }

    res.status(200).send("Barcha userlarga menyu yuborildi.");
  } catch (error) {
    console.error("Xato yuz berdi: ", error);
    res.status(500).send("Server xatosi: menyu yuborilmadi");
  }
};
