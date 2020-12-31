import { getDate, getMonth, getYear } from 'date-fns';

import { CalendarDay } from './calendar-day';

describe('CalendarDay', () => {
  it('should return day for past date', () => {
    const date = new Date(2020, 6, 1);
    const day = new CalendarDay(date);

    expect(day.day).toBe(1);
    expect(day.month).toBe(6);
    expect(day.year).toBe(2020);
    expect(day.isFuture).toBe(false);
    expect(day.isPast).toBe(true);
    expect(day.isToday).toBe(false);
  });

  it('should return day for today', () => {
    const date = new Date();
    const day = new CalendarDay(date);

    expect(day.day).toBe(getDate(date));
    expect(day.month).toBe(getMonth(date));
    expect(day.year).toBe(getYear(date));
    expect(day.isFuture).toBe(false);
    expect(day.isPast).toBe(false);
    expect(day.isToday).toBe(true);
  });

  it('should return day for future date', () => {
    const date = new Date(2121, 6, 1);
    const day = new CalendarDay(date);

    expect(day.day).toBe(1);
    expect(day.month).toBe(6);
    expect(day.year).toBe(2121);
    expect(day.isFuture).toBe(true);
    expect(day.isPast).toBe(false);
    expect(day.isToday).toBe(false);
  });
});
