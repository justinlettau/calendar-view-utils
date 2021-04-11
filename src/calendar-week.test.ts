import { CalendarWeek } from './calendar-week';

describe('CalendarWeek', () => {
  it('should return week', () => {
    const date = new Date(2021, 0, 1);
    const week = new CalendarWeek(date);

    expect(week.isoWeek).toBe(53);
    expect(week.days.length).toBe(7);
  });

  it('should return isoWeek for Thursday in week', () => {
    const date = new Date(2021, 0, 10);
    const week = new CalendarWeek(date);

    expect(week.isoWeek).toBe(2);
  });
});
