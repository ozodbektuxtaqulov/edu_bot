import { Start, Update, Command, Context } from 'nestjs-telegraf';

@Update()
export class BotUpdate {
  @Start()
  async onStart(@Context() ctx: any) {
    await ctx.reply('Salom! Kurs botiga xush kelibsiz!');
  }

  @Command('course')
  async onCourse(@Context() ctx: any) {
    const lessons = [
      '1-dars: Kirish',
      '2-dars: Ozgaruvchilar',
      '3-dars: If else',
    ];
    await ctx.reply('📚 Darslar:\n\n' + lessons.join('\n'));
  }
}
