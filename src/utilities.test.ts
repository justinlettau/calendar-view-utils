import { DayOfWeek } from './interfaces';
import { getWeekDays } from './utilities';

describe('utilities', () => {
  it('should return Sunday first by default', () => {
    const result = getWeekDays();

    expect(result).toEqual([
      DayOfWeek.Sunday,
      DayOfWeek.Monday,
      DayOfWeek.Tuesday,
      DayOfWeek.Wednesday,
      DayOfWeek.Thursday,
      DayOfWeek.Friday,
      DayOfWeek.Saturday,
    ]);
  });

  it('should return requested day first', () => {
    const result = getWeekDays(DayOfWeek.Monday);

    expect(result).toEqual([
      DayOfWeek.Monday,
      DayOfWeek.Tuesday,
      DayOfWeek.Wednesday,
      DayOfWeek.Thursday,
      DayOfWeek.Friday,
      DayOfWeek.Saturday,
      DayOfWeek.Sunday,
    ]);
  });
});
