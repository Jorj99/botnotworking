const {
    Telegraf,
    session,
    Scenes: { Stage },
  } = require('telegraf');
  require('dotenv').config({ path: `envs/.env.${process.env.ENV}` });

  const port = process.env.PORT || 3000;
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.use(session());

  bot.start(async (ctx) => {
    await ctx.replyWithHTML("The bot currently isn't available");
  });

  bot.on('text', async (ctx) => {
      await ctx.replyWithHTML("The bot currently isn't available");
  });

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

  bot.launch();
