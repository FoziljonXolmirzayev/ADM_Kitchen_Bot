const { Composer, Scenes } = require("telegraf");
const Users = require("../../modules/users/model");

const registerWizard = new Composer();

registerWizard.start(async (context) => {
  try {
    await context.reply("To'liq ismingizni kiriting!");
    context.wizard.next();
  } catch (error) {
    console.log(error);
  }
});

const getUserNameWizard = new Composer();

getUserNameWizard.on("text", async (context) => {
  try {
    context.wizard.state.registerData = { name: context.message.text };

    await context.reply("Table raqamingizni kiriting! (Misol uchun: AB1234)");

    context.wizard.next();
  } catch (error) {
    console.log(error);
  }
});

const getUserTableIdWizard = new Composer();

getUserTableIdWizard.on("text", async (context) => {
  try {
    console.log("heeey");
    const tableId = context.message.text;

    const tableIdRegex = /^[A-Z]{2}\d{4}$/;
    console.log(tableId);
    if (!tableIdRegex.test(tableId)) {
      return await context.reply(
        "Table raqamingizni to'g'ri formatda kiriting! (Misol uchun: AB1234)"
      );
    }

    context.wizard.state.registerData.tableId = context.message.text;

    await Users.create({
      ...context.wizard.state.registerData,
      telegramId: context.from.id,
    });

    console.log(context.update.message.chat);

    await context.reply("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");

    context.scene.enter("userScene");
  } catch (error) {
    console.log(error);
    context.reply("Ro'yxatdan o'tishda xatolik yuz berdi.");
  }
});

const registerScene = new Scenes.WizardScene(
  "registerScene",
  registerWizard,
  getUserNameWizard,
  getUserTableIdWizard
);

module.exports = registerScene;
