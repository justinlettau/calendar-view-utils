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
  - [CalendarMonth](#calendarmonth)
  - [CalendarWeek](#calendarweek)
  - [CalendarDay](#calendarday)
  - [Options](#options)
  - [Utilities](#utilities)
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
import { CalendarMonth } from 'calendar-view-utils';

const date = new Date(2021, 0, 1);

const view = new CalendarMonth(date);
console.log(view);
```

See the [example](./example) folder for a working example.

## `CalendarMonth`

Create a `CalendarMonth` for the target `date`. A `CalendarMonth` contains all the needed information
for building a standard month view.

```ts
new CalendarMonth(date);
```

| Property | Description                        | Type             |
| -------- | ---------------------------------- | ---------------- |
| `year`   | Year value                         | `number`         |
| `month`  | Month value                        | `month`          |
| `weeks`  | Collection of weeks with the month | `CalendarWeek[]` |

## `CalendarWeek`

Create a `CalendarWeek` for the target `date`. A `CalendarWeek` contains all the needed information
for building a standard week view.

```ts
new CalendarWeek(date);
```

| Property  | Description                        | Type            |
| --------- | ---------------------------------- | --------------- |
| `isoWeek` | ISO week value                     | `month`         |
| `days`    | Collection of days within the week | `CalendarDay[]` |

## `CalendarDay`

Create a `CalendarDay` for the target `date`.

```ts
new CalendarDay(date);
```

| Property   | Description                          | Type      |
| ---------- | ------------------------------------ | --------- |
| `day`      | Day of month value                   | `number`  |
| `month`    | Month value                          | `month`   |
| `year`     | Year value                           | `month`   |
| `isToday`  | Indicates if the day is today.       | `boolean` |
| `isPast`   | Indicates if the day is before today | `boolean` |
| `isFuture` | Indicates if the day is after today  | `boolean` |

## Options

```ts
import { DayOfWeek } from 'calendar-view-utils';

const options = {
  weekStartsOn: DayOfWeek.Monday,
};

const view = new CalendarWeek(date, options);
```

| Property       | Description                  | Type        | Default  |
| -------------- | ---------------------------- | ----------- | -------- |
| `weekStartsOn` | Which day the week starts on | `DayOfWeek` | `Sunday` |

## Utilities

```ts
import { DayOfWeek, getWeekDays } from 'calendar-view-utils';

const example1 = getWeekDays();
// => [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]

const example2 = getWeekDays(DayOfWeek.Monday);
// => [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
```

# Development

```
npm install
npm run build
```
