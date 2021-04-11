import { CalendarMonth } from './calendar-month';

describe('CalendarMonth', () => {
  it('should return month', () => {
    const date = new Date(2021, 0, 1);
    const month = new CalendarMonth(date);

    expect(month.year).toBe(2021);
    expect(month.month).toBe(0);
    expect(month.weeks.length).toBe(6);
  });
});
