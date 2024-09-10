require("dotenv").config();
const { Telegraf, Scenes, session } = require("telegraf");
const userScene = require("../scenes/user");
const registerScene = require("../scenes/user/register");
const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Scenes.Stage([userScene, registerScene]);

bot.use(session());
bot.use(stage.middleware());

bot.start((context) => {
  context.scene.enter("userScene");
});

bot.command("get_menu", (context) => {
  context.scene.enter("userScene");
});

module.exports = bot;
