import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as dotenv from 'dotenv';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';

dotenv.config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '7221582661:AAHKXXUlYTg6_j8PUXhV0WgD6tQ8tx6eUDY',
    }),
  ],
  providers: [BotUpdate, BotService],
})
export class BotModule {}
