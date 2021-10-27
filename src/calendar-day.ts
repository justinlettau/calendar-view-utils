import {
  formatISO,
  getDate,
  getDay,
  getMonth,
  getYear,
  isFuture,
  isPast,
  isToday,
} from 'date-fns';

import { DayOfWeek } from './interfaces';

/**
 * Calendar day.
 */
export class CalendarDay {
  constructor(date: Date) {
    this.date = date;
    this.isoString = formatISO(date, { representation: 'date' });
    this.dayOfWeek = getDay(date);
    this.day = getDate(date);
    this.month = getMonth(date);
    this.year = getYear(date);
    this.isToday = isToday(date);
    this.isPast = !this.isToday && isPast(date);
    this.isFuture = !this.isToday && isFuture(date);
  }

  date: Date;
  isoString: string;
  dayOfWeek: DayOfWeek;
  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
}
