import {
  formatISO,
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
    this.isoString = formatISO(date, { representation: 'date' });
    this.day = getDate(date);
    this.month = getMonth(date);
    this.year = getYear(date);
    this.isToday = isToday(date);
    this.isPast = isPast(date);
    this.isFuture = isFuture(date);
  }

  isoString: string;
  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
}
