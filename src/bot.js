import { Markup, session, Telegraf } from "telegraf";
import log from "consola";
import { User } from "./models/user.model.js";
import { messageUZ, messageRU, messageEN } from "./messages/index.js";
import userService from "./services/user.service.js";
import { envConfig, sequelize } from "./config/index.js";
import { langKeyboard } from "./keyboards/index.js";
import { message } from "telegraf/filters";

const { token } = envConfig.bot;
const { port } = envConfig.app;

const bot = new Telegraf(token);

bot.use(session());

const messages = {
  uz: messageUZ,
  ru: messageRU,
  en: messageEN,
};

const images = {
    
}

async function start(bot) {
  try {
    bot.start(async (ctx) => {
      const userInfo = ctx.from;
      const user = await userService.findOneUser(userInfo.id);
      if (!user) {
        await userService.createUser(userInfo);
      }

      ctx.reply(
        "Asalomu alaykum\n\nXush kelibsiz iltimos bot tilini tanlang",
        langKeyboard
      );
    });

    bot.action(["lang_uz", "lang_en", "lang_ru"], async (ctx) => {
      ctx.answerCbQuery();

      const userInfo = ctx.update.callback_query.from;
      const lang = ctx.update.callback_query.data.split("_")[1];

      await userService.updateUser({ language_code: lang });

      console.log("userInfo =>", userInfo);
      console.log("lang =>", lang);

      ctx.reply(
        messages[lang].name,
        Markup.keyboard([[userInfo.first_name]])
          .resize()
          .oneTime()
      );
    });

    bot.on("text", async (ctx) => {
      const userInfo = ctx.from;
      const text = ctx.text;

      ctx.session = { name: userInfo };
      console.log(ctx.session);

      if (!ctx.session) {
        ctx.session = { [userInfo.id]: {} };
      }

      console.log("id =>", ctx.session);

      if (ctx.session[userInfo.id]) {
        console.log("done");
      }


    });


    bot.launch(() => {
      log.box("Bot ishga tushdi");
    });
  } catch (error) {
    log.error("Botni ishga tushirishda xatolik yuz berdi");
    process.exit(1);
  }
}

(async () => {
  try {
    /* ========== Ma'lumotlar bazasiga ulanishni tekshirish ========== */
    await sequelize.authenticate();
    log.success("Ma'lumotlar bazasiga muvaffaqiyatli ulandi");

    /* ========== Development muhitda ishga tushganda ma'lumotlar bazasini synxronlash ========== */
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      log.success("Ma'lumotlar bazasi synxronlandi");
    }

    await start(bot);
  } catch (error) {
    log.error("Ma'lumotlar bazasiga ulanishda xatolik", error.message);
    process.exit(1);
  }
})();
