import { addDays, getISOWeek, startOfWeek } from 'date-fns';

import { CalendarDay } from './calendar-day';
import { CalendarOptions, DayOfWeek } from './interfaces';

/**
 * Calendar week.
 */
export class CalendarWeek {
  constructor(date: Date, options?: CalendarOptions) {
    this.options = options;
    this.days = this.getDays(date);

    const thursday = this.days.find(
      (x) => x.dayOfWeek === DayOfWeek.Thursday
    ) as CalendarDay;
    this.isoWeek = getISOWeek(thursday.date);
  }

  isoWeek: number;
  days: CalendarDay[];
  private options: CalendarOptions | undefined;

  /**
   * Get all days for the week.
   *
   * @param target Target date.
   */
  private getDays(target: Date) {
    const days: CalendarDay[] = [];
    const weekStartsOn = this.options?.weekStartsOn;
    let date = startOfWeek(target, { weekStartsOn });

    for (let index = 0; index < 7; index++) {
      const day = new CalendarDay(date);
      days.push(day);
      date = addDays(date, 1);
    }

    return days;
  }
}
