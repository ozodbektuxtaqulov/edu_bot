import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as dotenv from 'dotenv';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';

dotenv.config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '7787597671:AAEgQBurzQ_Y7pFl3yKgILrnT0H0efT3q7I',
    }),
  ],
  providers: [BotUpdate, BotService],
})
export class BotModule {}
