[![NPM Version](https://badge.fury.io/js/calendar-view-utils.svg)](https://badge.fury.io/js/calendar-view-utils)
[![CI](https://github.com/justinlettau/calendar-view-utils/workflows/CI/badge.svg)](https://github.com/justinlettau/calendar-view-utils/actions)
[![codecov](https://codecov.io/gh/justinlettau/calendar-view-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/calendar-view-utils)
[![Dependency Status](https://david-dm.org/justinlettau/calendar-view-utils.svg)](https://david-dm.org/justinlettau/calendar-view-utils)
[![Dev Dependency Status](https://david-dm.org/justinlettau/calendar-view-utils/dev-status.svg)](https://david-dm.org/justinlettau/calendar-view-utils?type=dev)

# Calendar View Utilities

Utilities for generating calendar views.

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [CalendarMonth](#calendar-month)
  - [CalendarWeek](#calendar-week)
  - [CalendarDay](#calendar-day)
- [Development](#development)

# Features

- 📅 Tools to **create your own** UI or component.
- 🛠 Works with native `Date` objects, **no library** required.
- 🎉 Written in **TypeScript**.

# Installation

```bash
npm install calendar-view-utils --save
```

# Usage

```ts
import { CalendarMonth, DayOfWeek, getWeekDays } from 'calendar-view-utils';

const date = new Date(2021, 0, 1);
const month = new CalendarMonth(date);

console.log(month);
/* =>
{
  year: 2021,
  month: 0,
  weeks: [
    {
      isoWeek: 0,
      days: [
        {
          day: 1,
          month: 0,
          year: 2021,
          isToday: false,
          isPast: true,
          isFuture: false,
        },
        ...
      ],
    },
    ...
  ],
}
*/

const daysOfWeek = getWeekDays();

console.log(daysOfWeek);
/* =>
[
  DayOfWeek.Sunday,
  DayOfWeek.Monday,
  DayOfWeek.Tuesday,
  DayOfWeek.Wednesday,
  DayOfWeek.Thursday,
  DayOfWeek.Friday,
  DayOfWeek.Saturday,
]
*/
```

# Development

```
npm install
npm run build
```
