import {
  addWeeks,
  differenceInCalendarISOWeeks,
  endOfMonth,
  endOfWeek,
  getMonth,
  getYear,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import { CalendarWeek } from './calendar-week';
import { CalendarOptions } from './interfaces';

/**
 * Calendar month.
 */
export class CalendarMonth {
  constructor(date: Date, options?: CalendarOptions) {
    this.options = options;
    this.year = getYear(date);
    this.month = getMonth(date);
    this.weeks = this.getWeeks(date);
  }

  year: number;
  month: number;
  weeks: CalendarWeek[];
  private options: CalendarOptions | undefined;

  /**
   * Get all weeks for the month.
   *
   * @param target Target date.
   */
  private getWeeks(target: Date) {
    const weeks: CalendarWeek[] = [];
    const weekStartsOn = this.options?.weekStartsOn;
    const start = startOfWeek(startOfMonth(target), { weekStartsOn });
    const end = endOfWeek(endOfMonth(target), { weekStartsOn });
    let diff = differenceInCalendarISOWeeks(end, start);
    let date = start;

    while (diff--) {
      const week = new CalendarWeek(date);
      weeks.push(week);
      date = addWeeks(date, 1);
    }

    return weeks;
  }
}
