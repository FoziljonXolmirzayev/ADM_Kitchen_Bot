const { Markup } = require("telegraf");
const Users = require("./model");

exports.checkUserExisting = async (phone) => {
  try {
    const foundUser = await Users.findOne({ where: { tableId: phone } });
    return !!foundUser;
  } catch (error) {
    throw new Error(error);
  }
};

exports.onStart = async function (ctx) {
  try {
    ctx.reply("Send me your number please", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "📲 Send phone number",
              request_contact: true,
            },
          ],
        ],
        resize_keyboard: true,
      },
    });
  } catch (error) {
    ctx.reply("Something whent wrong!");
  }
};

exports.onEnterTableName = async function (ctx) {
  try {
    const tableId = ctx.message.text;
    const { id: userId, first_name, last_name } = ctx.message.chat;

    const foundUser = await Users.findOne({
      where: { tableId, telegramId: userId },
    });

    if (foundUser) {
      ctx.reply("You was signed in early!");
      return;
    }

    const createdUser = await Users.create({
      tableId,
      telegramId: userId,
      name: first_name + " " + last_name,
    });

    if (createdUser) {
      ctx.reply(
        "Welcome to our bot.",
        Markup.keyboard(["Get menu", "Order menu"]).resize().oneTime()
      );
    }
  } catch (error) {
    ctx.reply("error");
  }
};
exports.getMenu = async function (ctx) {
  try {
    ctx.reply("");
  } catch (error) {
    ctx.reply("error");
  }
};
