import { DayOfWeek } from './interfaces.js';

/**
 * Get week days in order.
 *
 * @param weekStartsOn Starting day.
 */
export function getWeekDays(weekStartsOn?: DayOfWeek) {
  const days = [
    DayOfWeek.Sunday,
    DayOfWeek.Monday,
    DayOfWeek.Tuesday,
    DayOfWeek.Wednesday,
    DayOfWeek.Thursday,
    DayOfWeek.Friday,
    DayOfWeek.Saturday,
  ];

  if (!weekStartsOn) {
    return days;
  }

  const index = weekStartsOn.valueOf();
  const first = days.splice(index);

  return [...first, ...days];
}
