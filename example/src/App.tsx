import { CalendarMonth, getWeekDays } from 'calendar-view-utils/dist';
import classNames from 'classnames';
import { addMonths, subMonths } from 'date-fns';
import React, { useState } from 'react';

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function App() {
  const [date, setDate] = useState(new Date());
  const headers = getWeekDays();
  const view = new CalendarMonth(date);

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">
          {MONTHS[view.month]} {view.year}
        </h1>
        <div>
          <button type="button" onClick={() => setDate(subMonths(date, 1))}>
            Prev
          </button>
          <button type="button" onClick={() => setDate(addMonths(date, 1))}>
            Next
          </button>
        </div>
      </header>
      <table className="calendar">
        <thead>
          <tr>
            {headers.map((day) => (
              <th className="calendar__weekday">{WEEK_DAYS[day]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {view.weeks.map((week) => (
            <tr>
              {week.days.map((day) => (
                <td
                  className={classNames('calendar__day', {
                    'calendar__day--is-today': day.isToday,
                    'calendar__day--is-outside': day.month !== view.month,
                  })}
                >
                  <span className="calendar__number">{day.day}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
