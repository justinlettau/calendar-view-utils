import {
  getDate,
  getMonth,
  getYear,
  isFuture,
  isPast,
  isToday,
} from 'date-fns';

/**
 * Calendar day.
 */
export class CalendarDay {
  constructor(date: Date) {
    this.day = getDate(date);
    this.month = getMonth(date);
    this.year = getYear(date);
    this.isToday = isToday(date);
    this.isPast = isPast(date);
    this.isFuture = isFuture(date);
  }

  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
}
