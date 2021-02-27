import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarV = () => {
    const [calendarType, onChange] = useState(new Date());

    return (
      <div>
        <Calendar
          onChange={onChange}
          value={calendarType}
        />
      </div>     
    );
}