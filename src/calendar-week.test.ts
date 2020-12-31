import { getISOWeek } from 'date-fns';

import { CalendarWeek } from './calendar-week';

describe('CalendarWeek', () => {
  it('should return week', () => {
    const date = new Date(2021, 0, 1);
    const week = new CalendarWeek(date);

    expect(week.isoWeek).toBe(getISOWeek(date));
    expect(week.days.length).toBe(7);
  });
});
