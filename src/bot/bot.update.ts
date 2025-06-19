import { Injectable } from '@nestjs/common';
import { Ctx, Hears, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { BotService } from './bot.service';

@Update()
@Injectable()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  private dangasalar = [
    8128852304, 7262031629, 6795118006, 1840817356, 7266333975, 6588250694,
    7377144555, 5411202292, 5107358906, 6751897146, 5491621573, 887964728,
  ];
  @Start()
  onStart(@Ctx() ctx: Context) {
    return this.botService.onStart(ctx);
  }

  @Hears('Help')
  onHelp(@Ctx() ctx: Context) {
    return this.botService.onHelp(ctx);
  }

  @Hears('Settings')
  onSettings(@Ctx() ctx: Context) {
    return this.botService.onSettings(ctx);
  }

  @Hears('Menu')
  onMenu(@Ctx() ctx: Context) {
    return this.botService.onMenu(ctx);
  }

  @On('text')
  async onText(@Ctx() ctx: Context) {
    const userId = ctx.from?.id;
    const text = ctx.message;

    if (!userId || !text) return;

    if (userId === 2057409728) {
      for (let dangasa of this.dangasalar) {
        await ctx.telegram.sendMessage(
          dangasa,
          `${ctx.from.first_name}dan kelgan xabar:\n${text}`,
        );
      }
    } else {
      await ctx.reply(
        '🚫 Bot faqat tugmalar orqali ishlaydi. Xabarlarga javob berish ruxsat etilmagan.',
      );
    }
  }

  @On('photo')
  onPhoto(@Ctx() ctx: Context) {
    if (ctx.from && ctx.from.id === 2057409728) {
      if (ctx.message && 'photo' in ctx.message) {
        for (let dangasa of this.dangasalar) {
          ctx.telegram.sendPhoto(dangasa, ctx.message.photo[0].file_id);
        }
      }
    }
  }

  @On('video')
  onVideo(@Ctx() ctx: Context) {
    if (ctx.from && ctx.from.id === 2057409728) {
      if (ctx.message && 'video' in ctx.message) {
        for (let dangasa of this.dangasalar) {
          ctx.telegram.sendVideo(dangasa, ctx.message.video.file_id);
        }
      }
    }
  }

  @On('audio')
  onAudio(@Ctx() ctx: Context) {
    if (ctx.from && ctx.from.id === 2057409728) {
      if (ctx.message && 'audio' in ctx.message) {
        for (let dangasa of this.dangasalar) {
          ctx.telegram.sendAudio(dangasa, ctx.message.audio.file_id);
        }
      }
    }
  }

  @On('voice')
  onVoice(@Ctx() ctx: Context) {
    if (ctx.from && ctx.from.id === 2057409728) {
      if (ctx.message && 'voice' in ctx.message) {
        for (let dangasa of this.dangasalar) {
          ctx.telegram.sendVoice(dangasa, ctx.message.voice.file_id);
        }
      }
    }
  }
}
