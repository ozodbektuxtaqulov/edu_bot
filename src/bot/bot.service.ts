import { Injectable } from '@nestjs/common';
import { Context, Markup } from 'telegraf';

@Injectable()
export class BotService {
  async onStart(ctx: Context) {
    try {
      ctx.reply(
        'Botga xush kelibsiz 😊',
        Markup.keyboard([
          ['Settings', 'Help'],
          ['Menu', 'Payment'],
        ])
          .resize()
          .oneTime(),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async onHelp(ctx: Context) {
    await ctx.reply(
      `🆘 Yordam kerakmi?\nSiz menga bu raqam orqali bog'lanishingiz mumkin: 📞 910097959`,
    );
  }

  async onSettings(ctx: Context) {
    await ctx.reply('⚙️ Hozircha sozlamalar mavjud emas. Tez orada!');
  }

  async onMenu(ctx: Context) {
    await ctx.reply('📋 Hozircha menyu mavjud emas. Tez orada yangilanadi!');
  }

  async onUnknownText(ctx: Context) {
    await ctx.reply('⚠️ Bot faqat tugmalar orqali ishlaydi.');
  }
}
