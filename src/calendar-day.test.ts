import { formatISO, getDate, getDay, getMonth, getYear } from 'date-fns';

import { CalendarDay } from './calendar-day';
import { DayOfWeek } from './interfaces';

describe('CalendarDay', () => {
  it('should return day for past date', () => {
    const date = new Date(2020, 6, 1);
    const day = new CalendarDay(date);

    expect(day.isoString).toBe('2020-07-01');
    expect(day.day).toBe(1);
    expect(day.dayOfWeek).toBe(DayOfWeek.Wednesday);
    expect(day.month).toBe(6);
    expect(day.year).toBe(2020);
    expect(day.isFuture).toBe(false);
    expect(day.isPast).toBe(true);
    expect(day.isToday).toBe(false);
  });

  it('should return day for today', () => {
    const date = new Date();
    const day = new CalendarDay(date);

    expect(day.isoString).toBe(formatISO(date, { representation: 'date' }));
    expect(day.day).toBe(getDate(date));
    expect(day.dayOfWeek).toBe(getDay(date));
    expect(day.month).toBe(getMonth(date));
    expect(day.year).toBe(getYear(date));
    expect(day.isFuture).toBe(false);
    expect(day.isPast).toBe(false);
    expect(day.isToday).toBe(true);
  });

  it('should return day for future date', () => {
    const date = new Date(2121, 6, 1);
    const day = new CalendarDay(date);

    expect(day.isoString).toBe('2121-07-01');
    expect(day.day).toBe(1);
    expect(day.dayOfWeek).toBe(DayOfWeek.Tuesday);
    expect(day.month).toBe(6);
    expect(day.year).toBe(2121);
    expect(day.isFuture).toBe(true);
    expect(day.isPast).toBe(false);
    expect(day.isToday).toBe(false);
  });
});
