import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BotService {
  private lessons: string[] = [];
  private currentIndex = 0;

  constructor() {
    // lessons.json faylni o‘qish
    const filePath = path.join(__dirname, '..', 'lessons.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.lessons = JSON.parse(data);
  }

  getNextLesson(): string {
    if (this.currentIndex >= this.lessons.length) {
      return '✅ Barcha darslar tugadi!';
    }

    const lesson = this.lessons[this.currentIndex];
    this.currentIndex++;
    return `📘 ${lesson}`;
  }

  resetLessons(): string {
    this.currentIndex = 0;
    return '🔁 Darslar boshidan boshlanmoqda!';
  }
}
