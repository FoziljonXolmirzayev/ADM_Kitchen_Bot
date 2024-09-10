const { Composer, Scenes, Markup } = require("telegraf");
const Users = require("../../modules/users/model");
const Menu = require("../../modules/menu/model");
const Order = require("../../modules/orders/model");
const { Op } = require("sequelize");

const indexWizard = new Composer();

indexWizard.start(async (context) => {
  try {
    const foundUser = await Users.findOne({
      where: { telegramId: context.from.id },
    });

    if (!foundUser) {
      await context.reply("Botdan foydalanish uchun avval ro'yxatdan o'ting!");
      return context.scene.enter("registerScene");
    }

    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const menu = await Menu.findOne({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      order: [["createdAt", "DESC"]],
    });

    if (!menu) {
      return context.reply("Bugungi menyu topilmadi.");
    }

    await context.reply(
      `Bugungi menyu: ${menu.description}\nHafta kuni: ${menu.weekday}`,
      Markup.inlineKeyboard([
        [Markup.button.callback("Order berish", `order_${menu.id}`)],
      ])
    );
  } catch (error) {
    context.reply("Xatolik yuz berdi!");
  }
});

indexWizard.command("get_menu", async (context) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const menu = await Menu.findOne({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      order: [["createdAt", "DESC"]],
    });

    if (!menu) {
      return context.reply("Bugungi menyu topilmadi.");
    }

    const foundOrder = await Order.findOne({
      where: { menuId: menu.id, isCanceled: false },
    });
    if (foundOrder) {
      return await context.reply(
        `Bugungi menyu: ${menu.description}\nHafta kuni: ${menu.weekday}`,
        Markup.inlineKeyboard([
          [
            Markup.button.callback(
              "❌ Orderni bekor qilish",
              `cancel_order_${foundOrder.id}`
            ),
          ],
        ])
      );
    }

    return await context.reply(
      `Bugungi menyu: ${menu.description}\nHafta kuni: ${menu.weekday}`,
      Markup.inlineKeyboard([
        [Markup.button.callback("Order berish", `order_${menu.id}`)],
      ])
    );
  } catch (error) {
    context.reply("Xatolik yuz berdi!");
  }
});

indexWizard.action(/cancel_order_(.+)/, async (context) => {
  try {
    const orderId = context.match[1];
    const { id: telegramId } = context.from;

    const user = await Users.findOne({ where: { telegramId } });

    if (!user) {
      return context.reply("Uzur, bunday foydalanuvchi topilmadi!");
    }

    const foundOrder = await Order.update(
      {
        isCanceled: true,
      },
      {
        where: {
          id: orderId,
          userId: user.id,
        },
      }
    );

    return context.reply("Siz buyurtmani muvaffaqiyatli bekor qildingiz!");
  } catch (error) {
    context.reply("Xatolik yuz berdi.");
  }
});

indexWizard.action(/order_(.+)/, async (context) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const menuId = context.match[1];
    const { id: telegramId } = context.from;

    const user = await Users.findOne({ where: { telegramId } });
    const foundOrder = await Order.findOne({
      where: {
        userId: user.id,
        isCanceled: false,
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    if (!user) {
      return context.reply("Foydalanuvchi topilmadi.");
    }

    if (foundOrder) {
      return context.reply("Siz avval zakaz bergansiz!");
    }

    const order = await Order.create({
      userId: user.id,
      menuId: menuId,
    });

    return context.reply(
      "Order muvaffaqiyatli berildi!",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "❌ Orderni bekor qilish",
            `cancel_order_${order.id}`
          ),
        ],
      ]).oneTime()
    );
  } catch (error) {
    context.reply("Order berishda xatolik yuz berdi.");
  }
});

const userScene = new Scenes.WizardScene("userScene", indexWizard);

module.exports = userScene;
