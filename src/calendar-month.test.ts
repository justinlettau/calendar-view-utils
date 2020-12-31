import { getMonth, getYear } from 'date-fns';

import { CalendarMonth } from './calendar-month';

describe('CalendarMonth', () => {
  it('should return month', () => {
    const date = new Date(2021, 0, 1);
    const month = new CalendarMonth(date);

    expect(month.year).toBe(getYear(date));
    expect(month.month).toBe(getMonth(date));
    expect(month.weeks.length).toBe(6);
  });
});
